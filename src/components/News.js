import React, { useState } from "react";
import useFetch from "./useFetch";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const News = ({ country }) => {
  const api = "d3f3c17b445f4eda8f0d7cc3b790c95d";
  const Url = `https://newsapi.org/v2/everything?q=${country}&apiKey=${api}&pageSize=6`;
  const news = useFetch(Url);
  const [index, setIndex] = useState(0);

  if (!news) {
    return <div>loading</div>;
  }
  const { data } = news;
  const { articles } = data;
  const { title, url } = articles[index];
  const { title: title1, url: url1 } = articles[index + 1];

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
        <h2> 📰 {country} News</h2>
        <li>
          <span className="quote-icon">
            <FaQuoteLeft />
          </span>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
          {/* <span>
            ({publishedAt.slice(0, 10) + " " + publishedAt.slice(11, 16)})
          </span> */}
        </li>
        <li>
          <span className="quote-icon">
            <FaQuoteLeft />
          </span>
          <a href={url1} target="_blank" rel="noreferrer">
            {title1}
            {/* {console.log(title1)} */}
          </a>
          {/* <span>
            ({publishedAt.slice(0, 10) + " " + publishedAt.slice(11, 16)})
          </span> */}
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
