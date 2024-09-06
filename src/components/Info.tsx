import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import Experience from './Experience';
import TextWithIcon from './TextWithIcon';
import { expertiseList } from '../constants';
import { Inter, Roboto } from 'next/font/google';
import { iconPaths } from '../constants/iconPaths';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function Info() {
  return (
    <section
      className={classNames(
        roboto.className,
        'container flex flex-col sm:flex-row justify-center items-start gap-8 my-8 mx-auto px-4 pb-12 md:pb-0',
      )}
    >
      <div className="flex flex-col items-center">
        <Link
          href="https://res.cloudinary.com/rdaahal/image/upload/v1687931296/portfolio/rahul_rzlpol.jpg"
          title="View full size image"
          target="_blank"
        >
          <div className="w-48 h-48 border-gray-800 rounded-full">
            <Image
              src="/images/rahul.jpg"
              alt="Profile"
              className="rounded-full object-cover"
              width={192}
              height={192}
            />
          </div>
        </Link>
        <h1
          className={classNames(
            inter.className,
            'text-gray-800 text-3xl font-bold my-2',
          )}
        >
          Rahul Dahal
        </h1>
        <p className="text-gray-600 mb-6 w-full text-center">
          Software Engineer
        </p>
        <p className="text-gray-700 mb-4 max-w-xl text-center">
          A self-motivated and passionate individual who discovered my love for
          software engineering in early 2018 through a YouTube video recommended
          by The New Boston channel. Bucky Roberts, the channel&apos;s
          instructor, introduced me to the fundamentals of software engineering,
          which sparked my interest in{' '}
          <Link href="/community" className="text-primary-400">
            learning more
          </Link>
          .
        </p>
        <div className="p-4 max-w-xl rounded bg-primary-500 my-4">
          <h3
            className={classNames(
              inter.className,
              'text-xl font-bold mb-2 text-gray-100',
            )}
          >
            Area of Expertise
          </h3>
          <div className="flex justify-start md:flex-wrap md:justify-center">
            <div className="expertise-container flex overflow-x-auto whitespace-nowrap md:flex-wrap md:justify-center">
              {expertiseList.map((expertise, index) => (
                <div
                  key={index}
                  className="bg-gray-100 text-gray-700 rounded-full px-4 py-2 m-1"
                >
                  {expertise}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grow">
        <Experience />
        <a
          href="https://drive.google.com/file/d/1PMUU4FYTJ67qlbeNWgi7A4tS20tkXEIO/view?usp=sharing"
          className="block max-w-max bg-primary-400 hover:bg-primary-500 text-gray-100 py-2 px-4 my-6 mx-auto rounded focus:outline-none focus:shadow-outline"
          download="Rahul_Dahal_Resume.pdf"
        >
          <TextWithIcon label="Download CV" iconPathData={iconPaths.download} />
        </a>
      </div>
    </section>
  );
}
