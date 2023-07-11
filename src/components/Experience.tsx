'use client';

import { sortCompanies } from '../utils';
import { Inter, Roboto } from '@next/font/google';
import { professionalBackgrounds } from '../constants';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function Experience(): JSX.Element {
  return (
    <div className={`${roboto.className} max-w-2xl pb-20`}>
      <h3
        className={`${inter.className} text-gray-800 text-3xl font-bold text-center`}
      >
        Professional Experience<sup>*</sup>
      </h3>
      <small className="text-gray-700 block text-center my-3">
        <sup>*</sup>Listed from latest to oldest, scroll towards left for
        more...
      </small>
      <div
        title="scroll towards left"
        className="flex flex-col space-y-6 my-6 cursor-all-scroll"
      >
        {sortCompanies(professionalBackgrounds).map((background, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded">
            <h3
              className={`${inter.className} text-gray-800 text-xl font-bold mb-2`}
            >
              {background.company}
            </h3>
            <p className="text-gray-600 mb-1">{background.role}</p>
            <p className="text-gray-600 mb-1">{background.duration}</p>
            <hr className="my-2" />
            <ul className="list-disc list-inside">
              {background.description.map((item, index) => (
                <li key={index} className="text-gray-700 mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    // TODO: Add ~3 dots to indicate there's more content...
  );
}
