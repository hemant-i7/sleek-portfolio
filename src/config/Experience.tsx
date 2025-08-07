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
    location: 'Mumbai, Maharashtra, India',
    image: '/company/surfboard_ventures_logo.jpeg',
    description: [
      'Working as an Associate Software Engineer Intern, contributing to software development projects and collaborating with the engineering team.',
    ],
    startDate: 'Mar 2025',
    endDate: 'Present',
    website: '',
    technologies: [],
  },
  {
    isCurrent: true,
    company: 'Ainertia',
    position: 'Freelancer',
    location: 'Mumbai, Maharashtra, India',
    image: '/company/1713630756849.jpeg',
    description: [
      'Freelance work in Graphic Design, Video Editing, and related skills.',
    ],
    startDate: 'Mar 2022',
    endDate: 'Present',
    website: '',
    technologies: [],
  },
  {
    isCurrent: true,
    company: 'YouTube',
    position: 'Content Creator',
    location: '',
    image:
      '/company/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.webp',
    description: [
      'Content Creator on YouTube, producing videos on technology, graphic design, and video editing.',
    ],
    startDate: 'May 2020',
    endDate: 'Present',
    website: 'https://www.youtube.com/@bloggerhemant',
    technologies: [],
  },
  {
    isCurrent: true,
    company: 'Blogger Hemant',
    position: 'Content Creator',
    location: '',
    image:
      '/company/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.webp',
    description: ['Content Creator for Blogger Hemant YouTube channel.'],
    startDate: 'May 2020',
    endDate: 'Present',
    website: 'https://www.youtube.com/@bloggerhemant',
    technologies: [],
  },
  {
    isCurrent: false,
    company: 'NS Media',
    position: 'Web Developer',
    location: 'Vasai, Maharashtra, India',
    image: '/company/nsmedia.png',
    description: [
      'Web Developer Intern at NS Media, working on front-end and back-end development, Figma, and video editing.',
    ],
    startDate: 'Aug 2022',
    endDate: 'Sep 2022',
    website: '',
    technologies: [],
  },
];

// Profile image for use elsewhere
export const profileImage = '/company/1715195128331.jpeg';
