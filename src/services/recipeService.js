import axios from 'axios';

const API_URL = 'http://localhost:3000/api/recipes';

export const searchRecipesByIngredient = async (ingredient) => {
    if (!ingredient || ingredient.trim() === '') {
      throw new Error('Ingredient parameter is required');
    }

  try {
    const response = await axios.get(`${API_URL}/search`, { params: { ingredient } });
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

export const getRecipeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe by ID:', error);
    throw error;
  }
};

export const saveRecipe = async (recipe) => {
  try {
    const response = await axios.post(`${API_URL}/save`, recipe);
    return response.data;
  } catch (error) {
    console.error('Error saving recipe:', error);
    throw error;
  }
};

export const getSavedRecipes = async () => {
  try {
    const response = await axios.get(`${API_URL}/saved`);
    return response.data;
  } catch (error) {
    console.error('Error fetching saved recipes:', error);
    throw error;
  }
};

export const removeSavedRecipe = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/saved/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error removing recipe:', error);
      throw error;
    }
  };
  
