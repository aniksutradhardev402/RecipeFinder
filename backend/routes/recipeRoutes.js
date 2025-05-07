import express from 'express';
import {
  getAllRecipes,
  getRecipeById,
  searchRecipes,
  getRandomRecipes,
} from '../controllers/recipeController.js';

const router = express.Router();

// Route to get all recipes with pagination
router.get('/', getAllRecipes);



// Route to search recipes based on a query
router.get('/search', searchRecipes);

// Route to get random recipes (for now, 5 random recipes)
router.get('/random', getRandomRecipes);

// Route to get a single recipe by its ID
router.get('/:id', getRecipeById);

export default router;