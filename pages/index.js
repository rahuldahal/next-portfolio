import React, { useEffect } from "react";
import Nav from "@components/Nav";
import Landing from "@components/Landing";
import Footer from "@components/Footer";
import LoaderOverlay from "@components/LoaderOverlay";
import { hideLoader } from "@utils/loader";
import MyHead from "@components/MyHead";
import { server } from "@utils/getCurrentEnv";

export default function LandingPage({info}) {

  // const {title, company, description} = info;

  useEffect(() => {
    hideLoader();
  }, []);

  // const metaTags = {
  //   title:
  //     `Rahul Dahal | ${title}`,
  //   url: "https://rahuldahal.com.np",
  //   description: `${description} Currently working as a ${title} at ${company.name}`,
  //   image: "https://rahuldahal.com.np/images/logo.png",
  // };

  return (
    <>
      {/* <MyHead {...metaTags} /> */}
      <Nav />
      <Landing />
      <Footer />
      <LoaderOverlay />
    </>
  );
}

