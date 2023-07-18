'use client';

import { useEffect } from 'react';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Header from '../components/Header';
import { handleLoader } from '../utils/loader';

export default function Index() {
  useEffect(() => {
    handleLoader({ show: false });
  }, []);

  return (
    <>
      <Header activeNav="index" />
      <Hero />
      <Info />
    </>
  );
}
