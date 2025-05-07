import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => (
    <Link to={`/recipes/${recipe._id}`}>
    <div className="w-72 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 p-4">
      <img
        loading="lazy"
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-1 truncate">{recipe.name}</h2>
      <p className="text-sm text-gray-700 mb-2"> {recipe.rating}
        <span className="text-yellow-500"> ⭐</span> | {`${recipe.prep_time || 5 }`} min


      </p>
      <p className="text-sm text-gray-500 text-right">View Details →</p>
    </div>
  </Link>


);

export default RecipeCard;