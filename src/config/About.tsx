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

export const technicalSkillsByCategory: { category: string; skills: string[] }[] = [
  { category: 'Frontend', skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'ShadCN UI'] },
  { category: 'Backend & Cloud', skills: ['Node.js', 'MongoDB', 'REST APIs'] },
  { category: 'Automation & AI', skills: ['LangChain', 'n8n', 'Embeddings'] },
  { category: 'CMS', skills: ['WordPress', 'Contentstack'] },
  { category: 'Tools', skills: ['GitHub', 'VS Code', 'Postman', 'Figma', 'Notion', 'Vercel'] },
  { category: 'Soft Skills', skills: ['Analytical Thinking', 'Collaboration', 'Problem Solving', 'Time Management'] },
];

export const profileImage = '/company/1715195128331.jpeg';
export const aboutSectionImage = '/about/about-hero.png';
/** Who I am illustration (tech, YouTube, AI, Next.js) */
export const whoIAmImage = '/project/ChatGPT Image Feb 18, 2026, 12_38_09 AM.png';
export const hackathonsSectionImage = '/about/hackathons-hero.png';

export const about = {
  name: 'Hemant Kadam',
  description: `Software developer with strong expertise in frontend (React, Next.js, Tailwind) and backend (Node.js, NestJS, MongoDB). Backend and DevOps oriented: Docker, APIs, deployment. Building high-performance web apps. Creator at @BloggerHemant (10K+). Recognized in national and international hackathons.`,

  aboutMe: [
    {
      title: 'Who Am I?',
      content: `I'm a software developer and creator who loves building products and sharing knowledge. I focus on frontend (React, Next.js, Tailwind) and work with Node.js, NestJS, MongoDB on the backend.`
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
      answer: 'Find me on GitHub, LinkedIn, YouTube, and Blogger. All links below open in a new tab.',
      links: [
        { label: 'GitHub', href: 'https://github.com/hemant-i7' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hemant-kadam-5a1195194/' },
        { label: 'Blogger Hemant (YT)', href: 'https://www.youtube.com/@bloggerhemant' },
        { label: 'Hemant Kadam (YT)', href: 'https://www.youtube.com/@HemanTKadaM' },
        { label: 'Tech Hemant (YT)', href: 'https://www.youtube.com/@techhemant8484' },
        { label: 'Blog', href: 'https://blogger.hemantkadam.in/' },
        { label: 'Linktree', href: 'https://linktr.ee/hemant_i7' },
      ]
    },
    {
      question: 'How can I contact you?',
      answer: 'Email (hemantkadam112@gmail.com), LinkedIn, or the Contact page on this site. I respond to genuine inquiries.'
    },
    {
      question: 'Do you do freelancing or consulting?',
      answer: 'Yes, for the right projects. I focus on frontend, full-stack web apps, and AI/automation. Reach out with details.'
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
  { title: '1st Place – IIT Roorkee 44-hour Hackathon', where: 'IIT Roorkee', note: 'Seventh hackathon win. Team: Kaustubh Bane, Hasan Sayyed, Morvi Panchal.', emoji: '🥇', description: 'Premier 44-hour hackathon at IIT Roorkee.', url: 'https://www.iitr.ac.in/', postUrl: '', postImageUrl: '/assets/1770533753132.jpeg' },
  { title: 'Winner – TechSurf 2025', where: 'TechSurf', note: '', emoji: '🏆', description: 'Contentstack\'s annual flagship hackathon for India\'s next-gen developers. 40,000+ participants over 5 editions; certification, pitch, and finale rounds.', url: 'https://contentstack.com/techsurf', postUrl: '', postImageUrl: '/assets/1761478333779.jpeg' },
  { title: '1st Runner-up – Webathon 2025 (National)', where: 'Webathon', note: '', emoji: '🥈', description: 'National-level hackathon by ACM-MHSSCE; multi-round with startup funding and mentorship.', url: 'https://webathon.mhsscoe.acm.org/', postUrl: '', postImageUrl: '/assets/1723226899215.jpeg' },
  { title: '2nd Runner-up – Saboo Siddik College Hackathon (National)', where: 'Saboo Siddik College, Mumbai', note: '', emoji: '🥉', description: 'National hackathon at M.H. Saboo Siddik College of Engineering, Mumbai.', url: 'https://webathon.mhsscoe.acm.org/', postUrl: '', postImageUrl: '/about/WhatsApp Image 2026-02-18 at 11.53.44.jpeg' },
  { title: '5th Place – Google Build & Blog Hackathon, Google Office BKC (National)', where: 'Google Office BKC', note: '', emoji: '🎯', description: 'Build & Blog Marathon at Google Mumbai (BKC). Theme: Data to Generative AI with Google Cloud; mentorship from Google.', url: 'https://gdg.community.dev/', postUrl: '', postImageUrl: '/assets/1762709389501.jpeg' },
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
