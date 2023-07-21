export const metaData = {
  title: 'Rahul Dahal | Software Engineer | JavaScript Specialist',
  description:
    'Welcome to the portfolio website of a seasoned software engineer with expertise in JavaScript and its dynamic ecosystem. Explore a showcase of my finest work in JavaScript, Flutter, and related technologies. With a deep understanding of core JavaScript features, I have created efficient and reliable applications, staying up-to-date with industry standards. Mentoring aspiring developers is my passion, and they take pride in shaping the next generation of talented engineers. Connect with me to transform ideas into exceptional software solutions.',
  authors: [{ url: 'https://github.com/rahuldahal', name: 'Rahul Dahal' }],
  keywords: [
    'software engineer',
    'JavaScript specialist',
    'web development',
    'portfolio',
    'experienced',
    'mentoring',
    'reliable applications',
    'industry standards',
    'talented engineer',
    'exceptional software solutions',
  ],
};

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

interface hobby {
  activity: string;
  description: string;
}
export const hobbies: hobby[] = [
  {
    activity: 'Reading',
    description:
      'I enjoy reading self-help and productivity books that inspire me to become a better version of myself and lead a more fulfilling life.',
  },
  {
    activity: 'Music',
    description:
      "Music is my passion, and I love exploring music theory to understand melody, rhythm, and harmony, which allows me to express myself creatively. I'm also learning to play basic guitar chords, adding another dimension to my musical journey.",
  },
  {
    activity: 'Songwriting',
    description:
      'One of my favorite ways to express my emotions and thoughts is through songwriting. I find comfort in crafting heartfelt lyrics that resonate with others. Singing these words brings a sense of freedom and connection to the world around me.',
  },
  {
    activity: 'Dancing',
    description:
      "When the music starts playing, I can't resist moving my body. I've been practicing basic hip-hop and lyrical dance styles, combining the energy of hip-hop with the elegance of lyrical movements. Dancing allows me to express my creativity and emotions physically.",
  },
  {
    activity: 'FIFA',
    description:
      "EA Sports FIFA is my favorite game when I want to immerse myself in the world of football. I spend hours strategizing, competing against friends or the computer, and experiencing the joy of victory and the lessons of defeat. It's an exciting virtual football journey that keeps me hooked.",
  },
];

export const hCAPTCHA_SITE_KEY = '98158277-e2ec-4215-b2df-7e65e9eb8ad7';
export const VIDEO_PORTFOLIO_EMBEDD_LINK =
  'https://www.youtube.com/embed/OyJrwRGzCSY';
