import { use } from "react";
import Country from "../Country/Country";

// destructuring the prop recieved from App.jsx
const Countries = ({countriesPromise}) => {

    const countriesData = use(countriesPromise);  //use hook to resolve promise
    const countries = countriesData.countries;  //taking only the countries
    console.log(countries)

    return (
        <div>
            <h4>There are {countries.length} countries</h4>
            {
                countries.map(country => <Country country = {country}></Country>)
            }
        </div>
    )
}

export default Countries
