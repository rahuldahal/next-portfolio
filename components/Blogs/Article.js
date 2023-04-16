import React, { useEffect, useState } from 'react';
import isScreenLargerThan from '@utils/screenSize';
import moment from 'moment';
import Markdown from 'markdown-to-jsx';

export default function Article({ article }) {
  const [widerThan1200, setWiderThan1200] = useState(false);

  useEffect(() => {
    if (isScreenLargerThan(1201)) {
      setWiderThan1200(true);
    }
  }, []);

  const { title, contentMarkdown, coverImage, dateAdded, dateUpdated, tags } =
    article;

  function minutesToRead() {
    const words = contentMarkdown.split(' ').length;
    return Math.floor(words / 150) || 1;
  }

  function blogTags() {
    return tags.map((tag, index) => <em key={index}>#{tag.name}</em>);
  }

  return (
    <article className="blog">
      <div className="contentsWrap">
        <img src={coverImage} alt="title" className="blog__cover" />
        <div className="blog__contentContainer">
          <h1 className="blog__title">{title}</h1>
          <div className="blog__content">
            <p className="blog__updated">
              <span>
                {moment(dateUpdated || dateAdded).format('MMM Do YY')}
              </span>
              <span>{`${minutesToRead()} min read`}</span>
            </p>
            <p className="blog__tags">{blogTags()}</p>
            <hr />
            <Markdown>{contentMarkdown}</Markdown>
          </div>
        </div>
      </div>
    </article>
  );
}
