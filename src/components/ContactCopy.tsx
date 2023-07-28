'use client';

import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function ContactCopy(): JSX.Element {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <h2
          className={classNames(
            inter.className,
            'text-4xl lg:text-5xl font-bold leading-tight'
          )}
        >
          Let&apos;s talk about everything!
        </h2>
        <div className="text-gray-700 mt-8">
          Hate forms? Send me an{' '}
          <Link href="mailto:rdaahal@gmail.com" className="underline">
            email
          </Link>{' '}
          instead.
        </div>
      </div>
      <Image
        src="/images/contact.svg"
        alt="Contact Us Illustration"
        width={480}
        height={300}
        className="block mt-8 text-center"
      />
    </div>
  );
}
