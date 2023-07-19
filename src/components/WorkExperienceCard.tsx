import classNames from 'classnames';
import { Inter, Roboto } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function WorkExperienceCard({
  company,
  role,
  duration,
  description,
}): JSX.Element {
  return (
    <div className={classNames(roboto.className, 'w-full max-w-2xl')}>
      {/* Heading */}
      <h3
        className={classNames(
          inter.className,
          'text-gray-800 text-3xl font-bold text-center'
        )}
      >
        Professional Experience<sup>*</sup>
      </h3>
      <small className="text-gray-700 block text-center my-3">
        <sup>*</sup>Listed from latest to oldest, scroll towards left for
        more...
      </small>

      {/* Experience Carousel */}

      <div className="bg-gray-100 shadow-lg rounded-lg p-6 mx-auto">
        <h2 className={classNames(inter.className, 'text-xl font-bold')}>
          {company}
        </h2>
        <p className="text-gray-600 mb-2">{role}</p>
        <p className="text-gray-600 mb-4">{duration}</p>
        <ul className="list-disc ml-6">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
