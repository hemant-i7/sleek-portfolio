/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **software development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import Gemini from '@/components/technologies/Gemini';
import MongoDB from '@/components/technologies/MongoDB';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import OpenAI from '@/components/technologies/OpenAI';
import ReactIcon from '@/components/technologies/ReactIcon';
// Technology Components
import TypeScript from '@/components/technologies/TypeScript';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  OpenAI: OpenAI,
  Gemini: Gemini,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  NestJs: NestJs,
};

export const heroConfig = {
  // Personal Information
  name: 'Hemant Kadam',
  title: 'AI Product Engineer & Content Creator.',
  avatar: '/assets/Hemant-kadam.png',

  // Skills Configuration
  skills: [
    {
      name: 'Typescript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'OpenAI',
      href: 'https://openai.com/',
      component: 'OpenAI',
    },
    {
      name: 'Gemini',
      href: 'https://ai.google.dev/',
      component: 'Gemini',
    },
    {
      name: 'NestJS',
      href: 'https://nestjs.com/',
      component: 'NestJs',
    },
  ],

  // Description Configuration
  description: {
    template:
      'AI Engineer building LLM products: RAG, ReAct agents, agentic browser extensions, and automation backends. Shipped 5 production AI apps. Stack: <b>LangChain</b>, OpenAI, Gemini, Claude, FAISS, n8n, Next.js. 7× hackathon winner. Teaching AI to <b>49K+ YouTube</b> and <b>13K+ Instagram</b> followers.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'X',
    href: 'https://twitter.com/hemant_i7',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hemant-kadam-5a1195194/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/hemant-i7',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:works@hemant.engineer',
    icon: <Mail />,
  },
];
