// src/pages/RandomMeal.jsx
import React, { useState } from 'react';
import { getRandomMeal, saveRecipe } from '../services/recipeService';
import RecipeCard from '../components/RecipeCard';

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

  const handleSave = async (recipe) => {
    try {
      const { idMeal: id, strMeal: title, strMealThumb: image } = recipe;
      const response = await saveRecipe({ id, title, image });
      alert(response.message || 'Recipe saved successfully!');
    } catch (error) {
      alert('Failed to save the recipe.');
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
