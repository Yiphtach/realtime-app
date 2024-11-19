import React, { useState } from 'react';
import { searchRecipesByIngredient, saveRecipe } from '../services/recipeService';
import RecipeList from '../components/RecipeList';

function Home() {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (ingredient) => {
    try {
      const data = await searchRecipesByIngredient(ingredient);
      setRecipes(data.meals || []);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleSave = async (recipe) => {
    try {
      const response = await saveRecipe({
        id: recipe.idMeal,
        title: recipe.strMeal,
        image: recipe.strMealThumb,
      });
      alert(response.message);
    } catch (error) {
      console.error('Error saving recipe:', error);
    }
  };

  return (
    <div>
      <h1>Search Recipes by Ingredient</h1>
      <input
        type="text"
        placeholder="Enter an ingredient"
        onBlur={(e) => handleSearch(e.target.value)}
      />
      <RecipeList recipes={recipes} onSave={handleSave} />
    </div>
  );
}

export default Home;
