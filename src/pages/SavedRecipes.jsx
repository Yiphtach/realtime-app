// src/pages/SavedRecipes.jsx
import React, { useEffect, useState } from 'react';
import { getSavedRecipes } from '../services/recipeService';

function SavedRecipes() {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const data = await getSavedRecipes();
        setSavedRecipes(data);
      } catch (error) {
        console.error('Failed to fetch saved recipes:', error);
      }
    };

    fetchSavedRecipes();
  }, []);

  return (
    <div>
      <h1>Saved Recipes</h1>
      {savedRecipes.length === 0 && <p>No saved recipes yet.</p>}
      <div>
        {savedRecipes.map((recipe) => (
          <div key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} style={{ width: '100px', height: '100px' }} />
            <p>{recipe.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedRecipes;
