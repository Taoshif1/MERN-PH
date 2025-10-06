import './country.css' 

const Country = ({country}) => {

    const handleVisited = () => {
        console.log("btn clicked")
    }


    // 1. Destructure common deeply-nested data for clean access:
    const { flags, name, capital, area, population, continents, languages, currencies , cca3} = country;

    // 2. Safely access the array of language names and join them
    // Accesses: country.languages?.languages (the object of languages)
    const languageNames = languages?.languages?Object.values(languages.languages).join(', '): 'N/A';

    // 3. NEW: Safely access the array of currency objects and format them.
    // The inner object (currencies.currencies) contains keys like JMD, USD.
    // Object.values() gives us an array of objects: [{name: "...", symbol: "..."}, ...]
    const currencyDetails = currencies?.currencies 
        ? Object.values(currencies.currencies)
              .map(c => `${c.name} (${c.symbol})`) // Map each object to a string like "Jamaican dollar ($)"
              .join(', ') // Join the strings with a comma and space
        : 'N/A';

    return (
        <div className='country'>
            <img src={flags?.flags?.png} alt={flags?.flags?.alt || 'Flag'} />  
            <h3>
                <u>Name:</u> {name?.common} <small><sub>{capital?.capital?.[0]}</sub>
                </small> <sup><small>({cca3?.cca3})</small></sup> 
                 {/* Use [0] as capital is an array */}
            </h3>
            <p>
                <u>Area:</u> <strong>{area?.area}</strong> km <sup><small>2</small></sup> <br />
                <u>Population:</u> <strong>{population?.population}</strong> 
            </p>
            <p>
                <u>Continent:</u> <strong>{continents?.continents?.[0]}</strong> <br />
                {/* Displaying all languages comma-separated: */}
                <u>Languages:</u> <strong>{languageNames}</strong>
            </p>
            <p>
                <u>Currency:</u> <strong>{currencyDetails}</strong>
            </p>
            <button onClick={handleVisited}>Not Visited</button>
            
        </div>
    );
};

export default Country;


/**
 * 1. inline CSS (style object) 
 * 2. 
 * 
 * 
 * 
*/
