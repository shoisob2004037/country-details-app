import React, { useEffect, useState } from 'react';
import './Body.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Body = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [countries]);
     
    const navigate = useNavigate();

    const showDetails = (cca3) => {
        navigate(`/details/${cca3}`);
    };
 
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Total Country Details: <span style={{color:'green'}}>{countries.length}</span></h1>
            <div className="row">
                {countries.map(country => (
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" key={country.cca3}>
                        <div className="card mb-4" style={{ width: '12rem', height: '20rem' }}>
                            <img src={country.flags.png} className="card-img-top" alt={country.name.common} />
                            <div className="card-body">
                                <h5 className="card-title">{country.name.common}</h5>
                                <p className="card-text">
                                    <b>Capital:</b> {country.capital ? country.capital : 'N/A'}<br />
                                    <b>Population:</b> {country.population}
                                </p>
                                <button className="btn btn-primary show" onClick={() => showDetails(country.cca3)}>Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Body;
