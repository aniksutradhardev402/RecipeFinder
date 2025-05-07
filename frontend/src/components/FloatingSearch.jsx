import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FloatingSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchRecipes = async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:5000/api/recipes/search?q=${query}`);
        setResults(response.data.results.slice(0, 3));
      } catch (error) {
        console.error('Search error:', error);
      }
    };

    const debounce = setTimeout(fetchRecipes, 300);
    return () => clearTimeout(debounce);
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && results.length > 0) {
      navigate(`/recipes/${results[0]._id}`);
    }
  };

  // Handle button click
  const handleSearchClick = () => {
    if (results.length > 0) {
      navigate(`/recipes/${results[0]._id}`);
    }
  };
  return (
    <div className="  flex flex-col align-center  items-center justify-center z-50 p-4">
    {/* Title */}
    <h1 className="  text-4xl font-bold text-orange-600 mb-6">Search Recipes</h1>

    {/* Search Box */}
    <input

      type="text"
      placeholder="Type recipe name..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={handleKeyDown}
      className="  max-w-xl px-6 py-4 text-xl border-2 border-orange-500 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-orange-300 mb-4"
    />
   <button
          onClick={handleSearchClick}
          className=" px-4 py-2 bg-orange-500 text-white  hover:bg-orange-400 transition-all cursor-pointer rounded-lg shadow-md"
          disabled={results.length === 0}
        >
          Search
        </button>
     
    {/* Matching Recipe Names */}
    {results.length > 0 && (
      <div className="w-full max-w-xl max-h-64 overflow-y-auto hide-scrollbar bg-orange-50 border border-orange-300 rounded-lg shadow-md">
        {results.map((recipe) => (
          <div
            key={recipe.id}
            className="px-6 py-3 text-lg text-gray-800 hover:bg-orange-100 cursor-pointer"
             onClick={() => navigate(`/recipes/${recipe._id}`)}
          >
            {recipe.name}
          </div>
        ))}
      </div>
    )}
  </div>
);
};


export default FloatingSearch;
