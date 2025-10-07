import { use, useState } from "react";
import Country from "../Country/Country";
import './countries.css';

// destructuring the prop recieved from App.jsx
const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);  //state to handle flags

    const handleVisitedCountries = (country) =>{
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
    }
    const handleVisitedFlags = (flag) => {      // visited flags state modifier
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    const countriesData = use(countriesPromise);  //use hook to resolve promise
    const countries = countriesData.countries;  //taking only the countries
    // console.log(countries)

    return (
        <div>

            <h2>There are total {countries.length} countries</h2>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <h3>Total Flags Visited: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => 
                        <h3 key={country.ccn3.ccn3} >
                            {country.name.common}
                        </h3>)
                }
            </ol>
            <div className="visited-flags-container">
                {
                    visitedFlags.map(flag =>
                        <img src={flag} alt="" />
                    )
                }
            </div>

            <div className="countries">
                {
                countries.map(country => 
                    <Country 
                        key={country.ccn3.ccn3} 
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlags={handleVisitedFlags}>
                    </Country>)
                }
            </div>
        </div>
    )
}

export default Countries
