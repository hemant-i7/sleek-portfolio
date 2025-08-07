'use client';

import ChatBubbleIcon from '@/components/svgs/ChatBubbleIcon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  ExpandableChat,
  ExpandableChatBody,
  ExpandableChatFooter,
  ExpandableChatHeader,
} from '@/components/ui/expandable-chat';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { chatSuggestions } from '@/config/ChatPrompt';
import { heroConfig } from '@/config/Hero';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import SendIcon from '../svgs/SendIcon';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
  isStreaming?: boolean;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hello! I'm Ram's Portfolio Assistant. How can I help you?",
    sender: 'bot',
    timestamp: '', // Set after mount to avoid SSR/client mismatch
  },
];

const getCurrentTime = () => {
  return new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
};

const ChatBubble: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Set initial message timestamp after mount (client only)
  useEffect(() => {
    setMessages((msgs) =>
      msgs.map((msg) =>
        msg.timestamp === '' ? { ...msg, timestamp: getCurrentTime() } : msg,
      ),
    );
  }, []);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector(
        '[data-radix-scroll-area-viewport]',
      );
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || isLoading) return;

    const messageText = newMessage.trim();
    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      timestamp: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage('');
    setIsLoading(true);

    // Create a temporary bot message for streaming
    const botMessageId = Date.now() + 1;
    const botMessage: Message = {
      id: botMessageId,
      text: '',
      sender: 'bot',
      timestamp: getCurrentTime(),
      isStreaming: true,
    };

    setMessages((prev) => [...prev, botMessage]);

    // Send the message using the refactored function
    await sendMessage(messageText, botMessageId);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setNewMessage(suggestion);
    // Auto-send the suggestion
    const userMessage: Message = {
      id: Date.now(),
      text: suggestion,
      sender: 'user',
      timestamp: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Create a temporary bot message for streaming
    const botMessageId = Date.now() + 1;
    const botMessage: Message = {
      id: botMessageId,
      text: '',
      sender: 'bot',
      timestamp: getCurrentTime(),
      isStreaming: true,
    };

    setMessages((prev) => [...prev, botMessage]);

    // Send the message (reuse the same logic as handleSendMessage)
    sendMessage(suggestion, botMessageId);
  };

  const sendMessage = async (messageText: string, botMessageId: number) => {
    try {
      // Prepare conversation history for Gemini API format
      const history = messages.slice(-10).map((msg) => ({
        role: msg.sender === 'user' ? ('user' as const) : ('model' as const),
        parts: [{ text: msg.text }],
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageText,
          history,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error('No reader available');
      }

      let accumulatedText = '';

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));

              if (data.error) {
                throw new Error(data.error);
              }

              if (data.text) {
                accumulatedText += data.text;

                // Update the streaming message in real-time
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === botMessageId
                      ? { ...msg, text: accumulatedText, isStreaming: true }
                      : msg,
                  ),
                );
              }

              if (data.done) {
                // Finalize the message
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === botMessageId
                      ? { ...msg, text: accumulatedText, isStreaming: false }
                      : msg,
                  ),
                );
                break;
              }
            } catch {
              continue;
            }
          }
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);

      // Update the bot message with an error
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessageId
            ? {
                ...msg,
                text: "I'm sorry, I'm having trouble responding right now. Please try again later.",
                isStreaming: false,
              }
            : msg,
        ),
      );
    } finally {
      setIsLoading(false);
      setNewMessage('');
    }
  };

  return (
    <ExpandableChat
      className="hover:cursor-pointer"
      position="bottom-right"
      size="lg"
      icon={<ChatBubbleIcon className="h-6 w-6" />}
    >
      <ExpandableChatHeader>
        <div className="flex items-center space-x-3">
          <Avatar className="border-primary h-8 w-8 border-2 bg-blue-300 dark:bg-yellow-300">
            <AvatarImage src="/assets/logo.png" alt="Assistant" />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-sm font-semibold">
              {heroConfig.name}&apos;s Portfolio Assistant
            </h3>
            <div className="text-muted-foreground text-xs">
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                Online
              </div>
            </div>
          </div>
        </div>
      </ExpandableChatHeader>

      <ExpandableChatBody>
        <ScrollArea ref={scrollAreaRef} className="h-full p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  'flex w-max max-w-xs flex-col gap-2 rounded-lg px-3 py-2 text-sm',
                  message.sender === 'user'
                    ? 'text-secondary bg-muted ml-auto'
                    : 'bg-muted',
                )}
              >
                <div className="flex items-start space-x-2">
                  {message.sender === 'bot' && (
                    <Avatar className="border-primary h-6 w-6 border-2 bg-blue-300 dark:bg-yellow-300">
                      <AvatarImage src="/assets/logo.png" alt="Assistant" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  )}
                  <div className="max-w-xs flex-1 md:max-w-sm">
                    <div className="flex items-center gap-2">
                      <div className="prose prose-sm dark:prose-invert max-w-none flex-1">
                        {message.text ? (
                          <ReactMarkdown
                            components={{
                              a: (props) => (
                                <a
                                  {...props}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="break-words text-blue-500 underline hover:text-blue-700"
                                />
                              ),
                              // Custom paragraph component to remove default margins
                              p: (props) => (
                                <p {...props} className="m-0 leading-relaxed" />
                              ),
                              // Custom list components
                              ul: (props) => (
                                <ul {...props} className="m-0 pl-4" />
                              ),
                              ol: (props) => (
                                <ol {...props} className="m-0 pl-4" />
                              ),
                              li: (props) => <li {...props} className="m-0" />,
                              // Custom strong/bold component
                              strong: (props) => (
                                <strong {...props} className="font-semibold" />
                              ),
                            }}
                          >
                            {message.text}
                          </ReactMarkdown>
                        ) : (
                          message.isStreaming && (
                            <span className="text-muted-foreground">
                              Thinking...
                            </span>
                          )
                        )}
                      </div>
                    </div>
                    <p
                      className={cn(
                        'mt-1 text-xs',
                        message.sender === 'user'
                          ? 'text-secondary'
                          : 'text-muted-foreground',
                      )}
                    >
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Show suggestions only when conversation just started */}
            {messages.length === 1 && !isLoading && (
              <div className="space-y-2">
                <p className="text-muted-foreground px-3 text-xs">
                  Quick questions:
                </p>
                <div className="flex flex-wrap gap-2 px-3">
                  {chatSuggestions.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="bg-background hover:bg-muted border-muted-foreground/20 h-8 px-3 text-xs"
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </ExpandableChatBody>

      <ExpandableChatFooter>
        <div className="flex space-x-2">
          <Input
            placeholder="Ask me about my work and experience..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            className="flex-1"
          />
          <Button
            size="sm"
            onClick={handleSendMessage}
            disabled={!newMessage.trim() || isLoading}
          >
            {isLoading ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : (
              <SendIcon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </ExpandableChatFooter>
    </ExpandableChat>
  );
};

export default ChatBubble;
