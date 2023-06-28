'use client';

import Header from '../../components/Header';
import GeneralInfo from '../../components/GeneralInfo';

export default function About(): JSX.Element {
  return (
    <>
      <Header activeNav="about" />
      <GeneralInfo />
    </>
  );
}
