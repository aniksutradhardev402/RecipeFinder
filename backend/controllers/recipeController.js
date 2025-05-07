import { getDB } from '../config/db.js';
import { ObjectId } from 'mongodb';

// Get all recipes with pagination
export const getAllRecipes = async (req, res) => {
  try {
    const db = getDB();
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const total = await db.collection('recipe').countDocuments();
    const recipes = await db.collection('recipe').find().skip(skip).limit(limit).toArray();

    res.json({
      page,
      totalPages: Math.ceil(total / limit),
      totalRecipes: total,
      results: recipes
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single recipe by ID


export const getRecipeById = async (req, res) => {
  try {
    const db = getDB();
    const { id } = req.params;

    // Check if the provided ID is a valid ObjectId format
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid recipe ID format' });
    }

    // Query the database using the ObjectId
    const recipe = await db.collection('recipe').findOne({ _id: new ObjectId(id) });

    // If the recipe is not found, return a 404
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    // Return the recipe if found
    res.json(recipe);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Search recipes using MongoDB Atlas Search Index
export const searchRecipes = async (req, res) => {
  try {
    const db = getDB();
    const query = req.query.q || ''; // Search query
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Using Atlas Search with a custom text index
    const total = await db.collection('recipe').aggregate([
      {
        $search: {
          index: 'default', // Make sure the index name is correct
          text: {
            query: query,
            path: ['name', 'ingredients', 'directions'], // Specify the fields you want to search on
            fuzzy: {
              maxEdits: 2, // Fuzzy search: allows typos in the query
            },
          },
        },
      },
      {
        $count: 'total', // Count total number of results matching the query
      },
    ]).toArray();

    const recipes = await db.collection('recipe').aggregate([
      {
        $search: {
          index: 'default',
          text: {
            query: query,
            path: ['name', 'ingredients', 'directions'],
            fuzzy: {
              maxEdits: 2,
            },
          },
        },
      },
      {
        $skip: skip, // Pagination: skip records based on page number
      },
      {
        $limit: limit, // Pagination: limit records based on the provided limit
      },
    ]).toArray();

    res.json({
      page,
      totalPages: Math.ceil(total[0]?.total / limit),
      totalResults: total[0]?.total,
      results: recipes,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get random recipes (for now, 5 random recipes)
export const getRandomRecipes = async (req, res) => {
  try {
    const db = getDB();
    const recipes = await db.collection('recipe').aggregate([{ $sample: { size: 15 } }]).toArray();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};