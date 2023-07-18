import Link from 'next/link';
import classNames from 'classnames';
import { navLinks } from '../constants';
import { handleLoader } from '../utils/loader';

export default function NavBar({ active }): JSX.Element {
  return (
    <div className="hidden md:block">
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-6">
          {navLinks.map((link, index) => {
            const { text, path } = link;
            return (
              <Link
                key={index}
                href={path}
                className={classNames(
                  'text-gray-200 transition duration-300 ease-in-out hover:bg-primary-600 hover:text-gray-100 px-3 py-2 rounded-md text-xl sm:text-l',
                  {
                    'bg-primary-600 text-gray-100':
                      active === text.toLowerCase(),
                  }
                )}
                onClick={() => handleLoader({ show: true })}
              >
                {text}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
