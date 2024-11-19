// src/pages/RandomMeal.jsx
import React, { useState } from 'react';
import { getRandomMeal } from '../services/recipeService';

function RandomMeal() {
  const [meal, setMeal] = useState(null);

  const fetchRandomMeal = async () => {
    try {
      const data = await getRandomMeal();
      setMeal(data.meals[0]);
    } catch (error) {
      console.error('Error fetching random meal:', error);
    }
  };

  return (
    <div>
      <h1>Random Meal</h1>
      <button onClick={fetchRandomMeal}>Get Random Meal</button>
      {meal && (
        <div>
          <h2>{meal.strMeal}</h2>
          <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '300px' }} />
          <p><strong>Category:</strong> {meal.strCategory}</p>
          <p><strong>Area:</strong> {meal.strArea}</p>
          <p><strong>Instructions:</strong> {meal.strInstructions}</p>
        </div>
      )}
    </div>
  );
}

export default RandomMeal;
