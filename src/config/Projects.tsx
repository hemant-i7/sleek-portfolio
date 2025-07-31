import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'OneStop',
    description:
      'Your ultimate training and placement destination! Features: Job Search, Interview Preparation, ATS Compatibility Match, Mock Quizzes, Resources, and Popular Playlists. 2nd Runner-up Webathon 2024.',
    image: '/company/Screenshot 2025-07-27 at 5.55.58 PM.png',
    link: 'https://onestopclient.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs /> },
      { name: 'MongoDB', icon: <MongoDB /> },
      { name: 'TypeScript', icon: <TypeScript /> },
      { name: 'Tailwind CSS', icon: <TailwindCss /> },
    ],
    github: '',
    live: 'https://onestopclient.vercel.app/',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  {
    title: 'SynerzyAI',
    description:
      'The Best AI Tool for Image generation, Video generation & Audio generation.',
    image: '/company/Screenshot 2025-07-27 at 5.54.47 PM.png',
    link: 'https://synerzy-ai.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs /> },
      { name: 'TypeScript', icon: <TypeScript /> },
      { name: 'Tailwind CSS', icon: <TailwindCss /> },
      { name: 'OpenAI', icon: <ReactIcon /> }, // Placeholder icon
      { name: 'Replicate', icon: <ReactIcon /> }, // Placeholder icon
    ],
    github: 'https://github.com/hemant-i7/SynerzyAI',
    live: 'https://synerzy-ai.vercel.app/',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  {
    title: 'TalentLink',
    description:
      'TalentLink is an app that streamlines collaboration between brand managers and influencers. Provides a platform for brands to connect with influencers, manage campaigns, and track performance. Leverages NLP to automate tasks, provide actionable insights, and enhance user experience. Built with Next.js, MongoDB, and advanced analytics. Associated with Shree L. R. Tiwari College of Engineering.',
    image: '/company/1713630756849.jpeg',
    link: 'https://github.com/hemant-i7/talentlink',
    technologies: [
      { name: 'Next.js', icon: <NextJs /> },
      { name: 'MongoDB', icon: <MongoDB /> },
      { name: 'TypeScript', icon: <TypeScript /> },
      { name: 'Tailwind CSS', icon: <TailwindCss /> },
    ],
    github: 'https://github.com/hemant-i7/talentlink',
    live: 'https://talentlink-mocha.vercel.app/',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  {
    title: 'Kreate AI',
    description:
      'KreateAI is an AI-driven tool that simplifies social media content creation by generating creative captions and trending hashtags. Features TamilIM for Tamil language content generation. Top 5 in a Google Hackathon.',
    image: '/assets/1_mkkID8XaV3FBOGNsZ-nIGw.webp',
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
