import React from 'react';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'Surfboard Ventures',
    position: 'Associate Software Engineer Intern',
    location: 'Virar, Mumbai',
    image: '/company/surfboard_ventures_logo.jpeg',
    description: [
      'Developed and optimized modern UIs using Next.js 15 and Tailwind CSS.',
      'Integrated payment workflows for in-app certifications using Razorpay.',
      'Worked with NestJS backend services for reliable data flow between modules.',
    ],
    startDate: 'Feb 2025',
    endDate: 'Present',
    website: '',
    technologies: [],
  },
  {
    isCurrent: false,
    company: 'Nano Technology (Freelance)',
    position: 'Frontend + Automation Engineer Intern',
    location: 'Remote',
    image: '/company/1713630756849.jpeg',
    description: [
      'Built low-code workflow UIs using n8n and LangChain for business process automation.',
      'Developed interactive dashboards and connected them with Node.js APIs.',
      'Streamlined analytics through MongoDB and responsive frontend visualizations.',
    ],
    startDate: 'June 2024',
    endDate: 'Feb 2025',
    website: '',
    technologies: [],
  },
  {
    isCurrent: false,
    company: 'Edba Academy (Contract / Freelance)',
    position: 'Frontend & Digital Marketing Engineer',
    location: 'Remote',
    image: '/company/1713630756849.jpeg',
    description: [
      'Built responsive web pages using HTML, CSS, Tailwind CSS, and JavaScript.',
      'Improved website SEO performance and implemented marketing-related optimizations.',
      'Created dynamic, user-friendly interfaces for academy portals.',
    ],
    startDate: 'July 2023',
    endDate: 'Sep 2023',
    website: '',
    technologies: [],
  },
  {
    isCurrent: false,
    company: 'N. S. Media',
    position: 'Web Developer Intern',
    location: 'Vasai, Mumbai',
    image: '/company/nsmedia.png',
    description: [
      'Created responsive websites using React.js, CSS3, and integrated REST APIs.',
      'Improved page load speed by 20%.',
      'Optimized website SEO for better search engine ranking and visibility.',
    ],
    startDate: 'Aug 2022',
    endDate: 'Sep 2022',
    website: '',
    technologies: [],
  },
  {
    isCurrent: true,
    company: '@BloggerHemant (YouTube)',
    position: 'Content Creator',
    location: '',
    image:
      '/company/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.webp',
    description: [
      'Educational content on frontend, AI, SEO and automation. 10K+ subscribers.',
    ],
    startDate: 'May 2020',
    endDate: 'Present',
    website: 'https://www.youtube.com/@bloggerhemant',
    technologies: [],
  },
];

// Profile image for use elsewhere
export const profileImage = '/company/1715195128331.jpeg';
