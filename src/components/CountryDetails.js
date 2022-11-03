import { useState, useEffect } from "react";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY

const CountryDetails = ({ country }) => {
    const [weather, setWeather] = useState();

    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}&units=metric`;
        axios
            .get(url)
            .then((response) => {
                setWeather(response.data);
            })
            .catch((e) => console.log(e));
    }, [country]);

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
            <img src={country.flags.png} alt="country flag"></img>


            {weather ? <div><h3>Weather in {country.capital}</h3>

                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="icon" />
                <p>
                    <strong>Temperature: </strong>
                    {weather.main.temp}
                </p>
                <p><strong>wind: <br /></strong>{weather.wind.speed} mph <br /> direction {weather.wind.deg}</p></div>
                : <div>...loading</div>}

            <hr />

        </div>);
};

export default CountryDetails;
