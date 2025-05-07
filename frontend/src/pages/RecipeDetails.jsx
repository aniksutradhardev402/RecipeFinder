import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CircularProgress from '../components/CircularProgress';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const RecipeDetails = () => {
    const API = import.meta.env.VITE_API_URL;

  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(`${API}/api/recipes/${id}`);
        setRecipe(res.data);
      } catch (err) {
        console.error("Failed to fetch recipe:", err);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10 text-gray-500">Loading recipe...</div>;
  }

  return (
  
    
    <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Back Button */}
        
     <button
        onClick={() => navigate('/')}
        className="mb-4 px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-600 transition-all"
      >
        ← Back to Home
      </button>
   

      {/* Your existing recipe details rendering */}
      {/* Cover Image */}
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-72 object-cover rounded-lg shadow-lg mb-6"
        />
      )}

      {/* Title */}
      <h1 className="text-4xl font-bold text-orange-500 mb-4">{recipe.name}</h1>

      {/* Ingredients */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-white-800">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1 text-white-700">
          {recipe.ingredients?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Directions */}
      <section className="mb-6">
  <h2 className="text-2xl font-semibold mb-2 text-white-400">Directions</h2>
  <p className="text-white-400 leading-relaxed space-y-2">
    {recipe.directions?.map((step, index) => (
      <span key={index}>
        {step}
        {index < recipe.directions.length - 1 && ' '}
      </span>
    ))}
  </p>
</section>

      {recipe.nutrition && (
  <section>
    <h2 className="text-2xl font-semibold mb-2 text-white-500">Nutrition</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {recipe.nutrition.map((item, index) => {
        // item example: "Saturated Fat 4g 20%"
        const parts = item.split(/\s+/);
        const label = parts.slice(0, -1).join(' '); // all but last word
        const value = parts[parts.length - 1]; // last word
        const isPercentage = value.includes('%');
        const percentage = isPercentage
          ? parseInt(value.replace('%', ''), 10)
          : null;

        return (
          <div key={index} className="flex items-center bg-white p-4 rounded shadow">
            {isPercentage && <CircularProgress percentage={percentage} />}
            <div>
              <p className="font-semibold text-gray-800">{label}</p>
              {!isPercentage && (
                <p className="text-gray-600 text-sm">{value}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </section>

      )}
    </div>
    
  );
};

export default RecipeDetails;
