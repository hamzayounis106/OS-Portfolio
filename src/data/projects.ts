export interface Project {
  id: number;
  name: string;
  kind: string;
  dateCreated: string;
  description: string;
  tags: string[];
  githubLink?: string;
  liveLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'E-Commerce Platform',
    kind: 'MERN Stack',
    dateCreated: 'Jan 15, 2024',
    description: 'Full-stack e-commerce platform with payment integration',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubLink: 'https://github.com/yourusername/ecommerce',
    liveLink: 'https://xissed.vercel.app/',
  },
  {
    id: 2,
    name: 'Bay City Realty',
    kind: 'WordPress',
    dateCreated: 'Feb 20, 2024',
    description:
      'Online real estate platform for buying and selling properties',
    tags: ['WordPress', 'PHP', 'MySQL'],
    githubLink: 'https://github.com/yourusername/wp-portfolio',
    liveLink: 'https://baycityrealty.com/',
  },
  {
    id: 3,
    name: 'Task Management App',
    kind: 'MERN Stack',
    dateCreated: 'Mar 10, 2024',
    description: 'Real-time task management with team collaboration',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    githubLink: 'https://github.com/yourusername/task-manager',
    liveLink: 'https://example-taskmanager.com',
  },
  {
    id: 4,
    name: 'Blog CMS',
    kind: 'WordPress',
    dateCreated: 'Apr 5, 2024',
    description: 'Custom WordPress blog with advanced SEO features',
    tags: ['WordPress', 'PHP', 'MySQL', 'SEO'],
    liveLink: 'https://example-blog.com',
  },
  {
    id: 5,
    name: 'Social Media Dashboard',
    kind: 'MERN Stack',
    dateCreated: 'May 18, 2024',
    description: 'Analytics dashboard for social media metrics',
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    githubLink: 'https://github.com/yourusername/social-dashboard',
    liveLink: 'https://example-dashboard.com',
  },
];
