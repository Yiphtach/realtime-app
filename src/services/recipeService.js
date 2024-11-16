import axios from 'axios';

const API_URL = 'http://localhost:3000/api/recipes';

export const searchRecipesByIngredient = async (ingredient) => {
  try {
    const response = await axios.get(`${API_URL}/search`, { params: { ingredient } });
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error.message);
    throw error;
  }
};
