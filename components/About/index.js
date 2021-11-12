import Link from "@components/Link";
import AnimatedParticles from "@components/Particles";
import Picture from "@components/Picture";
import React from "react";

export default function About() {
  const source = {
    png: "images/thatsme.png",
    default: "images/thatsme.png",
  };

  return (
    <main className="aboutHeader">
      <AnimatedParticles />
      <div className="contentsWrap">
        <div className="aboutHeader__hook">
          <h2>Building Software Applications with JavaScript.</h2>
          <p>
            Application development is not just about making the functionalities work. But, also about delivering a great user
            experience while interacting with the application.
          </p>
          <p>I&apos;ve been using JavaScript and its tools since <strong>2018</strong> to build usable and accessible software applications.</p>
          <p>
            Throughout the development process, I make sure that,
          </p>
          <ul>
            <li>The business goals and objectives of the them is met.</li>
            <li>The end user&apos;s needs, abilities, and their limitations are taken into account.</li>
          </ul>
        </div>

        <div className="aboutHeader__details">
          <Picture
            source={source}
            alt="Rahul Dahal Smiling to the camera"
            width="60vw"
            height="60vw"
          />
          <Link
            textContent="Contact"
            to="#contact"
            fill="filled"
            className="aboutHeader__contact"
          />
          <Link
            newTab
            to="https://github.com/rahuldahal"
            textContent="Activity Overview"
            fill="outline"
            className="aboutHeader__activity"
          />
        </div>
      </div>
    </main>
  );
}
