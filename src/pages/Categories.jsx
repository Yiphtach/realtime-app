import { useState, useEffect } from 'react';
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  CircularProgress,
} from '@mui/material';
import { getAllCategories, } from '../services/recipeService';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data.categories || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Meal Categories
      </Typography>

      {loading ? (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <CircularProgress />
        </div>
      ) : (
        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category.idCategory}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={category.strCategoryThumb}
                  alt={category.strCategory}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {category.strCategory}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {category.strCategoryDescription.substring(0, 100)}...
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href={`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Recipes
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default Categories;
