import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import Python from './pages/python.jsx';
import Web from './pages/web.jsx';
import Weather from './pages/weather.jsx';
import Recipe from './pages/recipe.jsx';
import Calc from './pages/calc.jsx';
import Home from './pages/home.jsx';
import Header from './components/Header'
import './index.css';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
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
