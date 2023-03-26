import Hero from './Hero';
import React from 'react';
import AboutMe from '@components/AboutMe';
import Experience from '@components/Experience';

export default function Landing({ info }) {
  return (
    <>
      <Hero info={info} />
      <AboutMe />
      <Experience />
    </>
  );
}
