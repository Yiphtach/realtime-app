// src/pages/Categories.jsx
import React, { useState, useEffect } from 'react';
import { getAllCategories, saveRecipe } from '../services/recipeService';
import RecipeList from '../components/RecipeList';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data.categories || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

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
      <h1>Meal Categories</h1>
      <div>
        {categories.map((category) => (
          <div key={category.idCategory} style={{ marginBottom: '1rem' }}>
            <h2>{category.strCategory}</h2>
            <img
              src={category.strCategoryThumb}
              alt={category.strCategory}
              style={{ width: '150px' }}
            />
            <p>{category.strCategoryDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
