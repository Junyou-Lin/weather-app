import React from "react";
import useFetch from "./useFetch";
const Forecast = () => {
  const url =
    "http://api.weatherapi.com/v1/forecast.json?key=5e3f3e99c31e41eb9db144116221801&q=Melbourne&days=3";

  const data = useFetch(url);
  console.log(data);

  if (!data) {
    return <div>loading</div>;
  }

  const { forecast } = data;
  const { forecastday } = forecast;

  return (
    <div className="container-forecast">
      {forecastday.map((day) => {
        const { date, day: cast } = day;
        const { avgtemp_c, condition } = cast;
        const { text, icon } = condition;
        return (
          <div className="container-forecast-day">
            <p>{date}</p>
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
