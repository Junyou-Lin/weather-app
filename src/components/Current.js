import React from "react";
import useFetch from "./useFetch";
const Current = () => {
  const url =
    "http://api.weatherapi.com/v1/forecast.json?key=5e3f3e99c31e41eb9db144116221801&q=Melbourne&days=3";

  const data = useFetch(url);
  console.log(data);

  if (!data) {
    return <div>loading</div>;
  }

  const { current } = data;
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
          <h2>Melbourne</h2>
          <img src={icon} alt={text} />
        </div>
      </section>
    </>
  );
};

export default Current;
