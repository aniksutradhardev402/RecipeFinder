import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { connectDB, getDB } from '../config/db.js';

const transformRow = (row) => {
  return {
    name: row.recipe_name?.trim(),
    ingredients: row.ingredients?.split(',').map(i => i.trim()) || [],
    prep_time: row.prep_time?.trim() || null,
    cook_time: row.cook_time?.trim() || null,
    servings: row.servings ? parseInt(row.servings, 10) || row.servings : null,
    directions: row.directions?.split(',').map(i => i.trim()) || [],
    rating: row.rating ? parseFloat(row.rating) || row.rating : null,
    url: row.url?.trim() || null,
    nutrition: row.nutrition?.split(',').map(i => i.trim()) || [],
    image: row.img_src?.trim() || null,
  };
};

const importRecipes = async () => {
  await connectDB();
  const db = getDB();
  const recipes = [];

  fs.createReadStream(path.join('data', 'recipes.csv'))
    .pipe(csv())
    .on('data', (row) => {
      const recipe = transformRow(row);
      recipes.push(recipe);
    })
    .on('end', async () => {
      await db.collection('recipe').deleteMany({});
      await db.collection('recipe').insertMany(recipes);
      console.log(`🍲 ${recipes.length} recipes imported successfully`);

      process.exit();
    });
};

importRecipes();