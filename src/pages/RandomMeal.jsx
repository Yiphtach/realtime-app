import { useState } from 'react';
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import { getRandomMeal, } from '../services/recipeService';

function RandomMeal() {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const fetchRandomMeal = async () => {
    setLoading(true);
    try {
      const data = await getRandomMeal();
      setMeal(data.meals[0]);
    } catch (error) {
      console.error('Error fetching random meal:', error);
      setSnackbar({ open: true, message: 'Failed to fetch random meal.', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ open: false, message: '', severity: 'success' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Random Meal
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={fetchRandomMeal}
        disabled={loading}
        style={{ marginBottom: '20px' }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Get Random Meal'}
      </Button>

      {meal && (
        <Card>
          <Grid container>
            <Grid item xs={12} md={4}>
              <CardMedia
                component="img"
                image={meal.strMealThumb}
                alt={meal.strMeal}
                style={{ height: '100%', width: '100%' }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {meal.strMeal}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  <strong>Category:</strong> {meal.strCategory}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  <strong>Area:</strong> {meal.strArea}
                </Typography>
                <Typography variant="body2" style={{ marginTop: '10px' }}>
                  <strong>Instructions:</strong> {meal.strInstructions}
                </Typography>
              </CardContent>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => (meal)}
                style={{ margin: '10px' }}
              >
                Save Recipe
              </Button>
            </Grid>
          </Grid>
        </Card>
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

export default RandomMeal;
