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
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const data = await getSavedRecipes();
        setSavedRecipes(data || []);
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

  const handleRemove = async (id) => {
    try {
      await deleteSavedRecipe(id);
      setSavedRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
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
            <Grid item xs={12} sm={6} md={4} lg={3} key={recipe.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={recipe.image}
                  alt={recipe.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {recipe.title}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleRemove(recipe.id)}
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
