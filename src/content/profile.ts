import type { Profile } from './types';

export const profile: Profile = {
  name: 'Rahul Dahal',
  role: 'Software engineer — JavaScript, scalability, DevOps',
  location: 'Nepal',
  status: 'Open to interesting problems',
  bio: 'I build JavaScript systems that have to keep working when nobody is watching. This site is where I put the writing, notes, and tools that came out of that — mostly about the un-glamorous middle of software: connection pools, deploys, tracing, the bits that decide whether a Tuesday is quiet or not.',
  now: [
    'Scaling infrastructure for product growth',
    'Building reliable CI/CD and developer platforms',
    'Cloud security, observability & disaster recovery',
    'Technical strategy, product architecture & execution',
    'Reading: The DevOps Handbook',
  ],
  nowUpdated: '2026-06-12',
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/rahuldahal',
      handle: '@rahuldahal',
    },
    { label: 'X', href: 'https://x.com/rahul_dahal', handle: '@rahul_dahal' },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/rahuldahal',
      handle: 'rahuldahal',
    },
    {
      label: 'Email',
      href: 'mailto:hi@rahuldahal.com',
      handle: 'hi@rahuldahal.com',
    },
    { label: 'RSS', href: '/rss.xml', handle: '/rss.xml' },
  ],
};
