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
  description: `I'm a passionate Full Stack Web Developer and Content Creator. I love building responsive, user-friendly web applications and sharing knowledge through blogs and tutorials. Specialized in JavaScript, React.js, and Next.js, with a strong foundation in both frontend and backend development.`,
};

export const education = [
  {
    institution: 'Viva College of Diploma Engineering and Technology',
    degree: 'Diploma in Computer Science',
    duration: 'Aug 2020 – Jun 2023',
    location: 'Mumbai, India',
    score: '84%'
  },
  {
    institution: 'Shree L. R. Tiwari College of Engineering (Mumbai University)',
    degree: 'Bachelor of Engineering in Computer Science (Second Year Pursuing)',
    duration: 'Sep 2023 – Jun 2026',
    location: 'Mumbai, India',
  },
];

export const extracurriculars = [
  {
    title: 'Blogging',
    duration: 'March 2018 – Present',
    description: `Actively manage and curate content for 5+ personal websites covering technology, lifestyle, and personal development. Implement effective SEO techniques and content strategies to optimize website performance and enhance visibility on search engines. Regularly analyze website analytics and metrics to track growth and identify areas for improvement. Collaborate with guest writers and contributors to diversify content and reach a broader audience.`
  },
  {
    title: 'Content Creation',
    duration: 'March 2021 – Present',
    description: `Established a YouTube channel (Blogger hemant) in 2021 and diversified content creation efforts across various platforms. Create and publish in-depth tutorials, walkthroughs, and tips for beginners and experienced developers alike. Utilize video editing software to enhance production quality and engage viewers. Interact with subscribers through comments, live streams, and community posts to foster a supportive and engaged audience. Collaborate with other content creators and industry experts to create collaborative content and expand reach.`
  }
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
    credentialUrl: 'https://www.credly.com/badges/a20568ae-23f2-40c7-8f01-07e48ce9fbe1',
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
    credentialUrl: 'https://badgr.com/public/assertions/HGisimb9S-yWLXU3LmS8eA?identity__email=hemant.l.kadam@slrtce.in&action=download',
  },
];
