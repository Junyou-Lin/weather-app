import React from "react";
import useFetch from "./useFetch";
const Current = () => {
  const current = useFetch("current");
  console.log(current);
  return (
    <>
      <section className="container-current">
        <div className="container-current-info">
          <h2>
            {current.temp_c} <span>&#8451;</span>
          </h2>
          {/* <h3>{current.condition.text}</h3> */}
          <p>
            Humidity: {current.humidity} % | Wind: {current.wind_kph} k/h
          </p>
        </div>
        <div className="container-current-city">
          <h2>Melbourne</h2>
          {/* <img src={current.condition.icon} alt={current.condition.text} /> */}
        </div>
      </section>
    </>
  );
};

export default Current;
