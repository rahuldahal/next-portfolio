'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { sortCompanies } from '../utils';
import 'slick-carousel/slick/slick-theme.css';
import { Inter, Roboto } from 'next/font/google';
import { professionalBackgrounds } from '../constants';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function Experience(): JSX.Element {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
  };

  return (
    <div
      className={`experience-container mx-auto ${roboto.className} max-w-2xl pb-12`}
    >
      <h3
        className={`${inter.className} text-gray-800 text-3xl font-bold text-center`}
      >
        Professional Experience
      </h3>
      <Slider {...settings}>
        {sortCompanies(professionalBackgrounds).map((background, index) => (
          <div key={index} className="py-6 md:w-1/2 lg:w-1/3">
            <div className="bg-gray-100 shadow-md rounded p-6">
              <h3 className="text-gray-800 text-xl font-bold mb-2">
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
          </div>
        ))}
      </Slider>
    </div>
  );
}
