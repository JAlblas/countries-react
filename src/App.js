import { useState, useEffect } from "react";

import axios from "axios";

const Input = ({ handleChange }) => {
  return (
    <div>
      <label htmlFor="search">find countries</label>
      <br />
      <input id="search" onChange={handleChange} />
    </div>
  );
};

const CountryInfo = ({ countries }) => {
  if (countries.length > 10) {
    return (<p>GHAGA</p>)
  }
  return (
    <div>

      {countries.map((country) => (
        <p key={country.cca2}>{country.name.common}</p>
      ))}
    </div>
  )
}

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const url = 'https://restcountries.com/v3.1/all';
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setCountries(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  };

  return (
    <>
      <Input handleChange={handleChange} />
      <CountryInfo countries={countries} />
    </>
  );
};

export default App;
