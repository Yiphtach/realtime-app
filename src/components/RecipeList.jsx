import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';

function RecipeList({ recipes, onSave }) {
  if (!recipes.length) {
    return (
      <Typography variant="body1" color="textSecondary" align="center" sx={{ mt: 4 }}>
        No recipes found. Try searching with a different ingredient.
      </Typography>
    );
  }

  return (
    <Grid container spacing={3}>
      {recipes.map((recipe) => (
        <Grid item xs={12} sm={6} md={4} key={recipe.idMeal}>
          <Card className="recipe-card">
            <CardMedia
              component="img"
              height="140"
              image={recipe.strMealThumb}
              alt={recipe.strMeal}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {recipe.strMeal}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" onClick={() => onSave(recipe)}>
                Save Recipe
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default RecipeList;
