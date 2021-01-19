import React from "react";
import Head from "next/head";

export default function MyHead() {
  return (
    <Head>
      <title>Rahul Dahal | Web Developer - Let's build something amazing</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:site_name" content="rahuldahal.com.np" />
      <meta
        property="og:title"
        content="Rahul Dahal | Web Developer - Let's build something amazing"
      />
      <meta property="og:url" content="https://rahuldahal.com.np" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="A Web Developer with an aim to improvise User Experience. User Experience Design is an indispensible part of any online product. My focus is to make the User Experience as elegant as possible."
      />
      <meta
        property="og:image"
        content="https://rahuldahal.com.np/assets/images/logo.png"
      />
      <meta property="og:site_name" content="Rahul Dahal" />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="500" />
      <meta
        name="description"
        content="A Web Developer with an aim to improvise User Experience. User Experience Design is an indispensible part of any online product. My focus is to make the User Experience as elegant as possib
le."
      />

      <link rel="icon" href="/logo.png" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500&display=swap"
        rel="stylesheet"
      />
      <script
        src="https://kit.fontawesome.com/2628210dc1.js"
        crossorigin="anonymous"
        async
      ></script>
    </Head>
  );
}