import React, { useEffect } from "react";
import Head from "next/head";
import Nav from "@components/Nav";
import About from "@components/About";
import Footer from "@components/Footer";
import LoaderOverlay from "@components/LoaderOverlay";
import { hideLoader } from "@utils/loader";
import MyHead from "@components/MyHead";
import { server } from "@utils/getCurrentEnv";

export default function AboutPage({info}) {
  const {title, company, description} = info;

  useEffect(() => {
    hideLoader();
  }, []);

  const metaTags = {
    title: "Rahul Dahal | About",
    url: "https://rahuldahal.com.np/about",
    description: `${description} Currently working as a ${title} at ${company.name}`,
    image: "https://rahuldahal.com.np/images/logo.png",
  };

  return (
    <>
      <MyHead {...metaTags} />
      <Nav current="about" />
      <About />
      <Footer />
      <LoaderOverlay />
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`${server}/api/info`);
  const { infos } = await res.json();

  return {
    props: {
      info: infos[0].data,
    },
  };
}