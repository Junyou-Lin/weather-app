import { useEffect, useState } from "react";
// import useFetch from "./components/useFetch";
const useFetch = (para) => {
  const [current, setCurrent] = useState("");
  const [forecast, setForecast] = useState("");

  useEffect(() => {
    const url =
      "http://api.weatherapi.com/v1/forecast.json?key=5e3f3e99c31e41eb9db144116221801&q=Melbourne&days=3";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setCurrent(json.current);
        setForecast(json.forecast);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  // console.log(current);
  // console.log(forecast);
  if (para === "current") {
    return current;
  }
  if (para === "forecast") {
    return forecast;
  }
};
export default useFetch;
