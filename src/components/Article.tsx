'use client';

import Prism from 'prismjs';
import Image from 'next/image';
import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';
import React, { useEffect } from 'react';
import TextWithIcon from './TextWithIcon';
import 'prismjs/components/prism-javascript';
import { handleLoader } from '../utils/loader';
import { markdownOptions } from '../constants';
import { Inter, Roboto } from 'next/font/google';
import { iconPaths } from '../constants/iconPaths';
import 'prism-themes/themes/prism-one-dark.min.css';
import { formatDate } from '../utils';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function Article({ article }) {
  const {
    title,
    content,
    coverImage,
    publishedAt,
    updatedAt,
    readTimeInMinutes,
    tags,
  } = article;

  useEffect(() => {
    Prism.highlightAll();
    handleLoader({ show: false });
  }, []);

  const datePublished = formatDate(publishedAt);
  const lastUpdated = updatedAt ? formatDate(updatedAt) : datePublished;

  function handleShare() {
    const data = {
      title,
      url: location.href,
    };

    if (navigator.canShare && navigator.canShare(data)) {
      navigator.share(data);
    } else {
      alert("Doesn't yet support the Share feature.");
    }
  }

  return (
    <article
      className={classNames(
        roboto.className,
        'container mx-auto px-4 pt-40 pb-20 md:pb-8',
      )}
    >
      <div className="md:max-w-3xl mx-auto">
        <div className="relative">
          <Image
            src={coverImage.url}
            alt="Cover Image"
            className="mb-4 rounded-lg object-cover object-top max-h-80 w-full mx-auto md:max-w-3xl"
            width={768}
            height={480}
          />
          <h1
            className={classNames(
              inter.className,
              'w-full md:w-4/5 absolute -bottom-8 -right-3 md:-right-8 bg-gray-100 bg-opacity-90 first-letter: text-4xl font-bold mb-2 rounded-lg px-4 py-2 text-primary-400',
            )}
          >
            {title}
          </h1>
        </div>
        <div className="flex flex-col text-gray-500 text-sm mb-4 mt-10">
          <span className="mr-2">
            <strong>Published:</strong> {datePublished}
          </span>
          <span>
            <strong>Last Updated:</strong> {lastUpdated}
          </span>
        </div>

        <div className="flex flex-wrap justify-start mt-6">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full mr-2 mb-2"
            >
              {tag.name}
            </span>
          ))}
        </div>
        <Markdown
          overrides={markdownOptions}
          className="md:bg-gray-100 text-gray-700 w-full md:max-w-4xl mt-4 md:px-4 py-4 rounded-lg markdown-content"
        >
          {content.markdown}
        </Markdown>

        <button
          type="button"
          onClick={handleShare}
          className="bg-primary-400 hover:bg-primary-500 mx-auto text-gray-100 text-lg py-2 px-4 my-6 rounded focus:outline-none focus:shadow-outline"
        >
          <TextWithIcon label="Share" iconPathData={iconPaths.share} />
        </button>
      </div>
    </article>
  );
}
