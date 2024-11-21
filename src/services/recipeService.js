import axios from 'axios';

const API_URL = 'http://localhost:3000/api/recipes'; // Base API URL

// Search Recipes by Ingredient
export const searchRecipesByIngredient = async (ingredient) => {
  if (!ingredient || ingredient.trim() === '') {
    throw new Error('Ingredient parameter is required');
  }

  try {
    const response = await axios.get(`${API_URL}/search`, { params: { ingredient } });
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes by ingredient:', error);
    throw error;
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
    console.error('Error fetching recipe by ID:', error);
    throw error;
  }
};

// Save Recipe
export const saveRecipe = async (recipe) => {
  if (!recipe || !recipe.id || !recipe.title || !recipe.image) {
    throw new Error('Recipe object with id, title, and image is required');
  }

  try {
    const response = await axios.post(`${API_URL}/save`, recipe);
    return response.data;
  } catch (error) {
    console.error('Error saving recipe:', error);
    throw error;
  }
};

// Get All Saved Recipes
export const getSavedRecipes = async () => {
  try {
    const response = await axios.get(`${API_URL}/saved`);
    return response.data;
  } catch (error) {
    console.error('Error fetching saved recipes:', error);
    throw error;
  }
};

// Remove Saved Recipe
export const removeSavedRecipe = async (id) => {
  if (!id) {
    throw new Error('Recipe ID is required to remove a saved recipe');
  }

  try {
    const response = await axios.delete(`${API_URL}/saved/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error removing recipe:', error);
    throw error;
  }
};

export const deleteSavedRecipe = async (id) => {
  if (!id) {
    throw new Error('Recipe ID is required to delete a saved recipe');
  }

  try {
    const response = await axios.delete(`${API_URL}/saved/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting saved recipe:', error);
    throw error;
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
    console.error('Error searching meal by name:', error);
    throw error;
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
    console.error('Error listing meals by first letter:', error);
    throw error;
  }
};

// Lookup Random Meal
export const getRandomMeal = async () => {
  try {
    const response = await axios.get(`${API_URL}/random`);
    return response.data;
  } catch (error) {
    console.error('Error fetching random meal:', error);
    throw error;
  }
};

// Get All Categories
export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all categories:', error);
    throw error;
  }
};

// Get Lists by Type (Categories, Areas, Ingredients)
export const getListsByType = async (type) => {
  if (!['c', 'a', 'i'].includes(type)) {
    throw new Error('Invalid type. Use "c" for categories, "a" for areas, or "i" for ingredients');
  }

  try {
    const response = await axios.get(`${API_URL}/lists`, { params: { type } });
    return response.data;
  } catch (error) {
    console.error('Error fetching lists by type:', error);
    throw error;
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
    console.error('Error filtering meals by ingredient:', error);
    throw error;
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
    console.error('Error filtering meals by category:', error);
    throw error;
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
    console.error('Error filtering meals by area:', error);
    throw error;
  }
};
