import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";
import News from "./News";
import Forecast from "./Forecast";

const Current = ({ city }) => {
  const api = "5e3f3e99c31e41eb9db144116221801";
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${api}&q=${city}&days=3`;

  const weather = useFetch(url);

  if (!weather) {
    return <div></div>;
  }

  const { data } = weather;
  const { current, location } = data;
  const { name, country } = location;
  const { temp_c, humidity, wind_kph, condition } = current;
  const { text, icon } = condition;

  return (
    <>
      <section className="container-current">
        <div className="container-current-info">
          <h2>
            {temp_c} <span>&#8451;</span>
          </h2>
          <h3>{text}</h3>
          <p>
            Humidity: {humidity} % | Wind: {wind_kph} k/h
          </p>
        </div>
        <div className="container-current-city">
          <h2>{name}</h2>
          <div className="current-separator"></div>
          <img src={icon} alt={text} />
        </div>
      </section>
      <div className="container-bot">
        <News country={country} />
        <div className="separator"></div>
        <Forecast city={city} />
      </div>
    </>
  );
};

export default Current;
