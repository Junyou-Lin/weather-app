import React from "react";
import useFetch from "./useFetch";
import News from "./News";
import Forecast from "./Forecast";

const Current = ({ city, removeCity }) => {
  const weatherapi = "5e3f3e99c31e41eb9db144116221801";
  const weatherUrl = `http://api.weatherapi.com/v1/forecast.json?key=${weatherapi}&q=${city}&days=3`;
  const weather = useFetch(weatherUrl);

  const photoapi = "2mjgeODMmMyxeYJk-K7AipAAb1ADw6vPD8dUr3Ldy54";
  const photoUrl = `https://api.unsplash.com/search/photos?query=${city}&client_id=${photoapi}&page=1&per_page=1&oritation=landscape`;
  const photo = useFetch(photoUrl);

  if (!weather || !photo) {
    return <div></div>;
  }

  const { data } = weather;
  const { current, location } = data;
  const { name, country } = location;
  const { temp_c, humidity, wind_kph, condition } = current;
  const { text, icon } = condition;
  const imageUrl = photo.data.results[0].urls.raw;
  console.log(imageUrl);

  return (
    <>
      <section
        className="container-current"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      >
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
      <div className="btn-container">
        <button
          className="btn btn-delete"
          onClick={() => {
            removeCity(name);
          }}
        >
          delete {name}
        </button>
      </div>
    </>
  );
};

export default Current;
