'use client';

import { useEffect } from 'react';
import Header from '../../components/Header';
import { handleLoader } from '../../utils/loader';
import ContactForm from '../../components/ContactForm';

export default function Contact(): JSX.Element {
  useEffect(() => {
    handleLoader({ show: false });
  }, []);
  return (
    <>
      <Header activeNav="contact" />
      <ContactForm />
    </>
  );
}
