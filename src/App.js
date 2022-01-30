import React, { useState } from "react";
//components
import CurrentWeather from "./components/CurrentWeather";
import Form from "./components/Form";
import DeleteAllBtn from "./components/DeleteAllBtn";

const App = () => {
  const [name, setName] = useState("");
  const [cities, setCities] = useState([]);

  return (
    <>
      <Form
        name={name}
        cities={cities}
        setName={setName}
        setCities={setCities}
      />

      <ul className="container">
        {cities.map((city, index) => {
          return (
            <li>
              <CurrentWeather
                city={city}
                key={index}
                cities={cities}
                setCities={setCities}
              />
            </li>
          );
        })}
      </ul>
      <DeleteAllBtn cities={cities} setCities={setCities} />
    </>
  );
};

export default App;
