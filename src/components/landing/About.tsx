import { about, mySkills } from '@/config/About';
import Image from 'next/image';
import React from 'react';
import { FaCode, FaLightbulb, FaMusic, FaHandshake, FaInfoCircle } from 'react-icons/fa';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export default function About() {
  const getIcon = (title: string) => {
    switch (title) {
      case 'Who Am I?':
        return <FaCode className="mr-2 text-blue-500" />;
      case 'What Drives Me':
        return <FaLightbulb className="mr-2 text-yellow-500" />;
      case 'Beyond Code':
        return <FaMusic className="mr-2 text-purple-500" />;
      case 'Open for Business':
        return <FaHandshake className="mr-2 text-green-500" />;
      case 'Disclaimer':
        return <FaInfoCircle className="mr-2 text-gray-500" />;
      default:
        return null;
    }
  };

  return (
    <Container className="mt-20">
      <SectionHeading subHeading="About" heading="Me" />
      
      {/* Main About Section */}
      <div className="mt-8 flex flex-col gap-8 md:flex-row">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative">
            <Image
              src="/assets/logo.png"
              alt={about.name}
              width={240}
              height={240}
              className="border-secondary rounded-full border-4 bg-blue-300 dark:bg-yellow-300"
            />
            <div className="absolute -bottom-3 -right-3 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg">
              <div className="text-xs font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full">
                Available for exciting projects
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-2/3 space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{about.name}</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{about.description}</p>
          </div>
          
          {/* About Me Sections */}
          <div className="space-y-4">
            {about.aboutMe.map((section, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  {getIcon(section.title)}
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{section.content}</p>
              </div>
            ))}
          </div>
          
          {/* FAQ Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full">
              {about.faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* Skills Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {mySkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  {skill.key}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
