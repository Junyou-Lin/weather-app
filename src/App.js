import React, { useState } from "react";
import CurrentWeather from "./components/CurrentWeather";

const App = () => {
  const [name, setName] = useState("");
  const [cities, setCities] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    setCities([...cities, name]);
    setName("");
  };

  const removeCity = (name) => {
    let newcities = cities.filter((city) => {
      if (name.length > city.length) {
        return !name.toUpperCase().includes(city.toUpperCase());
      }
      return !city.toUpperCase().includes(name.toUpperCase());
    });
    setCities(newcities);
  };

  return (
    <>
      <section className="section-center">
        <form className="form">
          {/* <div className="search-city"> */}
          <label htmlFor="city">Check a city weather:</label>
          {/* </div> */}
          {/* <div className=""> */}
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
          {/* </div> */}
        </form>
      </section>

      <ul className="container">
        {cities.map((city, index) => {
          return (
            <li>
              <CurrentWeather city={city} key={index} removeCity={removeCity} />
            </li>
          );
        })}
      </ul>
      <div className="btn-container">
        {cities.length > 1 && (
          <button
            className="btn btn-delete-all btn-delete"
            onClick={() => {
              setCities([]);
            }}
          >
            Delete all
          </button>
        )}
      </div>
    </>
  );
};

export default App;
