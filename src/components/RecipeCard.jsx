// src/components/RecipeCard.jsx
import { Link } from 'react-router-dom';



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
