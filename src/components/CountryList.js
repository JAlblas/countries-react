import CountryListItem from "./CountryListItem";

const CountryList = ({ countries }) => {
    if (countries.length > 10) {
        return <p>Too many matches, specify another filter</p>;
    }
    return (
        <div>
            {countries.map((country, index) => (
                <CountryListItem key={country.cca2} country={country} />
            )
            )}
        </div>
    );
};

export default CountryList;