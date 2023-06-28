import Hero from '../components/Hero';
import About from '../components/About';
import Header from '../components/Header';

export default function Index() {
  return (
    <>
      <Header activeNav="index" />
      <Hero />
      <About />
    </>
  );
}
