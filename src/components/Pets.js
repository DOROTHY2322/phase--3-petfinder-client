import React, { useState, useEffect } from 'react';
import AddPetForm from './AddPetForm';

function Pets() {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dorothy-sinatra-petfinder.onrender.com/pets')
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`https://dorothy-sinatra-petfinder.onrender.com/pets/${id}`, {
        method: 'DELETE',
      });
      setPets((prevPets) => prevPets.filter((pet) => pet.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddPet = async (pet) => {
    try {
      const response = await fetch('https://dorothy-sinatra-petfinder.onrender.com/pets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pet),
      });

      if (!response.ok) {
        throw new Error('Failed to add pet');
      }

      const data = await response.json();
      setPets((prevPets) => [...prevPets, data]);
    } catch (error) {
      console.error(error);
      setError('Failed to add pet');
    }
  };

  return (
    <div className="pets-container">
      <h1>List of Pets</h1>
      {error && <div className="error">{error}</div>}
      <AddPetForm onAddPet={handleAddPet} />
      <div className="pet-grid">
        {pets.map((pet) => (
          <div className="pet-card" key={pet.id}>
            {pet.img_url && <img className="pet-image" src={pet.img_url} alt={pet.name} />}
            <h2 className="pet-name">{pet.name}</h2>
            <p className="pet-info">Breed: {pet.breed}</p>
            <p className="pet-info">Age: {pet.age}</p>
            <button onClick={() => handleDelete(pet.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Pets;
