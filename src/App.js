import React from "react";
import Current from "./components/Current";
import News from "./components/News";
import Forecast from "./components/Forecast";

const App = () => {
  return (
    <>
      <Current />
      <div className="container-bot">
        <News />
        <div className="separator"></div>
        <Forecast />
      </div>
    </>
  );
};

export default App;
