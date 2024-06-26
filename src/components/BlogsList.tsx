'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import TextWithIcon from './TextWithIcon';
import { handleLoader } from '../utils/loader';
import { formatDate, truncate } from '../utils';
import { iconPaths } from '../constants/iconPaths';

export default function BlogsList({ blogsList }): JSX.Element {
  useEffect(() => {
    handleLoader({ show: false });
  }, []);

  function showLoader() {
    handleLoader({ show: true });
  }

  return (
    <section className="container mx-auto px-4 pt-40 pb-20 md:pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogsList.map((blog) => {
          const { id, slug, title, brief, coverImage, publishedAt, readTimeInMinutes } = blog.node;
          const url = `/blogs/${slug}?id=${id}`;
          return (
            <div key={id} className="flex flex-col">
              <div className="relative h-52 sm:h-64 md:h-72">
                <Link href={url} onClick={showLoader}>
                  <Image
                    className="object-cover w-full h-full rounded-lg"
                    src={coverImage.url}
                    alt={title}
                    width={768}
                    height={208}
                  />
                  <div className="absolute inset-0 bg-gray-800 opacity-25 transition duration-300 hover:bg-transparent rounded-lg"></div>
                  <Link
                    href={url}
                    className="absolute top-2 right-2 px-4 py-2 text-gray-800 bg-yellow-400 rounded-lg"
                  >
                    <TextWithIcon
                      label={formatDate(publishedAt)}
                      iconPathData={iconPaths.calendar}
                      iconOnLeft={true}
                    />
                  </Link>
                </Link>
              </div>
              <div className="flex flex-col justify-end flex-grow px-4 py-4 bg-white rounded-lg shadow-lg">
                <Link href={url} onClick={showLoader}>
                  <h2 className="text-lg font-semibold text-primary-500 hover:text-primary-700 transition duration-500 ease-in-out">
                    {title}
                  </h2>
                </Link>
                <p className="mt-2 text-gray-500">{truncate(brief, 120)}</p>
                <div className="flex mt-4">
                  <span className="text-sm text-gray-900">
                    <TextWithIcon
                      label={`${readTimeInMinutes} minute(s)`}
                      iconPathData={iconPaths.clock}
                      iconOnLeft={true}
                    />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
