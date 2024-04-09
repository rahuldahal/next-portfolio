'use client';

import Video from '../../components/Video';
import Header from '../../components/Header';
import { Roboto } from '@next/font/google';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function About(): JSX.Element {
  return (
    <>
      <Header activeNav="about" />
      <main className="container mx-auto pt-40">
        <Video />
        <div className={`${roboto.className} bg-gray-100 p-6 rounded-lg`}>
      <p className="text-lg text-gray-800 mb-4">
        I possess proficiency in <strong>JavaScript</strong>, with expertise extending to both browser and NodeJS/Bun environments. My ability to delve into the stack tree enables me to effectively debug issues. I have a solid grasp of networking, protocols, and security. Additionally, I am knowledgeable in <em>C</em> and <em>C++</em> programming languages.
      </p>
      <p className="text-lg text-gray-800 mb-4">
        As a software engineer, I have been immersed in the world of <strong>JavaScript</strong> and its tools since 2018. Over the past year, I have gained valuable professional experience in developing real-world applications. My expertise spans the back end, where I leverage technologies like <strong>Nest.js</strong> on top of <strong>Node.js</strong>, and headless <strong>REST</strong>/<strong>GraphQL APIs</strong>, to the front end, where I use <strong>React</strong> and <strong>Tailwind CSS</strong>. I am adept at working with databases, including <strong>MongoDB</strong> and <strong>PostgreSQL</strong>.
      </p>
    </div>
      </main>
    </>
  );
}
