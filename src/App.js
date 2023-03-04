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
          </ul>
        </nav>

        <div className="container">
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pets" element={<Pets />} />
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
