import React, { useEffect, useState } from "react";
import Link from "@components/Common/Link/Link";
import isScreenLargerThan from "@utils/screenSize";
import UsabilityIllustration from "@svgs/usability_testing.svg";
import UsabilityIllustrationDesktop from "@svgs/usability_testing_desktop.svg";
import { showLoader } from "@utils/loader";

export default function Landing() {
  const tagline = (
    <>
      I Improvise <br />
      <span className="landing__highlight">User Experience</span> <br />
      While Developing <br />
      Websites.
    </>
  );
  const [heading, setHeading] = useState(
    <h4 className="landing__heading">{tagline}</h4>
  );
  const [illustration, setIllustration] = useState("small");

  useEffect(() => {
    if (isScreenLargerThan(481)) {
      setHeading(<h3 className="landing__heading">{tagline}</h3>);
    }
    if (isScreenLargerThan(1400)) {
      setHeading(<h2 className="landing__heading">{tagline}</h2>);
    }
    if (isScreenLargerThan(1201)) {
      setIllustration("large");
    }
  }, []);

  return (
    <>
      <section className="landing overlay">
        <div className="contentsWrap">
          <div className="headingAndCTA">
            {heading}

            <p className="landing__subheading subheading">
              MERN/JAM stack developer
            </p>

            <div className="landing__cta">
              <Link
                to="/#contact"
                fill="filled"
                textContent="Contact"
                className="contactBtn"
              />
              <Link
                to="/projects"
                fill="outline"
                textContent="Projects"
                className="projectsBtn"
                onClick={() => showLoader()}
              />
            </div>
          </div>

          {illustration === "large" ? (
            <UsabilityIllustrationDesktop className="landing__illustration" />
          ) : (
            <UsabilityIllustration className="landing__illustration" />
          )}
        </div>
      </section>
    </>
  );
}
