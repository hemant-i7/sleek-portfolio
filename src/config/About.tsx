import Bun from '@/components/technologies/Bun';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

export const mySkills = [
  <JavaScript key="javascript" />,
  <NextJs key="nextjs" />,
  <ReactIcon key="react" />,
  <TypeScript key="typescript" />,
  <MongoDB key="mongodb" />,
  <Bun key="bun" />,
  <NodeJs key="nodejs" />,
  <PostgreSQL key="postgresql" />,
];

export const profileImage = '/company/1715195128331.jpeg';

export const about = {
  name: 'Hemant Kadam',
  description: `Web developer with strong expertise in frontend technologies and working knowledge of backend systems. Experienced in high-performance web apps using React.js, Next.js, Tailwind CSS, with backend integration through Node.js, NestJS & MongoDB. Currently pursuing Computer Engineering at SLRTCE and Intern at Surfboard Ventures. Creator at @BloggerHemant (10K+ subscribers). Recognized in multiple national and international hackathons.`,

  aboutMe: [
    {
      title: 'Who Am I?',
      content: `I'm a web developer and creator who loves building products and sharing knowledge. I focus on frontend (React, Next.js, Tailwind) and work with Node.js, NestJS, MongoDB on the backend.`
    },
    {
      title: 'What Drives Me',
      content: `I'm passionate about building high-performance web apps, AI/automation (LangChain, n8n), and creating educational content. I enjoy turning ideas into working solutions and learning from every hackathon and project.`
    },
    {
      title: 'Beyond Code',
      content: `I run multiple YouTube channels (49K+ combined subscribers), manage 4+ blogs with 2M+ organic traffic, and conduct workshops on freelancing and AI automation at my college.`
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
      answer: 'You can find me on X and GitHub. That should be enough for now.'
    }
  ]
};

export const education = [
  {
    institution: 'Shree L. R. Tiwari College of Engineering (Mumbai University)',
    degree: 'Bachelor of Engineering in Computer Science (CGPA: 8.5)',
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
  { title: '1st Place – IIT Roorkee 44-hour Hackathon', note: 'Seventh hackathon win. Team: Kaustubh Bane, Hasan Sayyed, Morvi Panchal.' },
  { title: 'Winner – TechSurf 2025', note: '' },
  { title: '1st Runner-up – Webathon 2025 (National)', note: '' },
  { title: '2nd Runner-up – Saboo Siddik College Hackathon (National)', note: '' },
  { title: '5th Place – Google Build & Blog Hackathon, Google Office BKC (National)', note: '' },
  { title: 'Top 5 Finalist – Bit & Build International Hackathon, Frcrce College (International)', note: '' },
  { title: 'Top Performer – Global Digital Health Summit Hackathon, NMACC (International)', note: '' },
  { title: 'Top 5 – Technovation, Amrutvahini College Nashik (National)', note: '' },
];

export const extracurriculars = [
  {
    title: 'Blogging & SEO',
    duration: 'Present',
    description: `Manage and rank 4+ personal websites (MarathiBeast.com, HireBace.com, Blogger.HemantKadam.in). Improved SEO and generated 2M+ Google organic traffic in 6 months.`,
  },
  {
    title: 'Content Creation',
    duration: 'Present',
    description: `Multiple YouTube channels with 49K+ combined subscribers: Hemant Kadam (33K), Blogger Hemant (10K), Tech Hemant (6K). Educational content on frontend, AI, SEO, automation.`,
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
