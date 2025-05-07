import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';

const AllRecipeList = () => {
    
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6;
  const API = 'https://recipefinder-01e0.onrender.com'|| 'http://localhost:5000';
  useEffect(() => {
    const fetchRecipes = async () => {
       
      try {
        const res = await axios.get(`${API}/api/recipes?page=${page}&limit=${limit}`);
        setRecipes(res.data.results);
        setTotalPages(res.data.totalPages);
      } catch (err) {
        console.error("Error fetching recipes:", err);
      }
    };

    fetchRecipes();
  }, [page]);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
    <h2 className="text-4xl font-bold align-middle  mb-10 text-orange-500 ">
      Explore All Recipes
    </h2>

    {/* Grid layout: 3 columns x 3 rows for large devices */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </div>

    {/* Pagination */}
    <div className="flex justify-center mt-12 gap-4">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className={`px-5 py-2 rounded-lg font-medium transition 
          ${page === 1
            ? 'bg-gray-300 cursor-not-allowed text-white'
            : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}
      >
        Prev
      </button>
      <span className="text-lg font-medium text-white-400 pt-2">
        Page {page} of {totalPages}
      </span>
      <button
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
        className={`px-5 py-2 rounded-lg font-medium transition 
          ${page === totalPages
            ? 'bg-gray-300 cursor-not-allowed text-white'
            : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}
      >
        Next
      </button>
    </div>
  </div>
);
};

export default AllRecipeList;
