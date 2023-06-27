import { Inter, Roboto } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-cover bg-no-repeat text-gray-100 pt-40 pb-20"
      style={{ backgroundImage: 'url(/images/code.jpg)' }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1
            className={`${inter.className} text-4xl md:text-6xl font-bold mb-4`}
          >
            Rahul Dahal
          </h1>
          <p
            className={`${roboto.className} text-xl md:text-2xl font-semibold`}
          >
            Software Engineer
          </p>
        </div>
      </div>
    </section>
  );
}
