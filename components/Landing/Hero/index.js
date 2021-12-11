import React, { useEffect, useState } from "react";
import Link from "@components/Link";
import isScreenLargerThan from "@utils/screenSize";
import UsabilityIllustration from "@svgs/usability_testing.svg";
import { showLoader } from "@utils/loader";
import Picture from "@components/Picture";

export default function Hero({info}) {
  const source = {
    png: "images/thatsme.png",
    default: "images/thatsme.png",
  };

  const {title, company} = info;

  const [illustration, setIllustration] = useState("small");

  useEffect(() => {
    if (isScreenLargerThan(1201)) {
      setIllustration("large");
    }
  }, []);

  return (
    <>
      <section className="hero overlay codeBackground">
        <div className="contentsWrap">
          <div className="headingAndCTA">
            <h1 className="hero__heading">
              I Write <span className="hero__highlight">JavaScript</span> <br />
              To Build <br /> Software Applications.
            </h1>

            <p className="hero__subheading subheading">
              <span className="hero__jobTitle">
                {title}
              </span>
              <span className="hero__currentCompany">
                {" "}
                @
                <a
                  href={company.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  {company.name}
                </a>
              </span>
            </p>

            <div className="hero__cta">
              <Link
                to="/#contact"
                fill="filled"
                textContent="Contact"
                className="contactBtn"
              />
              <Link
                to="/opensource"
                fill="outline"
                textContent="Opensource"
                className="projectsBtn"
                onClick={() => showLoader()}
              />
            </div>
          </div>

          {illustration === "large" ? (
            <Picture
              className="displayPicture"
              source={source}
              alt="Rahul Dahal Smiling to the camera"
              width="500px"
              height="500px"
            />
          ) : (
            <UsabilityIllustration className="hero__illustration" />
          )}
        </div>
      </section>
    </>
  );
}
