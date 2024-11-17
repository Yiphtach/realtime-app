// src/pages/SavedRecipes.jsx
import React, { useEffect, useState } from 'react';
import { getSavedRecipes, removeSavedRecipe } from '../services/recipeService';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

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

  const handleRemove = async (id) => {
    try {
      const response = await removeSavedRecipe(id);
      alert(response.message);
      setSavedRecipes(response.savedRecipes);
    } catch (error) {
      alert('Failed to remove the recipe.');
    }
  };

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Saved Recipes
      </Typography>
      <Grid container spacing={3}>
        {savedRecipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={recipe.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={recipe.image}
                alt={recipe.title}
              />
              <CardContent>
                <Typography variant="h6">{recipe.title}</Typography>
                <Button onClick={() => handleRemove(recipe.id)} color="secondary">
                  Remove
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default SavedRecipes;
