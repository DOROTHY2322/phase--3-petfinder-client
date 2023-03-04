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

    fetch(`/pets/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setPets(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input type="text" value={query} onChange={handleQueryChange} />
      <button type="submit">Search</button>
      {pets.length > 0 && (
        <ul>
          {pets.map((pet) => (
            <li key={pet.id}>
              <Link to={`/pets/${pet.id}`}>{pet.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SearchForm;
