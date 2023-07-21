import { Inter, Roboto } from '@next/font/google';
import { hobbies } from '../constants';
import classNames from 'classnames';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function Hobbies(): JSX.Element {
  return (
    <section
      className={classNames(roboto.className, 'max-w-max mx-auto px-4 pb-20')}
    >
      <h2
        className={classNames(
          inter.className,
          'text-3xl text-gray-800 text-center font-bold mb-10'
        )}
      >
        My Hobbies
      </h2>
      <div className="flex gap-4 flex-wrap justify-center items-stretch">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="grow mb-4 last:mb-0 w-80 bg-gray-100 p-4 shadow-md rounded-lg"
          >
            <h3
              className={classNames(
                inter.className,
                'text-xl font-semibold mb-2'
              )}
            >
              {hobby.activity}
            </h3>
            <p className="text-gray-600">{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
