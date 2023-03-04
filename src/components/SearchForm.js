import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function SearchForm() {
  const [query, setQuery] = useState('');
  const [pets, setPets] = useState([]);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    fetch(`https://dorothy-sinatra-petfinder.onrender.com/pets/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setPets(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSearchSubmit} className="search-form">
      <input type="text" value={query} onChange={handleQueryChange} className="search-input" />
      <button type="submit" className="search-button">Search</button>
      {pets.length > 0 && (
        <ul className="search-results">
          {pets.map((pet) => (
            <li key={pet.id}>
              <Link to={`/pets/${pet.id}`} className="search-result-link">{pet.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SearchForm;
