import React from "react";
import useFetch from "./useFetch";
const Current = () => {
  const current = useFetch("current");
  console.log(current);
  return (
    <>
      <div>
        <p>Current Temp: {current.temp_c}</p>
        <p>Humidity: {current.humidity}</p>

        {/* <p>{current.condition.text}</p> */}
        {/* <img src={current.condition.icon} alt={current.condition.text} /> */}
      </div>
    </>
  );
};

export default Current;
