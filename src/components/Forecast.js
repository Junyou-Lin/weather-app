import React from "react";
import useFetch from "./useFetch";
const Forecast = ({ city }) => {
  const api = "5e3f3e99c31e41eb9db144116221801";
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${api}&q=${city}&days=3`;

  const weather = useFetch(url);

  if (!weather) {
    return <div>loading</div>;
  }
  const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRIDAY", "SAT"];
  let today = new Date().getDay();
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
            <p>{weekday[today++]}</p>
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
