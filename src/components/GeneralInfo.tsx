import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { Inter, Roboto } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ weight: ['300', '400'], subsets: ['latin'] });

export default function GeneralInfo(): JSX.Element {
  return (
    <section
      id="about"
      className={classNames('m-auto px-4 pt-40 pb-20', roboto.className)}
    >
      <div className="flex flex-col-reverse gap-4 md:flex-row-reverse justify-center items-center max-w-4xl mx-auto">
        <div className="max-w-md mx-auto md:max-w-lg p-6 bg-primary-400 text-gray-200 rounded shadow-md">
          <h2
            className={classNames(
              'text-3xl text-gray-100 font-bold mb-4',
              inter.className
            )}
          >
            Building Software Applications with JavaScript
          </h2>
          <p className="text-gray-300">
            My fascination with JavaScript, the core language of web
            development, has led me to become proficient in using JavaScript and
            its associated tools to develop software applications.
          </p>
          <hr className="my-4 border border-gray-300" />
          <p className="text-gray-300">
            I have been inspired by various industry experts such as{' '}
            <strong>Kyle Simpson</strong>, <strong>Wes Bos</strong>,{' '}
            <strong>Dan Abramov</strong>, <strong>Jake Archibald</strong>,{' '}
            <strong>Surma</strong>, <strong>Brian Holt</strong>,{' '}
            <strong>Sarah Drasner</strong>, <strong>Kent C. Dodds</strong>, and
            others.
            <span className="bg-primary-200 text-primary-800 px-1 rounded">
              Being able to understand their thought process
            </span>{' '}
            has contributed significantly to my growth and development as a
            software engineer. My passion for web development has driven me to
            continue learning, honing my skills, and creating applications that
            are not only functional but also visually appealing. I am always on
            the lookout for new techniques, frameworks, and libraries that can
            enhance my skills and help me create better software applications.
          </p>
        </div>
        <Link
          className="mt-8 md:mt-0"
          href="https://res.cloudinary.com/rdaahal/image/upload/v1687931296/portfolio/rahul_rzlpol.jpg"
          title="View full-size image"
          target="_blank"
        >
          <Image
            src="/images/rahul.jpg"
            alt="Profile"
            className="rounded-full h-72 w-72 object-cover"
            width={288}
            height={288}
          />
        </Link>
      </div>
      {/* TODO: add watch portfolio video button and add a video */}
    </section>
  );
}
