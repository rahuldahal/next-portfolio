'use client';

import Link from 'next/link';
import Header from '../../components/Header';

const data = [
  {
    coverImage:
      'https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Best View in New York City',
    datePublished: '27 March',
    brief: 'The city that never sleeps',
    url: '#',
    readTime: '6 mins',
  },
  {
    coverImage:
      'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Best Pizza in Town',
    datePublished: '20 March',
    brief: 'The collection of best pizza images in New York City',
    url: '#',
    readTime: '3 mins',
  },
  {
    coverImage:
      'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Best Salad Images Ever',
    datePublished: '15 April',
    brief: 'The collection of best salads of town in pictures',
    url: '#',
    readTime: '6 mins',
  },
];

export default function Blogs(): JSX.Element {
  return (
    <>
      <Header activeNav="blogs" />
      <section className="container mx-auto p-4 sm:p-10 md:p-16 md:pt-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative h-52 sm:h-64 md:h-72">
                <Link href={item.url}>
                  <img
                    className="object-cover w-full h-full rounded-lg"
                    src={item.coverImage}
                    alt="Sunset in the mountains"
                  />
                  <div className="absolute inset-0 bg-gray-800 opacity-25 transition duration-300 hover:bg-transparent rounded-lg"></div>
                  <Link
                    href={item.url}
                    className="absolute top-2 right-2 px-4 py-2 text-gray-800 bg-yellow-400 rounded-lg"
                  >
                    {item.datePublished}
                  </Link>
                </Link>
              </div>
              <div className="flex flex-col flex-grow px-4 py-4 bg-white rounded-lg shadow-lg">
                <Link href={item.url}>
                  <h2 className="text-lg font-semibold text-primary-500 hover:text-primary-700 transition duration-500 ease-in-out">
                    {item.title}
                  </h2>
                </Link>
                <p className="mt-2 text-gray-500">{item.brief}</p>
                <div className="flex items-center mt-4">
                  <span className="text-sm text-gray-900">{item.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
