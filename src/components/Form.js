import React from "react";
const Form = ({ name, cities, setCities, setName, search }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setCities([...cities, name]);
    setName("");
  };

  return (
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
  );
};

export default Form;
