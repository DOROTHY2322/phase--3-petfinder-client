import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pets from './components/Pets';
import Home from './components/Home';
import SearchForm from './components/SearchForm';
import AddPetForm from './components/AddPetForm';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">PetClub</Link>
            </li>
            <li>
              <Link to="/pets">Pets</Link>
            </li>
            <li>
              <Link to="/add-pet">Add Pet</Link>
            </li>
            <li>
              <SearchForm />
            </li>
          </ul>
        </nav>

        <div className="container">
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pets" element={<Pets />} />
              <Route path="/add-pet" element={<AddPetForm />} />
            </Routes>
          </div>
        </div>

        <div className="footer">
          <p>&copy; 2023 PetClub. All rights reserved.</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
