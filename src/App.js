import { useState, useEffect } from "react";
import axios from "axios";

import CountryList from './components/CountryList'
import CountryDetails from "./components/CountryDetails";
import Input from "./components/Input";


const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCountries =
    searchQuery.length !== 0
      ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      )
      : countries;

  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    axios
      .get(url)
      .then((response) => {
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