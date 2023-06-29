'use client';

import Header from '../../components/Header';
import ContactForm from '../../components/ContactForm';

export default function Contact(): JSX.Element {
  return (
    <>
      <Header activeNav="contact" />
      <ContactForm />
    </>
  );
}
