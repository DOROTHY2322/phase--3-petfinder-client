import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home-container">
      <div className="home-banner">
        <h1>Welcome to Pet Finder!</h1>
        <p>Find your perfect furry friend today.</p>
        <Link to="/pets" className="btn btn-primary">
          See Our Pets
        </Link>
      </div>
      <div className="home-features">
        <div className="feature">
          <i className="fas fa-search fa-3x"></i>
          <h2>Find Your Perfect Pet</h2>
          <p>Browse our selection of adoptable pets and find your perfect match.</p>
        </div>
        <div className="feature">
          <i className="fas fa-heart fa-3x"></i>
          <h2>Adopt a Pet</h2>
          <p>Give a pet a forever home and make a lifelong companion.</p>
        </div>
        <div className="feature">
          <i className="fas fa-paw fa-3x"></i>
          <h2>Support Our Mission</h2>
          <p>Support animal welfare and help us care for our animals by making a donation.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
