import React, { useState } from 'react';
import { searchRecipesByIngredient } from '../services/recipeService';

function Home() {
  const [ingredient, setIngredient] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!ingredient.trim()) {
      setError('Please enter an ingredient');
      return;
    }

    setError('');
    try {
      const data = await searchRecipesByIngredient(ingredient);
      setRecipes(data.meals || []);
    } catch (err) {
      setError('No recipes found or an error occurred');
      setRecipes([]);
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

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {recipes.map((recipe) => (
          <div key={recipe.idMeal} style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '100%' }} />
            <h3>{recipe.strMeal}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
