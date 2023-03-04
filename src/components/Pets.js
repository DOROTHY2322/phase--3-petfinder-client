import React, { useState, useEffect } from 'react';

function Pets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch('https://dorothy-sinatra-petfinder.onrender.com/pets')
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="pets-container">
      <h1>List of Pets</h1>
      {pets.map((pet) => (
        <div className="pet" key={pet.id}>
          <h2>{pet.name}</h2>
          <img src={pet.img_url} alt={pet.name} />
          <p>Species: {pet.species}</p>
          <p>Breed: {pet.breed}</p>
        </div>
      ))}
    </div>
  );
  
}

export default Pets;
