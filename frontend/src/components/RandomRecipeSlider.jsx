import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchRandomRecipes } from '../../services/api.js';
import '../styles/scrollbar.css'

  


   

    const RandomRecipeSlider = () => {
  const [recipes, setRecipes] = useState([]);

    useEffect(() => {
    const loadRecipes = async () => {
      const data = await fetchRandomRecipes();
      setRecipes(data);
    };

    loadRecipes();
  }, []);
    return (
        <div className="my-12 px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-orange-600 drop-shadow-lg">
              🍽️ Today’s Random Recipes
            </h2>
          </div>
    
          <div className="flex overflow-x-auto gap-6 p-6 bg-orange-50 rounded-xl shadow-lg ">
            {recipes.map((recipe) => (
                <Link to={`/recipes/${recipe._id}`} key={recipe._id}>
              <div
                key={recipe.id}
                className="flex-none w-72 bg-white rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 p-4"
              >
                <img
                  loading="lazy"
                  key={recipe.id}
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3  key={recipe.id} className="text-xl font-bold text-gray-900">{recipe.name}</h3>
                <p  key={recipe.id} className="text-gray-700 text-sm mt-1">{recipe.description}</p>
              </div>
              </Link>
            ))}
          </div>
        </div>
      );
    };
  
  export default RandomRecipeSlider;
  
