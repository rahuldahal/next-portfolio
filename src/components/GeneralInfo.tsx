import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { Inter, Roboto } from '@next/font/google';
import { VIDEO_PORTFOLIO_EMBEDD_LINK } from '../constants';
import { useState } from 'react';
import Icon from './Icon';
import { iconPaths } from '../constants/iconPaths';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ weight: ['300', '400'], subsets: ['latin'] });

export default function GeneralInfo(): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="about"
      className={classNames(
        'relative w-screen max-h-max md:h-screen pt-20 pb-20',
        roboto.className
      )}
    >
      <div className="overlay">
        <Image
          src="/images/panchasila.jpg"
          alt="Rahul Dahal at Lumbini, Panchasila"
          width={1337}
          height={768}
          className="w-full h-full object-cover"
        />
      </div>

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            title="Play Video Portfolio"
            className="text-gray-800 bg-yellow-400 rounded-full p-4 z-10"
            onClick={() => setIsPlaying(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-12 h-12 pl-2"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
        </div>
      )}

      {isPlaying && (
        <div className="relative -translate-y-full aspect-w-16 aspect-h-9 z-10 flex items-center justify-center">
          <iframe
            width={768}
            height={432}
            src={VIDEO_PORTFOLIO_EMBEDD_LINK}
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button
            title="Stop Video"
            onClick={() => setIsPlaying(false)}
            className="closeVideo absolute top-16 left-2 w-12 h-12 md:w-16 md:h-16 flex justify-center items-center bg-yellow-400 text-gray-800 rounded-full"
          >
            <Icon
              iconPathData={iconPaths.close}
              className="w-8 h-8 md:w-12 md:h-12"
            />
          </button>
        </div>
      )}
    </section>
  );
}
