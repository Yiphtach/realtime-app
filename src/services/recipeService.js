import axios from 'axios';

const API_URL = 'http://localhost:3000/api/recipes'; 

// Utility to handle errors
const handleError = (error, message) => {
  console.error(message, error);
  throw error;
};

// Search Recipes by Ingredient
export const searchRecipesByIngredient = async (ingredient) => {
  if (!ingredient || ingredient.trim() === '') {
    throw new Error('Ingredient parameter is required');
  }

  try {
    const response = await axios.get(`${API_URL}/search`, { params: { ingredient } });
    return response.data;
  } catch (error) {
    handleError(error, 'Error fetching recipes by ingredient:');
  }
};

// Get Recipe by ID
export const getRecipeById = async (id) => {
  if (!id) {
    throw new Error('Recipe ID is required');
  }

  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    handleError(error, 'Error fetching recipe by ID:');
  }
};

// Save Recipe
export const saveRecipe = async (recipe) => {
  if (!recipe || !recipe.idMeal || !recipe.strMeal || !recipe.strMealThumb) {
    throw new Error('Recipe object with idMeal, strMeal, and strMealThumb is required');
  }

  try {
    const response = await axios.post(`${API_URL}/saved`, recipe);
    return response.data;
  } catch (error) {
    handleError(error, 'Error saving recipe:');
  }
};

// Get All Saved Recipes
export const getSavedRecipes = async () => {
  try {
    const response = await axios.get(`${API_URL}/saved`);
    return response.data;
  } catch (error) {
    handleError(error, 'Error fetching saved recipes:');
  }
};

// Delete Saved Recipe
export const deleteSavedRecipe = async (idMeal) => {
  if (!idMeal) {
    throw new Error('Recipe ID (idMeal) is required to delete a saved recipe');
  }

  try {
    const response = await axios.delete(`${API_URL}/saved/${idMeal}`);
    return response.data;
  } catch (error) {
    handleError(error, 'Error deleting saved recipe:');
  }
};

// Search Meal by Name
export const searchMealByName = async (name) => {
  if (!name || name.trim() === '') {
    throw new Error('Name parameter is required');
  }

  try {
    const response = await axios.get(`${API_URL}/search`, { params: { s: name } });
    return response.data;
  } catch (error) {
    handleError(error, 'Error searching meal by name:');
  }
};

// List Meals by First Letter
export const listMealsByFirstLetter = async (letter) => {
  if (!letter || letter.trim() === '' || letter.length > 1) {
    throw new Error('A single letter parameter is required');
  }

  try {
    const response = await axios.get(`${API_URL}/by-letter`, { params: { f: letter } });
    return response.data;
  } catch (error) {
    handleError(error, 'Error listing meals by first letter:');
  }
};

// Lookup Random Meal
export const getRandomMeal = async () => {
  try {
    const response = await axios.get(`${API_URL}/random`);
    return response.data;
  } catch (error) {
    handleError(error, 'Error fetching random meal:');
  }
};

// Get All Categories
export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
  } catch (error) {
    handleError(error, 'Error fetching all categories:');
  }
};

// Filter Meals by Main Ingredient
export const filterMealsByIngredient = async (ingredient) => {
  if (!ingredient || ingredient.trim() === '') {
    throw new Error('Ingredient parameter is required');
  }

  try {
    const response = await axios.get(`${API_URL}/filter/ingredient`, { params: { i: ingredient } });
    return response.data;
  } catch (error) {
    handleError(error, 'Error filtering meals by ingredient:');
  }
};

// Filter Meals by Category
export const filterMealsByCategory = async (category) => {
  if (!category || category.trim() === '') {
    throw new Error('Category parameter is required');
  }

  try {
    const response = await axios.get(`${API_URL}/filter/category`, { params: { c: category } });
    return response.data;
  } catch (error) {
    handleError(error, 'Error filtering meals by category:');
  }
};

// Filter Meals by Area
export const filterMealsByArea = async (area) => {
  if (!area || area.trim() === '') {
    throw new Error('Area parameter is required');
  }

  try {
    const response = await axios.get(`${API_URL}/filter/area`, { params: { a: area } });
    return response.data;
  } catch (error) {
    handleError(error, 'Error filtering meals by area:');
  }
};
