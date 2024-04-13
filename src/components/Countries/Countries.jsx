import {useEffect, useState} from "react";
import country from "../Country/Country.jsx";
import Country from "../Country/Country.jsx";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setCountries(data))

    }, []);


    const handleVisitedCountry = country => {
        console.log('ok')
        //console.log(country)
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    // remove country



    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }

                </ul>
            </div>
            <div  className="country-container">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        country={country}
                    ></Country>)
                }
            </div>


        </div>
    );
};

export default Countries;