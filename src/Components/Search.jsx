import React, { useState } from 'react';
import './Search.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Search = () => {
    const [inputValue, setInputValue] = useState(''); // State to track the input value
    const [found, setFound] = useState([]); // State to store the search results
    const navigate = useNavigate();
    const handleSearch = () => {
        if (inputValue.trim() !== '') {
            fetch(`https://restcountries.com/v3.1/name/${inputValue}`)
                .then(res => res.json())
                .then(data => setFound(data))
                .catch(err => console.error('Error fetching country data:', err));
        }
    };

    const showDetails = (cca3) => {
        navigate(`/details/${cca3}`);
    };

    return (
        <div>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Enter Any Country..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} // Update the input value
                    className="form-control"
                />
                <button type="button" className="btn btn-success" onClick={handleSearch}>
                    Search
                </button>
            </div>

            <div className="results-container">
                {found.length > 0 ? (
                    found.map(country => (
                        <div key={country.cca3} className="card mb-4">
                            <div className="card-body">
                            <img src={country.flags.png} className="card-img-top" alt={country.name.common} />
                                <h5 className="card-title">{country.name.common}</h5>
                                <p><b>Languages:</b> {country.languages.eng}</p>
                                <p className="card-text">
                                    <b>Capital:</b> {country.capital ? country.capital[0] : 'N/A'}<br />
                                    <b>Population:</b> {country.population}
                                </p>
                                <button className="btn btn-primary show" onClick={() => showDetails(country.cca3)}>Details</button>

                            </div>
                        </div>
                    ))
                ) : (
                    <p>No country found. Try another name.</p>
                )}
            </div>
        </div>
    );
};

export default Search;
