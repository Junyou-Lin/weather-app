import React, { useState } from "react";
import useFetch from "./useFetch";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const News = () => {
  const Url =
    "https://newsapi.org/v2/top-headlines?country=au&apiKey=d3f3c17b445f4eda8f0d7cc3b790c95d&pageSize=6";
  const data = useFetch(Url);
  const [index, setIndex] = useState(0);

  if (!data) {
    return <div>loading</div>;
  }
  const { articles } = data;
  const { title, publishedAt, url } = articles[index];
  const {
    title: title1,
    publishedAt: publishedAt1,
    url: url1,
  } = articles[index + 1];

  const checkNumber = (number) => {
    if (number > articles.length - 1) {
      return 0;
    }
    if (number < 0) {
      return articles.length - 1;
    }
    return number;
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 2;
      return checkNumber(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 2;
      return checkNumber(newIndex);
    });
  };
  return (
    <>
      <div className="container-news">
        <h2> 📰 Australia Latest News</h2>
        <li>
          <span className="quote-icon">
            <FaQuoteLeft />
          </span>
          <a href={url} target="_blank">
            {title}
          </a>
          <span>
            ({publishedAt.slice(0, 10) + " " + publishedAt.slice(14, 19)})
          </span>
        </li>
        <li>
          <span className="quote-icon">
            <FaQuoteLeft />
          </span>
          <a href={url1} target="_blank">
            {title1}
            {console.log(title1)}
          </a>
          <span>
            ({publishedAt.slice(0, 10) + " " + publishedAt.slice(14, 19)})
          </span>
        </li>

        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default News;
