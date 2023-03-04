import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container" style={{backgroundImage: "url(https://github.com/DOROTHY2322/phase--3-petfinder-client/blob/main/public/background.jpg)"}}>
      ...
      <div className="feature">
        <img src="/path/to/cat-image.jpg" alt="Cat" />
        <h2>Support Our Mission</h2>
        <p>Support animal welfare and help us care for our animals by making a donation.</p>
      </div>
      <div className="feature">
        <img src="https://media.istockphoto.com/id/480202588/photo/parrot-puppy-and-cat.jpg" alt="Bird" />
        <h2>Support Our Mission</h2>
        <p>Support animal welfare and help us care for our animals by making a donation.</p>
      </div>
    </div>
  );
}

export default Home;
