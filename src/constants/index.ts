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
  'Nest.js',
  'Microservices',
  'Next.js',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'Basic DevOps',
  'Linux Kernel and Command Line',
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
      'Collaborated cross-functionally to implement memory leak detection strategies, leading to ~20% increase in application stability and decrease in customer-reported crashes',
      'Utilized innovative thinking and problem-solving skills to develop and implement creative solutions for about 12 complex issues, contributing to the reduction in average issue resolution time.'
    ],
  },
  {
    company: 'Leapfrog Technology, Inc.',
    role: 'Associate Software Engineer',
    duration: 'Nov 17, 2021 - Jul 18, 2022',
    description: [
      'Collaborated with a dynamic team of 10-15 professionals to successfully deliver various features on an existing Enterprise Resources Planning system.',
      'Followed the company’s coding standards, policies, processes, and working culture',
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

export const time = {
  ONE_SEC: 1000,
  ONE_AND_HALF_SEC: 1500,
  TWO_SEC: 2000,
  TWO_AND_HALF_SEC: 2500,
  THREE_SEC: 3000,
  THREE_AND_HALF_SEC: 3500,
  FOUR_SEC: 4000,
  FOUR_AND_HALF_SEC: 4500,
  FIVE_SEC: 5000,
  FIVE_AND_HALF_SEC: 5500,
  SIX_SEC: 6000,
  SIX_AND_HALF_SEC: 6500,
  SEVEN_SEC: 7000,
  SEVEN_AND_HALF_SEC: 7500,
  EIGHT_SEC: 8000,
  EIGHT_AND_HALF_SEC: 8500,
  NINE_SEC: 9000,
  NINE_AND_HALF_SEC: 9500,
  TEN_SEC: 10000,
};
