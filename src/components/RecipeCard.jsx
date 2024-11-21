// src/components/RecipeCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

function RecipeCard({ recipe, onSave }) {
  return (
    <div className="recipe-card">
      <Link to={`/recipe/${recipe.idMeal}`} className="recipe-link">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
        <h3 className="recipe-title">{recipe.strMeal}</h3>
      </Link>
      <button className="save-button" onClick={() => onSave(recipe)}>
        Save
      </button>
    </div>
  );
}

export default RecipeCard;
