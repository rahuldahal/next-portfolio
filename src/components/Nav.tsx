'use client';

import Link from 'next/link';
import { navLinks } from '../constants';
import { Roboto } from '@next/font/google';

const roboto = Roboto({ weight: '300', subsets: ['latin'] });

export default function Nav(): JSX.Element {
  return (
    <nav className={roboto.className}>
      <div className="flex items-center justify-between">
        <div className="hidden md:block">
          <div className="flex items-baseline gap-6">
            {navLinks.map((link, index) => {
              const { text, path } = link;
              return (
                <Link
                  key={index}
                  href={path}
                  className="text-gray-200 transition duration-300 ease-in-out hover:bg-primary-600 hover:text-gray-100 px-3 py-2 rounded-md text-xl sm:text-l"
                >
                  {text}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger icon */}
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
