import axios from 'axios';

// const BASE_URL = 'http://localhost:5000'; // adjust if needed


export const fetchRandomRecipes = async () => {
    const API = 'https://recipefinder-01e0.onrender.com'|| 'http://localhost:5000'; // adjust if needed
  try {
    const response = await axios.get(`${API}/api/recipes/random`);
    return response.data;
  } catch (error) {
    console.error('Error fetching random recipes:', error);
    return [];
  }
}