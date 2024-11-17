// src/pages/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchRecipesByIngredient, saveRecipe } from '../services/recipeService';
import { Grid, TextField, Button, Card, CardMedia, CardContent, Typography } from '@mui/material';

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

      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        {recipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={recipe.idMeal}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={recipe.strMealThumb}
                alt={recipe.strMeal}
              />
              <CardContent>
                <Typography variant="h6">{recipe.strMeal}</Typography>
                <Button component={Link} to={`/recipe/${recipe.idMeal}`} color="primary">
                  View Details
                </Button>
                <Button onClick={() => handleSave(recipe)} color="secondary">
                  Save
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Home;
