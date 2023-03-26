import React, { useEffect, useState } from 'react';
import Link from '@components/Link';
import Picture from '@components/Picture';
import isScreenLargerThan from '@utils/screenSize';

export default function AboutMe() {
  const [widerThan1024, setWiderThan1024] = useState(false);

  useEffect(() => {
    if (isScreenLargerThan(1025)) {
      setWiderThan1024(true);
    }
  }, []);

  const source = {
    webp: 'images/aboutMe.webp',
    default: 'images/aboutMe.webp',
  };
  return (
    <section id="about" className="aboutMeHeader">
      <div className="contentsWrap">
        <div className="aboutMeHeader__hook">
          <h2>Building Software Applications with JavaScript.</h2>
          <p>
            I am a self-motivated and passionate individual who discovered my
            love for web development in early 2018 through a YouTube video
            recommended by{' '}
            <Link
              to="https://www.youtube.com/@thenewboston"
              textContent="The New Boston"
              newTab
            />{' '}
            channel. Bucky Roberts, the channel&apos;s instructor, introduced me
            to the fundamentals of web development, which sparked my interest in
            learning more.
          </p>
          <p>
            My fascination with JavaScript, the core language of web
            development, has led me to become proficient in using JavaScript and
            its associated tools to develop software applications.
          </p>
          <hr />
          <p>
            I have been inspired by various industry experts such as{' '}
            <strong>Kyle Simpson</strong>, <strong>Wes Bos</strong>,{' '}
            <strong>Dan Abramov</strong>, <strong>Jake Archibald</strong>,{' '}
            <strong>Surma</strong>, <strong>Brian Holt</strong>,{' '}
            <strong>Sarah Drasner</strong>, <strong>Kent C. Dodds</strong> and
            others. <mark>Being able to understand their thought process</mark>{' '}
            has contributed significantly to my growth and development as a
            software engineer. My passion for web development has driven me to
            continue learning, honing my skills, and creating applications that
            are not only functional but also visually appealing. I am always on
            the lookout for new techniques, frameworks, and libraries that can
            enhance my skills and help me create better software applications.
          </p>
        </div>
        <div className="aboutMeHeader__details">
          {widerThan1024 ? (
            <Picture
              className="displayPicture"
              source={source}
              alt="Rahul Dahal Smiling to the camera"
              width="300px"
              height="300px"
            />
          ) : null}
          <Link
            textContent="Contact"
            to="#contact"
            fill="filled"
            className="aboutMeHeader__contact"
          />
          <Link
            newTab
            to="https://github.com/rahuldahal"
            textContent="Activity Overview"
            fill="filled"
            className="aboutMeHeader__activity"
          />
        </div>
      </div>
    </section>
  );
}
