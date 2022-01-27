import React, { useState } from "react";
import Current from "./components/Current";

const App = () => {
  const [name, setName] = useState("");
  const [cities, setCities] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    setCities([...cities, name]);
    setName("");
  };

  const removeCity = (name) => {
    console.log(name);
    console.log(cities);
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
          <label htmlFor="city">Check a city weather:</label>
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

      <div className="container">
        {cities.map((city, index) => {
          return <Current city={city} key={index} removeCity={removeCity} />;
        })}
      </div>
      <div className="btn-container">
        {cities.length > 1 ? (
          <button
            className="btn btn-delete-all btn-delete"
            onClick={() => {
              setCities([]);
            }}
          >
            Delete all
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default App;
