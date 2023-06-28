import Hero from '../components/Hero';
import Info from '../components/Info';
import Header from '../components/Header';

export default function Index() {
  return (
    <>
      <Header activeNav="index" />
      <Hero />
      <Info />
    </>
  );
}
