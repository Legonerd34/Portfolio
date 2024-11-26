import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import Python from './pages/python.jsx';
import Web from './pages/web.jsx';
import Weather from './pages/weather.jsx';
import Recipe from './pages/recipe.jsx';
import Calc from './pages/calc.jsx';
import Home from './pages/home.jsx';
import './index.css';

function App() {
  const navigate = useNavigate();


  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className={`navbar ${isActive ? 'active' : ''}`}>
        <div className="navbar-links">
          <button onClick={() => navigate('/Portfolio')}>Home</button>
          <button onClick={() => navigate('/python')}>Flappy Bird</button>
          <button onClick={() => navigate('/web')}>Web design</button>
          <button onClick={() => navigate('/weather')}>Weather app</button>
          <button onClick={() => navigate('/recipe')}>Recipe finder</button>
          <button onClick={() => navigate('/calc')}>Calculator</button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/python" element={<Python />} />
          <Route path="/web" element={<Web />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/calc" element={<Calc />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
