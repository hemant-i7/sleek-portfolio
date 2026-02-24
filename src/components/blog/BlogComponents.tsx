import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { CodeCopyButton } from './CodeCopyButton';

function isInternal(href: string): boolean {
  if (!href || typeof href !== 'string') return false;
  return href.startsWith('/') && !href.startsWith('//');
}

export const BlogComponents = {
  a: ({
    href,
    children,
    ...props
  }: {
    href?: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) => {
    if (!href) return <span {...props}>{children}</span>;
    if (isInternal(href)) {
      return (
        <Link href={href} className="text-primary underline underline-offset-2 hover:opacity-80" {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-2 hover:opacity-80"
        {...props}
      >
        {children}
      </a>
    );
  },
  // Override default image component
  img: ({
    src,
    alt,
    ...props
  }: {
    src: string;
    alt?: string;
    [key: string]: unknown;
  }) => (
    <Image
      src={src}
      alt={alt ?? 'Blog post image'}
      width={800}
      height={400}
      className="rounded-lg"
      sizes="(max-width: 768px) 100vw, 800px"
      loading="lazy"
      decoding="async"
      {...props}
    />
  ),
  // Custom heading with better styling
  h1: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <h1 className="mb-6 text-4xl font-bold" {...props}>
      {children}
    </h1>
  ),
  h2: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <h2 className="mt-8 mb-4 text-3xl font-semibold" {...props}>
      {children}
    </h2>
  ),
  h3: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <h3 className="mt-6 mb-3 text-2xl font-medium" {...props}>
      {children}
    </h3>
  ),
  // Custom paragraph styling
  p: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <p className="text-muted-foreground mb-4 leading-7" {...props}>
      {children}
    </p>
  ),
  // Custom list styling
  ul: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <ul className="mb-4 ml-6 list-disc space-y-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <ol className="mb-4 ml-6 list-decimal space-y-2" {...props}>
      {children}
    </ol>
  ),
  li: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <li className="text-muted-foreground leading-7" {...props}>
      {children}
    </li>
  ),
  pre: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => {
    const getTextContent = (node: React.ReactNode): string => {
      if (typeof node === 'string') {
        return node;
      }
      if (typeof node === 'number') {
        return String(node);
      }
      if (
        React.isValidElement(node) &&
        node.props &&
        typeof node.props === 'object'
      ) {
        return getTextContent(
          (node.props as { children?: React.ReactNode }).children,
        );
      }
      if (Array.isArray(node)) {
        return node.map(getTextContent).join('');
      }
      return '';
    };

    const codeText = getTextContent(children);

    return (
      <div className="group relative mb-4">
        <pre
          className="bg-muted/30 overflow-x-auto rounded-lg border p-4 text-sm [&>code]:bg-transparent [&>code]:p-0"
          {...props}
        >
          {children}
        </pre>
        <CodeCopyButton code={codeText} />
      </div>
    );
  },
  // Inline code styling (not affected by syntax highlighting)
  code: ({
    children,
    className,
    ...props
  }: {
    children: React.ReactNode;
    className?: string;
    [key: string]: unknown;
  }) => {
    // If it's part of a pre block (syntax highlighted), don't apply inline styling
    if (className?.includes('language-')) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }

    // Inline code styling
    return (
      <code className="rounded px-2 py-1 font-mono text-sm" {...props}>
        {children}
      </code>
    );
  },
  // Table wrapper for overflow and borders
  table: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <div className="my-6 w-full overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[480px] border-collapse text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => (
    <thead className="bg-muted/50" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => (
    <tbody {...props}>
      {children}
    </tbody>
  ),
  th: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <th
      className="border-b border-border px-4 py-3 text-left font-semibold"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <td className="border-b border-border/60 px-4 py-3" {...props}>
      {children}
    </td>
  ),
  tr: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => (
    <tr className="hover:bg-muted/20 transition-colors" {...props}>
      {children}
    </tr>
  ),
  // Custom blockquote styling
  blockquote: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <blockquote
      className="border-primary text-muted-foreground mb-4 border-l-4 pl-4 italic"
      {...props}
    >
      {children}
    </blockquote>
  ),
};
