import Link from 'next/link';
import classNames from 'classnames';
import { navLinks } from '../constants';

export default function TabBar({ active }): JSX.Element {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-primary-500 shadow-lg">
      <div className="flex items-center justify-between px-4 py-4">
        {navLinks.map((link, index) => {
          const { text, path } = link;
          return (
            <Link
              key={index}
              href={path}
              className={classNames(
                'text-gray-200 transition duration-300 ease-in-out hover:bg-primary-600 hover:text-gray-100 px-2 py-2 rounded-md text-base',
                {
                  'bg-primary-600 text-gray-100': active === text.toLowerCase(),
                }
              )}
            >
              {text}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
