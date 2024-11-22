import { useEffect, useState } from 'react';
import { getSavedRecipes, deleteSavedRecipe } from '../services/recipeService';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';

function SavedRecipes() {
  const [savedRecipes, setSavedRecipes] = useState([]); // State to store saved recipes
  const [loading, setLoading] = useState(true); // Loading state
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' }); // Snackbar for feedback

  // Fetch saved recipes on component mount
  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const data = await getSavedRecipes();
        setSavedRecipes(data || []); // Ensure data is an array
      } catch (error) {
        console.error('Failed to fetch saved recipes:', error);
        setSnackbar({
          open: true,
          message: 'Failed to load saved recipes. Please try again later.',
          severity: 'error',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSavedRecipes();
  }, []);

  // Handle removing a saved recipe
  const handleRemove = async (id) => {
    try {
      await deleteSavedRecipe(id);
      setSavedRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.idMeal !== id)); // Update UI after deletion
      setSnackbar({ open: true, message: 'Recipe removed successfully.', severity: 'success' });
    } catch (error) {
      console.error('Failed to remove recipe:', error);
      setSnackbar({
        open: true,
        message: 'Failed to remove recipe. Please try again.',
        severity: 'error',
      });
    }
  };

  // Close snackbar
  const handleCloseSnackbar = () => {
    setSnackbar({ open: false, message: '', severity: 'success' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Saved Recipes
      </Typography>

      {loading ? (
        <CircularProgress style={{ display: 'block', margin: '20px auto' }} />
      ) : savedRecipes.length > 0 ? (
        <Grid container spacing={3}>
          {savedRecipes.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={recipe.idMeal}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={recipe.strMealThumb}
                  alt={recipe.strMeal}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {recipe.strMeal}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleRemove(recipe.idMeal)}
                  >
                    Remove
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography
          variant="body1"
          color="textSecondary"
          align="center"
          style={{ marginTop: '20px' }}
        >
          No saved recipes found. Save some recipes to see them here.
        </Typography>
      )}

      {/* Snackbar for user feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SavedRecipes;
