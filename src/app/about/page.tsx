'use client';

import { useEffect } from 'react';
import Header from '../../components/Header';
import { handleLoader } from '../../utils/loader';
import GeneralInfo from '../../components/GeneralInfo';

export default function About(): JSX.Element {
  useEffect(() => {
    handleLoader({ show: false });
  }, []);
  return (
    <>
      <Header activeNav="about" />
      <GeneralInfo />
    </>
  );
}
