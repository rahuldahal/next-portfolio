'use client';

import Video from '../../components/Video';
import Header from '../../components/Header';
import Hobbies from '../../components/Hobbies';

export default function About(): JSX.Element {
  return (
    <>
      <Header activeNav="about" />
      <main className="container mx-auto pt-40">
        <Video />
        <Hobbies />
      </main>
    </>
  );
}
