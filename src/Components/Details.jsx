import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';

const Details = () => {
    const { cca3 } = useParams(); 
    const [country, setCountry] = useState(null);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${cca3}`)
            .then(res => res.json())
            .then(data => setCountry(data[0])); 
    }, [cca3]);

    if (!country) return <div>Loading...</div>; 

    return (
        <div className='text-center'>
            <h1 className='name'>{country.name.common}</h1>
            <img src={country.flags.png} alt={`${country.name.common} flag`} />
            <p><b>Offical Name :</b> {country.name.official}</p>
            <p><b>Capital:</b> {country.capital}</p>
            <p><b>Languages:</b> {country.languages.eng}</p>
            <p><b>Population:</b> {country.population}</p>
            <p><b>Region:</b> {country.region}</p>
            <p><b>Subregion:</b> {country.subregion}</p>
            <p><b>Area:</b> {country.area} km²</p>
        </div>
    );
};

export default Details;
