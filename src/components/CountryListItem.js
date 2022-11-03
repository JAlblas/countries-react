import { useState } from "react";
import CountryDetails from "./CountryDetails";

const CountryListItem = ({ country }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div>
            <p key={country.cca2}>{country.name.common}</p>
            <button onClick={() => setShowDetails(!showDetails)}>{showDetails ? "Hide details" : "Show details"}</button>
            {showDetails ? <CountryDetails country={country} /> : null}
        </div>
    )
}

export default CountryListItem;