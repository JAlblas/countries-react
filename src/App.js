import { useState, useEffect } from "react";

import axios from "axios";

const Input = ({ handleChange }) => {
  return (
    <div>
      <label htmlFor="search">Find countries</label>
      <br />
      <input id="search" onChange={handleChange} />
    </div>
  );
};

const CountryList = ({ countries }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }
  return (
    <div>
      {countries.map((country, index) => {
        return (
          <>
            <p key={country.cca2}>{country.name.common}</p>
            <button key={index} onClick={() => console.log({ index })}>Show more</button>
          </>
        )
      }
      )}
    </div>
  );
};

const CountryDetails = ({ country }) => {
  console.log(country.flags.png)
  return (
    <div>
      <h2>{country.name.common}</h2>

      <h3>capital</h3>
      {country.capital}
      <h3>area</h3>
      {country.area}
      <h3>languages</h3>

      {Object.values(country.languages).map((value, index) => {
        return (
          <ul key={index}>
            <li>{value}</li>
          </ul>
        );
      })}

      <h3>flag img</h3>
      <img src={country.flags.png}></img>
    </div>);
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCountries =
    searchQuery.length !== 0
      ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      )
      : countries;
  console.log(filteredCountries);

  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setCountries(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  let content = filteredCountries.length === 1 ? <CountryDetails country={filteredCountries[0]} /> : <CountryList countries={filteredCountries} />

  return (
    <div>
      <h1>Country info</h1>
      <Input handleChange={handleChange} />
      {content}
    </div>
  );
};

export default App;
