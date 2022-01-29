import React, { useState } from "react";
import useFetch from "./useFetch";
const Forecast = ({ city }) => {
  const api = "5e3f3e99c31e41eb9db144116221801";
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${api}&q=${city}&days=5`;
  const weather = useFetch(url);
  let weekday = new Date().getDay();
  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRIDAY", "SAT"];

  if (!weather) {
    return <div>loading</div>;
  }

  const { data } = weather;
  const { forecast } = data;
  const { forecastday } = forecast;
  return (
    <div className="container-forecast">
      {forecastday.map((day, index) => {
        const { day: cast } = day;
        const { avgtemp_c, condition } = cast;
        const { text, icon } = condition;
        return (
          <div className="container-forecast-day" key={index}>
            <p>{weekdays[weekday]}</p>
            <p className="week-calculator">
              {weekday < 6 ? (weekday += 1) : (weekday = 0)}
            </p>
            <img src={icon} alt={text} />
            <p>
              {avgtemp_c} <span>&#8451;</span>
            </p>
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
