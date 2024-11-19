// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SavedRecipes from './pages/SavedRecipes';
import RecipeDetails from './pages/RecipeDetails';
import Categories from './pages/Categories';
import RandomMeal from './pages/RandomMeal';
import SearchByName from './pages/SearchByName';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<SavedRecipes />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/random" element={<RandomMeal />} />
        <Route path="/search" element={<SearchByName />} />
      </Routes>
    </Router>
  );
}

export default App;
