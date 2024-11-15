import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SavedRecipes from './pages/SavedRecipes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<SavedRecipes />} />
      </Routes>
    </Router>
  );
}

export default App;
