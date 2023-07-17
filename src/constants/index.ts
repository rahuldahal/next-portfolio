export const navLinks: { text: string; path: string }[] = [
  {
    text: 'About',
    path: '/about',
  },
  {
    text: 'Community',
    path: '/community',
  },
  {
    text: 'Blogs',
    path: '/blogs',
  },
  {
    text: 'Contact',
    path: '/contact',
  },
];

export const expertiseList: string[] = [
  'Core JavaScript',
  'Node.js',
  'React.js',
  'Next.js',
  'Microservices',
  'Docker',
  'MongoDB',
  'PostgreSQL',
  'Vue.js',
  'Linux Kernel and Command Line',
  'Basic DevOps',
];

export interface workDetail {
  company: string;
  role: string;
  duration: string;
  description: string[];
}
export const professionalBackgrounds: workDetail[] = [
  {
    company: 'Smartforce',
    role: 'Vue.js Developer',
    duration: 'Aug 03, 2021 - Oct 27, 2021',
    description: [
      'Used Vue.js to build UI components',
      'Optimized memory leaks and performance',
      'Used Cypress.js for end-to-end testing',
      'Followed the company’s coding standards and culture',
    ],
  },
  {
    company: 'Leapfrog Technology, Inc.',
    role: 'Associate Software Engineer',
    duration: 'Nov 17, 2021 - Jul 18, 2022',
    description: [
      'Worked collaboratively within the team to develop high-quality software solutions',
      'Followed the company’s coding standards, policies, processes, and working culture',
      'Communicated new ideas, issues, status, and outcomes with the supervisor/team',
      'Learned and applied version control tools, project management tools, agile methodology, project-level technologies, and code review process',
    ],
  },
];

export const markdownOptions = {
  overrides: {
    pre: {
      component: 'pre',
      props: {
        className: 'rounded-lg',
      },
    },
    code: {
      component: 'code',
      props: {
        className: 'language-javascript text-base',
      },
    },
    li: {
      component: 'li',
      props: {
        className: 'list-disc',
      },
    },
  },
};

export const hCAPTCHA_SITE_KEY = '98158277-e2ec-4215-b2df-7e65e9eb8ad7';
