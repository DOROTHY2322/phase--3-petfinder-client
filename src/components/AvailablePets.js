import React, { useState, useEffect } from 'react';

function AvailablePets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function fetchPets() {
      const response = await fetch('/pets/available');
      const data = await response.json();
      setPets(data);
    }

    fetchPets();
  }, []);

  return (
    <div>
      <h1>Available Pets</h1>
      {pets.map(pet => (
        <div key={pet.id}>
          <h2>{pet.name}</h2>
          <img src={pet.image_url} alt={pet.name} />
          <p>{pet.description}</p>
        </div>
      ))}
    </div>
  );
}

export default AvailablePets;
