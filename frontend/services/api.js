import axios from 'axios';

// const BASE_URL = 'http://localhost:5000'; // adjust if needed

const API = import.meta.env.VITE_API_URL;

export const fetchRandomRecipes = async () => {
  try {
    const response = await axios.get(`${API}/api/recipes/random`);
    return response.data;
  } catch (error) {
    console.error('Error fetching random recipes:', error);
    return [];
  }
}