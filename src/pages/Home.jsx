// src/pages/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchRecipesByIngredient, saveRecipe } from '../services/recipeService';

function Home() {
  const [ingredient, setIngredient] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    if (!ingredient.trim()) {
      alert('Please enter an ingredient before searching.');
      return;
    }
    
    try {
      const data = await searchRecipesByIngredient(ingredient);
      setRecipes(data.meals || []);
    } catch (error) {
      console.error('Error searching recipes:', error);
    }
  };

  const handleSave = async (recipe) => {
    try {
      const { idMeal: id, strMeal: title, strMealThumb: image } = recipe;
      const response = await saveRecipe({ id, title, image });
      alert(response.message);
    } catch (error) {
      alert('Failed to save the recipe.');
    }
  };

  return (
    <div>
      <h1>Search Recipes by Ingredient</h1>
      <input
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        placeholder="Enter an ingredient"
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {recipes.map((recipe) => (
          <div key={recipe.idMeal}>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '100px', height: '100px' }} />
            <p>{recipe.strMeal}</p>
            <Link to={`/recipe/${recipe.idMeal}`}>View Details</Link>
            <button onClick={() => handleSave(recipe)}>Save</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
