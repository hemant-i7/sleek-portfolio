import Gemini from '@/components/technologies/Gemini';
import MongoDB from '@/components/technologies/MongoDB';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import OpenAI from '@/components/technologies/OpenAI';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

export const mySkills = [
  <OpenAI key="openai" />,
  <Gemini key="gemini" />,
  <NextJs key="nextjs" />,
  <ReactIcon key="react" />,
  <TypeScript key="typescript" />,
  <NestJs key="nestjs" />,
  <NodeJs key="nodejs" />,
  <MongoDB key="mongodb" />,
];

export const technicalSkillsByCategory: { category: string; skills: string[] }[] = [
  {
    category: 'AI / LLM',
    skills: [
      'LangChain',
      'ReAct agents',
      'RAG',
      'OpenAI API',
      'Gemini API',
      'Claude API',
      'FAISS',
      'prompt engineering',
    ],
  },
  {
    category: 'Evals & Observability',
    skills: [
      'Custom eval sets',
      'output scoring',
      'token logging',
      'cost optimization',
      'hallucination checks',
    ],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Chrome extensions (MV3)', 'streaming UI'],
  },
  {
    category: 'Backend & Data',
    skills: ['Node.js', 'NestJS', 'MongoDB', 'PostgreSQL', 'REST APIs', 'n8n', 'vector databases'],
  },
  {
    category: 'Tools',
    skills: ['GitHub', 'Vercel', 'Postman', 'Figma', 'Notion', 'Contentstack', 'AWS Cloud Foundations'],
  },
];

export const profileImage = '/assets/Hemant-kadam.png';
export const aboutSectionImage = '/about/about-hero.png';
/** Who I am illustration (tech, YouTube, AI, Next.js) */
export const whoIAmImage = '/project/ChatGPT Image Feb 18, 2026, 12_38_09 AM.png';
export const hackathonsSectionImage = '/about/hackathons-hero.png';

