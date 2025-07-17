import type { Project, Skill, Experience } from '../types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'DeFi Trading Platform',
    description: 'A decentralized trading platform built with Next.js and Solidity smart contracts',
    technologies: ['Next.js', 'Solidity', 'TypeScript', 'Web3.js', 'Tailwind CSS'],
    github: 'https://github.com/vulh1209/defi-platform',
    demo: 'https://defi-platform.vercel.app',
    category: 'blockchain',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Microservices API',
    description: 'Scalable microservices architecture with NestJS and Kubernetes',
    technologies: ['NestJS', 'TypeScript', 'Docker', 'Kubernetes', 'Redis', 'PostgreSQL'],
    github: 'https://github.com/vulh1209/microservices-api',
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Real-time Chat App',
    description: 'Modern chat application with WebSockets and real-time messaging',
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/vulh1209/chat-app',
    demo: 'https://chat-app-demo.vercel.app',
    category: 'fullstack',
  },
  {
    id: 'project-4',
    title: 'Smart Contract Audit Tools',
    description: 'Security audit tools for Ethereum smart contracts',
    technologies: ['Solidity', 'Python', 'Slither', 'Mythril', 'Hardhat'],
    github: 'https://github.com/vulh1209/audit-tools',
    category: 'blockchain',
  },
];

export const skills: Skill[] = [
  // Frontend
  { id: 'react', name: 'React', level: 95, category: 'frontend' },
  { id: 'nextjs', name: 'Next.js', level: 90, category: 'frontend' },
  { id: 'typescript', name: 'TypeScript', level: 92, category: 'frontend' },
  { id: 'javascript', name: 'JavaScript', level: 95, category: 'frontend' },
  { id: 'tailwind', name: 'Tailwind CSS', level: 88, category: 'frontend' },
  
  // Backend
  { id: 'nodejs', name: 'Node.js', level: 90, category: 'backend' },
  { id: 'nestjs', name: 'NestJS', level: 85, category: 'backend' },
  { id: 'golang', name: 'Go', level: 75, category: 'backend' },
  { id: 'python', name: 'Python', level: 70, category: 'backend' },
  
  // Blockchain
  { id: 'solidity', name: 'Solidity', level: 88, category: 'blockchain' },
  { id: 'web3', name: 'Web3.js', level: 85, category: 'blockchain' },
  { id: 'hardhat', name: 'Hardhat', level: 80, category: 'blockchain' },
  { id: 'ethers', name: 'Ethers.js', level: 82, category: 'blockchain' },
  
  // Tools & DevOps
  { id: 'docker', name: 'Docker', level: 85, category: 'tools' },
  { id: 'kubernetes', name: 'Kubernetes', level: 75, category: 'tools' },
  { id: 'aws', name: 'AWS', level: 80, category: 'tools' },
  { id: 'git', name: 'Git', level: 90, category: 'tools' },
  
  // Database
  { id: 'postgresql', name: 'PostgreSQL', level: 85, category: 'database' },
  { id: 'mongodb', name: 'MongoDB', level: 80, category: 'database' },
  { id: 'redis', name: 'Redis', level: 75, category: 'database' },
];

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Blockchain Solutions Co.',
    position: 'Senior Full Stack & Smart Contract Developer',
    period: '2022 - Present',
    description: [
      'Led development of DeFi protocols and smart contracts on Ethereum',
      'Built scalable web applications using Next.js and NestJS',
      'Implemented microservices architecture with Kubernetes',
      'Conducted security audits and optimized gas usage',
    ],
    technologies: ['Solidity', 'Next.js', 'NestJS', 'TypeScript', 'AWS', 'Kubernetes'],
  },
  {
    id: 'exp-2',
    company: 'Tech Innovation Ltd.',
    position: 'Full Stack Developer',
    period: '2020 - 2022',
    description: [
      'Developed enterprise web applications with React and Node.js',
      'Integrated third-party APIs and payment gateways',
      'Optimized application performance and database queries',
      'Mentored junior developers and conducted code reviews',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    id: 'exp-3',
    company: 'StartupTech',
    position: 'Frontend Developer',
    period: '2019 - 2020',
    description: [
      'Built responsive user interfaces with React and TypeScript',
      'Implemented state management with Redux and Context API',
      'Collaborated with designers to implement pixel-perfect designs',
      'Optimized web performance and SEO',
    ],
    technologies: ['React', 'TypeScript', 'Redux', 'Sass', 'Webpack'],
  },
];