import React, { useState } from "react";
import Current from "./components/Current";
import News from "./components/News";
import Forecast from "./components/Forecast";

const App = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    setCity(name);
    console.log(city);
    setName("");
  };

  return (
    <>
      <section className="section-center">
        <h3>check the weather of any city!</h3>
        <form className="lorem-form">
          <label htmlFor="city">enter a city name</label>
          <input
            type="text"
            name="city"
            id="city"
            value={name}
            autoFocus
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="btn" onClick={handleClick}>
            Search
          </button>
        </form>
      </section>

      <div>
        <Current city={city} />
      </div>
    </>
  );
};

export default App;