export const about = {
  name: 'Hemant Kadam',
  description: `AI Engineer specializing in LLM-powered products: RAG pipelines, ReAct agents, agentic browser extensions, and AI automation backends. Shipped 5 production AI products. Won 7 hackathons including IIT Roorkee (National) and Bit & Build (International). Teaches AI development to 49K+ YouTube and 13K+ Instagram followers. Core stack: LangChain, OpenAI, Gemini, Claude, FAISS, n8n, Next.js.`,

  aboutMe: [
    {
      title: 'Who Am I?',
      content: `I'm an AI Product Engineer and creator. I build LLM apps—RAG systems, ReAct agents, Chrome side-panel agents, and n8n automation backends—and ship them with Next.js, NestJS, and vector stores like FAISS.`
    },
    {
      title: 'What Drives Me',
      content: `I'm passionate about production AI: evals, observability, cost control, and tools users actually adopt. I turn hackathon ideas into live products and document the process for developers on YouTube and Instagram.`
    },
    {
      title: 'Beyond Code',
      content: `I run YouTube channels with 49K+ combined subscribers, @hemantkadam.ai on Instagram (13K+), blogs with 2M+ organic traffic, and workshops at SLRTCE on freelancing and AI agent automation.`
    },
    {
      title: 'Open for Business',
      content: `I'm open to exciting opportunities where I can contribute my skills and grow. Whether you need talent for your product, a team member, or a co-founder, let's talk!`
    },
    {
      title: 'Disclaimer',
      content: `My views are my own and don't reflect any organization. Following/liking doesn't mean endorsement. I'm not a certified advisor in any field. I use social media for fun and personal sharing.`
    }
  ],
  
  faq: [
    {
      question: 'Are you open for job opportunities?',
      answer: 'Not generally, unless it is such an extraordinary opportunity (not always about money) that can change my mind.'
    },
    {
      question: 'What are your socials?',
      answer: 'Find me on GitHub, LinkedIn, YouTube, Instagram, and Blogger. All links below open in a new tab.',
      links: [
        { label: 'GitHub', href: 'https://github.com/hemant-i7' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hemant-kadam-5a1195194/' },
        { label: 'Instagram (13K+)', href: 'https://www.instagram.com/hemantkadam.ai/' },
        { label: 'Hemant Kadam AI (YT)', href: 'https://www.youtube.com/@hemantkadamai' },
        { label: 'Hemant Kadam (YT)', href: 'https://www.youtube.com/@HemanTKadaM' },
        { label: 'Tech Hemant (YT)', href: 'https://www.youtube.com/@techhemant8484' },
        { label: 'Blog', href: 'https://blogger.hemantkadam.in/' },
        { label: 'Linktree', href: 'https://linktr.ee/hemant_i7' },
      ]
    },
    {
      question: 'How can I contact you?',
      answer: 'Email (work@hemantkadam.in), LinkedIn, or the Contact page on this site. I respond to genuine inquiries.'
    },
    {
      question: 'Do you do freelancing or consulting?',
      answer: 'Yes, for the right projects. I focus on LLM products, RAG, agents, full-stack AI apps, and automation. Reach out with details.'
    },
    {
      question: 'Where can I see your work?',
      answer: 'Projects and Blogs sections on this site, plus GitHub for code. YouTube and Blogger for tutorials and content.'
    },
  ]
};

export const education = [
  {
    institution: 'Shree L. R. Tiwari College of Engineering (Mumbai University)',
    degree: 'B.E. Computer Engineering (CGPA: 8.5)',
    duration: 'Sep 2023 – Jun 2026',
    location: 'Mumbai, India',
  },
  {
    institution: 'Viva College of Diploma Engineering and Technology',
    degree: 'Diploma in Computer Engineering (84%)',
    duration: 'Aug 2020 – Jun 2023',
    location: 'Mumbai, India',
    score: '84%',
  },
];

export const achievements = [
  { title: 'Winner – IIT Roorkee 44-Hour Hackathon (National)', where: 'IIT Roorkee', note: 'AI product judged best by IIT faculty and industry engineers.', emoji: '🥇', description: 'Premier 44-hour national hackathon at IIT Roorkee.', url: 'https://www.iitr.ac.in/', postUrl: '', postImageUrl: '/assets/1770533753132.jpeg' },
  { title: 'Winner – TechSurf 2025', where: 'TechSurf', note: '', emoji: '🏆', description: 'Contentstack\'s annual flagship hackathon for India\'s next-gen developers. 40,000+ participants over 5 editions; certification, pitch, and finale rounds.', url: 'https://contentstack.com/techsurf', postUrl: '', postImageUrl: '/assets/1761478333779.jpeg' },
  { title: '1st Runner-up – Webathon 2025 (National)', where: 'Webathon', note: '', emoji: '🥈', description: 'National-level hackathon by ACM-MHSSCE; multi-round with startup funding and mentorship.', url: 'https://webathon.mhsscoe.acm.org/', postUrl: '', postImageUrl: '/assets/1723226899215.jpeg' },
  { title: '2nd Runner-up – Saboo Siddik College Hackathon (National)', where: 'Saboo Siddik College, Mumbai', note: '', emoji: '🥉', description: 'National hackathon at M.H. Saboo Siddik College of Engineering, Mumbai.', url: 'https://webathon.mhsscoe.acm.org/', postUrl: '', postImageUrl: '/about/WhatsApp Image 2026-02-18 at 11.53.44.jpeg' },
  { title: '5th Place – Google Build & Blog Hackathon, Google Mumbai BKC', where: 'Google Office BKC', note: 'Theme: Generative AI on Google Cloud.', emoji: '🎯', description: 'Build & Blog Marathon at Google Mumbai (BKC) with Google Cloud mentorship.', url: 'https://gdg.community.dev/', postUrl: '', postImageUrl: '/assets/1762709389501.jpeg' },
  { title: 'YouTube Creator Collective', where: 'YouTube', note: '', emoji: '📺', description: 'Part of YouTube Creator Collective meetup.', url: 'https://www.youtube.com/', postUrl: '', postImageUrl: '/assets/1716131753680.jpeg' },
  { title: 'Top 5 Finalist – Bit & Build International Hackathon', where: 'Fr. CRCE, Mumbai (International)', note: '', emoji: '🌍', description: 'International hackathon by GDSC Fr. Conceicao Rodrigues College. 2,500+ participants, 400+ teams, 20+ countries; AI, ML, Web, UX themes.', url: 'https://bit-n-build.devfolio.co/', postUrl: '', postImageUrl: '' },
  { title: 'Top Performer – Global Digital Health Summit Hackathon', where: 'NMACC (International)', note: '', emoji: '⚡', description: 'Hackathon at Global Digital Health Summit; digital health, AI, and telemedicine focus.', url: 'https://cdac.in/index.aspx?id=lu_GDHS', postUrl: '', postImageUrl: '/about/WhatsApp Image 2026-02-18 at 11.52.19.jpeg', postImageUrls: ['/about/WhatsApp Image 2026-02-18 at 11.52.19.jpeg', '/about/WhatsApp Image 2026-02-18 at 11.52.50.jpeg'] },
  { title: 'Top 5 – Technovation', where: 'Amrutvahini College Nashik (National)', note: '', emoji: '🚀', description: 'National tech hackathon at Amrutvahini College of Engineering, Nashik.', url: 'https://www.amrutvahini.org/', postUrl: '', postImageUrl: '/about/WhatsApp Image 2026-02-18 at 11.55.18.jpeg' },
];

export const extracurriculars = [
  {
    title: 'n8n Official Content Creator',
    duration: 'India · 2+ years',
    description: `Official n8n content creator for India. Creating workflow automation tutorials, tips, and demos. See the Links section for my n8n reel.`,
  },
  {
    title: 'Blogging & SEO',
    duration: 'Present',
    description: `Manage and rank 4+ personal websites (MarathiBeast.com, HireBace.com, hemant.engineer). Improved SEO and generated 2M+ Google organic traffic in 6 months.`,
  },
  {
    title: 'Content Creation',
    duration: 'Present',
    description: `Multiple YouTube channels with 49K+ combined subscribers and 13K+ on Instagram @hemantkadam.ai. Educational content on AI agents, LangChain, RAG, and automation.`,
  },
  {
    title: 'Workshops & Mentoring',
    duration: 'SLRTCE',
    description: `Conducted technical workshops: How to Do Freelancing, AI Agent Automation.`,
  },
];

export const certifications = [
  {
    title: 'Contentstack for Developers +Launch',
    issuer: 'Contentstack',
    logo: '/company/contentstack.png', // Update with actual logo if available
    date: 'Oct 2024',
    credentialId: 'BCWPFANQ',
    credentialUrl: 'https://www.edquest.pro/certificate/techsurf-BCWPFANQ',
  },
  {
    title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services',
    logo: '/company/aws.png', // Update with actual logo if available
    date: 'Apr 2024',
    credentialId: 'a20568ae-23f2-40c7-8f01-07e48ce9fbe1',
    credentialUrl:
      'https://www.credly.com/badges/a20568ae-23f2-40c7-8f01-07e48ce9fbe1',
    skills: [
      'Amazon Web Services (AWS)',
      'AWS Elastic Beanstalk',
      'AWS Identity and Access Management (AWS IAM)',
      'AWS CloudFormation',
    ],
  },
  {
    title: 'Postman API fundamentals Student Expert',
    issuer: 'Postman',
    logo: '/company/postman.png', // Update with actual logo if available
    date: 'Feb 2024',
    credentialId: 'G0U1YVeOSdGAiytb9Yw6',
    credentialUrl:
      'https://badgr.com/public/assertions/HGisimb9S-yWLXU3LmS8eA?identity__email=hemant.l.kadam@slrtce.in&action=download',
  },
];
