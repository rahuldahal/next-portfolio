'use client';

import Link from 'next/link';
import { truncate } from '../utils';

export default function BlogsList({ blogsList }): JSX.Element {
  return (
    <section className="container mx-auto px-4 pt-40 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogsList.map((item) => {
          const { _id, slug, title, brief, coverImage, dateAdded } = item;
          const url = `/blogs/${slug}`;
          return (
            <div key={_id} className="flex flex-col">
              <div className="relative h-52 sm:h-64 md:h-72">
                <Link href={url}>
                  <img
                    className="object-cover w-full h-full rounded-lg"
                    src={coverImage}
                    alt={title}
                  />
                  <div className="absolute inset-0 bg-gray-800 opacity-25 transition duration-300 hover:bg-transparent rounded-lg"></div>
                  <Link
                    href={url}
                    className="absolute top-2 right-2 px-4 py-2 text-gray-800 bg-yellow-400 rounded-lg"
                  >
                    {new Date(dateAdded).toDateString()}
                  </Link>
                </Link>
              </div>
              <div className="flex flex-col flex-grow px-4 py-4 bg-white rounded-lg shadow-lg">
                <Link href={url}>
                  <h2 className="text-lg font-semibold text-primary-500 hover:text-primary-700 transition duration-500 ease-in-out">
                    {title}
                  </h2>
                </Link>
                <p className="mt-2 text-gray-500">{truncate(brief, 120)}</p>
                <div className="flex items-center mt-4">
                  <span className="text-sm text-gray-900">3 mins</span>
                  {/* TODO: make the read time dynamic */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
