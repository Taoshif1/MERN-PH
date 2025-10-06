import { use } from "react";
import Country from "../Country/Country";
import './countries.css';

// destructuring the prop recieved from App.jsx
const Countries = ({countriesPromise}) => {

    const countriesData = use(countriesPromise);  //use hook to resolve promise
    const countries = countriesData.countries;  //taking only the countries
    console.log(countries)

    return (
        <div>
            <div className="countries">
                {
                countries.map(country => 
                    <Country 
                        key={country.ccn3.ccn3} 
                        country = {country}>
                    </Country>)
            }
            </div>
        </div>
    )
}

export default Countries
