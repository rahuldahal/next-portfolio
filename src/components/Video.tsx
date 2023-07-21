'use client';

import React, { useState } from 'react';
import { handleLoader } from '../utils/loader';
import { VIDEO_PORTFOLIO_EMBEDD_LINK } from '../constants';

export default function Video(): JSX.Element {
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    setLoading(false);
    handleLoader({ show: false });
  };

  return (
    <section className="mb-8 w-full mx-auto aspect-w-16 aspect-h-9 px-8">
      <iframe
        src={VIDEO_PORTFOLIO_EMBEDD_LINK}
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="rounded-lg"
        allowFullScreen
        onLoad={handleIframeLoad}
      ></iframe>
      {loading && <div className="rounded-lg bg-gray-200 animate-pulse"></div>}
    </section>
  );
}
