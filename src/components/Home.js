import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container" style={{backgroundImage: "url('/path/to/background-image.jpg')"}}>
      ...
      <div className="feature">
        <img src="/path/to/cat-image.jpg" alt="Cat" />
        <h2>Support Our Mission</h2>
        <p>Support animal welfare and help us care for our animals by making a donation.</p>
      </div>
      <div className="feature">
        <img src="/path/to/bird-image.jpg" alt="Bird" />
        <h2>Support Our Mission</h2>
        <p>Support animal welfare and help us care for our animals by making a donation.</p>
      </div>
    </div>
  );
}

export default Home;
