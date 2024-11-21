// src/pages/RecipeDetails.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeById } from '../services/recipeService';

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const data = await getRecipeById(id);
        if (data.meals && data.meals.length > 0) {
          setRecipe(data.meals[0]);
        }
      } catch (error) {
        console.error('Failed to fetch recipe details:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <p>Loading recipe details...</p>;
  }

  return (
    <div>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '300px' }} />
      <p><strong>Category:</strong> {recipe.strCategory}</p>
      <p><strong>Area:</strong> {recipe.strArea}</p>
      <p><strong>Instructions:</strong> {recipe.strInstructions}</p>
    </div>
  );
}

export default RecipeDetails;
