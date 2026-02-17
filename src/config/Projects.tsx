import ElevenLabs from '@/components/technologies/ElevenLabs';
import Gemini from '@/components/technologies/Gemini';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import OpenAI from '@/components/technologies/OpenAI';
import ReactIcon from '@/components/technologies/ReactIcon';
import Replicate from '@/components/technologies/Replicate';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Arise',
    tagline: 'AI-Powered Educational Platform – Quiz, Presentation & Roadmap',
    description:
      'Comprehensive AI learning ecosystem with quiz, presentation, and roadmap modules. Built with Next.js, Gemini API, ElevenLabs, and Node.js.',
    image: '/project/arise-banner.png',
    link: 'https://www.ariseai.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs /> },
      { name: 'TypeScript', icon: <TypeScript /> },
      { name: 'Tailwind CSS', icon: <TailwindCss /> },
      { name: 'Node.js', icon: <NodeJs /> },
      { name: 'Gemini API', icon: <Gemini /> },
      { name: 'ElevenLabs', icon: <ElevenLabs /> },
    ],
    github: 'https://github.com/hemant-i7/Arise',
    live: 'https://www.ariseai.app/',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  {
    title: 'CuraLink',
    tagline: 'AI Medical Diagnosis System',
    description:
      'Multilingual dashboards and LangChain-powered AI diagnosis for medical use cases. Built with Next.js, Tailwind, LangChain, MongoDB, NextAuth.',
    image: '/project/curalink-banner.png',
    link: 'https://curalink-two.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs /> },
      { name: 'Tailwind CSS', icon: <TailwindCss /> },
      { name: 'MongoDB', icon: <MongoDB /> },
      { name: 'LangChain', icon: <ReactIcon /> },
    ],
    github: 'https://github.com/hemant-i7/curalink-bot',
    live: 'https://curalink-two.vercel.app/',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  {
    title: 'TalentLink',
    tagline: 'Brand–Influencer Collaboration Platform',
    description:
      'Streamlines collaboration between brand managers and influencers with campaign management and performance tracking. Leverages NLP. Next.js, MongoDB.',
    image: '/project/talentlink-banner.png',
    link: 'https://talentlink-hk.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs /> },
      { name: 'MongoDB', icon: <MongoDB /> },
      { name: 'TypeScript', icon: <TypeScript /> },
      { name: 'Tailwind CSS', icon: <TailwindCss /> },
    ],
    github: 'https://github.com/hemant-i7/talentlink',
    live: 'https://talentlink-hk.vercel.app/',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  {
    title: 'OneStop',
    tagline: 'Training & Placement Hub – Jobs, ATS Match, Quizzes',
    description:
      'Job and placement platform with quizzes, ATS matching, and dynamic APIs. 1st Runner-up Webathon 2025 (National).',
    image: '/project/onestop-banner.png',
    link: 'https://onestopclient.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs /> },
      { name: 'MongoDB', icon: <MongoDB /> },
      { name: 'TypeScript', icon: <TypeScript /> },
      { name: 'Tailwind CSS', icon: <TailwindCss /> },
    ],
    github: 'https://github.com/hemant-i7/onestop',
    live: 'https://onestopclient.vercel.app/',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  {
    title: 'SynerzyAI',
    tagline: 'AI Image, Video & Audio Generation',
    description:
      'The Best AI Tool for Image generation, Video generation & Audio generation.',
    image: '/project/synerzyai-banner.png',
    link: 'https://synerzy-ai.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs /> },
      { name: 'TypeScript', icon: <TypeScript /> },
      { name: 'Tailwind CSS', icon: <TailwindCss /> },
      { name: 'OpenAI', icon: <OpenAI /> },
      { name: 'Replicate', icon: <Replicate /> },
    ],
    github: 'https://github.com/hemant-i7/SynerzyAI',
    live: 'https://synerzy-ai.vercel.app/',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  {
    title: 'Kreate AI',
    tagline: 'AI Social Media Captions & Hashtags',
    description:
      'KreateAI is an AI-driven tool that simplifies social media content creation by generating creative captions and trending hashtags. Features TamilIM for Tamil language content generation. Top 5 in a Google Hackathon.',
    image: '/project/kreate-ai-banner.png',
    link: 'https://medium.com/@erchirag12/real-time-social-media-content-generator-dedf534be341',
    technologies: [
      { name: 'Next.js', icon: <NextJs /> },
      { name: 'TypeScript', icon: <TypeScript /> },
      { name: 'Tailwind CSS', icon: <TailwindCss /> },
      { name: 'OpenAI', icon: <ReactIcon /> }, // Placeholder icon
    ],
    github: '',
    live: 'https://medium.com/@erchirag12/real-time-social-media-content-generator-dedf534be341',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
];
