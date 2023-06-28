'use client';

import Link from 'next/link';
import classNames from 'classnames';
import { Inter, Roboto } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ weight: ['300', '400'], subsets: ['latin'] });

export default function GeneralInfo(): JSX.Element {
  return (
    <section
      id="about"
      className={classNames('m-auto px-4 pt-40 pb-5', roboto.className)}
    >
      <div className="flex justify-around items-center md:flex-row-reverse">
        <div className="max-w-screen-sm mt-12 md:mt-0 md:p-4 bg-primary-400 text-gray-200 rounded md:shadow-md">
          <h2
            className={classNames(
              'text-3xl text-gray-100 font-bold mb-4',
              inter.className
            )}
          >
            Building Software Applications with JavaScript.
          </h2>
          <p>
            My fascination with JavaScript, the core language of web
            development, has led me to become proficient in using JavaScript and
            its associated tools to develop software applications.
          </p>
          <hr className="my-4 border border-gray-300" />
          <p>
            I have been inspired by various industry experts such as{' '}
            <strong>Kyle Simpson</strong>, <strong>Wes Bos</strong>,{' '}
            <strong>Dan Abramov</strong>, <strong>Jake Archibald</strong>,{' '}
            <strong>Surma</strong>, <strong>Brian Holt</strong>,{' '}
            <strong>Sarah Drasner</strong>, <strong>Kent C. Dodds</strong> and
            others.{' '}
            <mark className="bg-primary-200 px-1 text-gray-100">
              Being able to understand their thought process
            </mark>{' '}
            has contributed significantly to my growth and development as a
            software engineer. My passion for web development has driven me to
            continue learning, honing my skills, and creating applications that
            are not only functional but also visually appealing. I am always on
            the lookout for new techniques, frameworks, and libraries that can
            enhance my skills and help me create better software applications.
          </p>
        </div>
        <Link
          href="https://res.cloudinary.com/rdaahal/image/upload/v1687931296/portfolio/rahul_rzlpol.jpg"
          title="View full size image"
          target="_blank"
        >
          <img
            src="/images/rahul.jpg"
            alt="Profile"
            className="rounded-full h-72 w-72 object-cover"
          />
        </Link>
      </div>
      {/* TODO: add watch portfolio video buton and add a video */}
    </section>
  );
}
