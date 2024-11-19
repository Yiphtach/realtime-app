// src/pages/SearchByName.jsx
import React, { useState } from 'react';
import { searchMealByName } from '../services/recipeService';

function SearchByName() {
  const [name, setName] = useState('');
  const [meals, setMeals] = useState([]);

  const handleSearch = async () => {
    try {
      const data = await searchMealByName(name);
      setMeals(data.meals || []);
    } catch (error) {
      console.error('Error searching meal by name:', error);
    }
  };

  return (
    <div>
      <h1>Search Meals by Name</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter meal name"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {meals.map((meal) => (
          <div key={meal.idMeal} style={{ marginBottom: '1rem' }}>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '200px' }} />
            <p><strong>Category:</strong> {meal.strCategory}</p>
            <p><strong>Area:</strong> {meal.strArea}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchByName;
