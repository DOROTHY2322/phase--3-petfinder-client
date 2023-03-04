import React, { useState, useEffect } from 'react';

function AvailablePets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch('https://dorothy-sinatra-petfinder.onrender.com/pets/available')
      .then(response => response.json())
      .then(data => setPets(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="available-pets">
      <h1>Available Pets</h1>
      <ul className="available-pets-list">
        {pets.map(pet => (
          <li key={pet.id} className="available-pet-item">
            {pet.img_url && <img src={pet.img_url} alt={pet.name} className="available-pet-img" />}
            <div className="available-pet-details">
              <h2>{pet.name}</h2>
              <p>Breed: {pet.breed}</p>
              <p>Age: {pet.age}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AvailablePets;
