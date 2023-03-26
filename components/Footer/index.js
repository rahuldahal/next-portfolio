import React from 'react';
import ContactForm from './ContactForm';
import Link from '../Link';

export default function Footer() {
  return (
    <>
      <footer className="footer stacked" id="contact">
        <div className="contentsWrap">
          <h2 className="footer__title">
            Let's team up and create something amazing.
          </h2>
          <div className="footer__columns">
            <ContactForm />
            <SocialLinks />
          </div>
          <p className="footer__copyright">
            Copyright &copy; Rahul Dahal | {new Date().getFullYear().toString()}
          </p>
        </div>
      </footer>
    </>
  );
}

function SocialLinks() {
  const socialDetails = [
    {
      title: 'Github Profile',
      url: 'https://github.com/rahuldahal',
      text: '/rahuldahal',
    },
    {
      title: 'LinkedIn Profile',
      url: 'https://www.linkedin.com/in/rahuldahal',
      text: '/rahuldahal',
    },
    {
      title: 'Facebook Profile',
      url: 'https://facebook.com/rdaahal',
      text: '/rdaahal',
    },
  ];
  return (
    <div className="footer__socialLinks">
      <h3>Also, connect with me on:</h3>
      {socialDetails.map((social, index) => {
        const { title, url, text } = social;
        return (
          <Link key={index} to={url} textContent={text} newTab title={title} />
        );
      })}
    </div>
  );
}
