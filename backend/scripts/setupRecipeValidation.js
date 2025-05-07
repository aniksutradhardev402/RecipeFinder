// scripts/setupRecipeValidation.js
import { connectDB, getDB } from '../config/db.js';

const setupRecipeSchema = async () => {
  await connectDB();
  const db = getDB();

  await db.command({
    collMod: 'recipe',
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['name', 'ingredients', 'directions'],
        properties: {
          name: {
            bsonType: 'string',
            description: 'Name is required and must be a string',
          },
          ingredients: {
            bsonType: ['array', 'string'],
            description: 'Ingredients must be an array or a string',
          },
          directions: {
            bsonType: ['array','string'],
            description: 'Instructions are required and must be a string',
          },
          prep_time: {
            bsonType: ['string', 'null'],
          },
          cook_time: {
            bsonType: ['string', 'null'],
          },
          servings: {
            bsonType: ['int', 'string', 'null'],
          },
           rating: {
                bsonType: ['double', 'null'],
            },
          image: {
            bsonType: ['string', 'null'],
          },
        },
      },
    },
    validationLevel: 'moderate',
  });

  console.log('✅ Recipe collection schema validation applied.');
  process.exit();
};

setupRecipeSchema();