// src/pages/Home.jsx
import React, { useState } from 'react';
import { Typography, Grid, TextField, Button } from '@mui/material';
import { searchRecipesByIngredient, saveRecipe } from '../services/recipeService';
import RecipeList from '../components/RecipeList';

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
      <Typography variant="h4" component="h1" gutterBottom>
        Search Recipes by Ingredient
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <TextField
            fullWidth
            variant="outlined"
            label="Enter an ingredient"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}

          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search
          </Button>
        </Grid>
      </Grid>

      <div style={{ marginTop: '20px' }}>
        {recipes.length > 0 ? (
          <RecipeList recipes={recipes} onSave={handleSave} />
        ) : (
          <Typography variant="subtitle1">No recipes found. Try searching for another ingredient.</Typography>
        )}
      </div>
    </div>
  );
}

export default Home;
