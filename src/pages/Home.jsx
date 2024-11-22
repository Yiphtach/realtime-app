import { useState, useEffect } from 'react';
import {
  Typography,
  Grid,
  TextField,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { searchRecipesByIngredient } from '../services/recipeService';
import RecipeList from '../components/RecipeList';

function Home() {
  const [user, setUser] = useState(null);
  const [ingredient, setIngredient] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const navigate = useNavigate();

  // Load user and persisted state on mount
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      navigate('/'); // Redirect to login if no user is logged in
    } else {
      setUser(currentUser);
    }

    const persistedIngredient = localStorage.getItem('ingredient');
    const persistedRecipes = localStorage.getItem('recipes');

    if (persistedIngredient) setIngredient(persistedIngredient);
    if (persistedRecipes) setRecipes(JSON.parse(persistedRecipes));
  }, [navigate]);

  // Persist search state on updates
  useEffect(() => {
    localStorage.setItem('ingredient', ingredient);
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [ingredient, recipes]);

  const handleSearch = async () => {
    if (!ingredient.trim()) {
      setSnackbar({ open: true, message: 'Please enter an ingredient before searching.', severity: 'warning' });
      return;
    }

    setLoading(true);
    try {
      const data = await searchRecipesByIngredient(ingredient);
      setRecipes(data.meals || []);
      setSnackbar({ open: true, message: 'Recipes loaded successfully!', severity: 'success' });
    } catch {
      setSnackbar({ open: true, message: 'Failed to load recipes. Try again later.', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser'); // Clear user session
    navigate('/'); // Redirect to login
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ open: false, message: '', severity: 'success' });
  };

  return (
    <Box sx={{ padding: '20px' }}>
      {user && (
        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h4" gutterBottom>
            Welcome, {user.name}!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: {user.email}
          </Typography>
          <Button variant="outlined" color="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      )}

      <Typography variant="h5" component="h2" gutterBottom>
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
            aria-label="Ingredient search input"
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSearch}
            aria-label="Search recipes button"
          >
            Search
          </Button>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
        {loading ? (
          <CircularProgress />
        ) : recipes.length > 0 ? (
          <RecipeList recipes={recipes} />
        ) : (
          <Typography variant="body1" color="textSecondary">
            No recipes found. Try searching with a different ingredient.
          </Typography>
        )}
      </Box>

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
    </Box>
  );
}

export default Home;
