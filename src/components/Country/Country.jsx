import './Country.css'
import {useState} from "react";
import Countries from "../Countries/Countries.jsx";


const Country = ({country, handleVisitedCountry}) => {

    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }

    //console.log(handleVisitedCountry)
    const passWithParams = () => {
        handleVisitedCountry(country);
    }

    return (
        <div className={`container ${visited && 'visited'}`}>
            <div className="country">
                <h3>Name: {name?.common} </h3>
                <img src={flags.png} alt="" height="20px" width=""/>

            </div>
            <div className="country-data">
                <p>Population: {population}</p>
                <p>Area: {area}</p>
                <p><small>Code: {cca3}</small></p>
                <button onClick={passWithParams}>Mark visited</button>
                <br/>
                <button onClick={() => handleVisitedCountry(country)}>Mark visited 2</button>
                <button onClick={handleVisited}>{visited ? 'Visited' : 'Visit'}</button>
                {visited ? 'I have visited this country.' : 'I want to visit.'}
            </div>
        </div>
    );
};

export default Country;