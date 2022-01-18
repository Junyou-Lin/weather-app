import React from "react";
import useFetch from "./useFetch";
const Forecast = () => {
  const { forecastday: forecastdays } = useFetch("forecast");
  console.log(forecastdays);
  return (
    <>
      <p>134</p>
      {forecastdays.map((forecastday) => {
        return (
          <div>
            <p>hi</p>
          </div>
        );
      })}
    </>
  );
};

export default Forecast;
