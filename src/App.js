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
  return (
    <div>
      {countries.map((country) => (
        <p key={country.cioc}>{country.name.common}</p>
      ))}
    </div>
  )
}

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const url = searchQuery === '' ? 'https://restcountries.com/v3.1/all' : `https://restcountries.com/v3.1/name/${searchQuery}`
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setCountries(response.data);
      })
      .catch((e) => console.log(e));
  }, [searchQuery]);

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
