import { expertiseList } from '../constants';
import { Inter, Roboto } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ weight: '300', subsets: ['latin'] });

export default function About() {
  return (
    <section
      className={`${roboto.className} flex sm:flex-row justify-center gap-8 my-8`}
    >
      <div className="flex flex-col items-center">
        <img
          src="https://picsum.photos/200" // TODO: update the picture
          alt="Profile"
          className="rounded-full h-48 w-48 object-cover"
        />
        <h1 className={`${inter.className} text-3xl font-bold my-2`}>
          Rahul Dahal
        </h1>
        <p className="text-gray-600 mb-6">Software Engineer</p>
        <p className="mb-4 max-w-xl text-center">
          A self-motivated and passionate individual who discovered my love for
          web development in early 2018 through a YouTube video recommended by
          The New Boston channel. Bucky Roberts, the channel's instructor,
          introduced me to the fundamentals of web development, which sparked my
          interest in learning more.
        </p>
        <div className="p-4 max-w-xl rounded bg-primary-500 my-4">
          <h3
            className={`${inter.className} text-xl font-bold mb-2 text-gray-100`}
          >
            Area of Expertise
          </h3>
          <div className="flex flex-wrap justify-center">
            {expertiseList.map((expertise, index) => (
              <div
                key={index}
                className="bg-gray-100 text-gray-800 rounded-full px-4 py-2 m-1"
              >
                {expertise}
              </div>
            ))}
          </div>
        </div>
        <a
          href="/placeholder-cv.pdf"
          className="bg-primary-400 hover:bg-primary-500 text-gray-100 font-bold py-2 px-4 my-6 rounded focus:outline-none focus:shadow-outline"
          download
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
