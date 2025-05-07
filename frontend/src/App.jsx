import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link ,Routes, Route } from 'react-router-dom'
import AllRecipeList from './components/AllRecipeList'
import RecipeDetails from './pages/RecipeDetails'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'

function App() {
 
  return (
    
  
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">

        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<AllRecipeList />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
      </div>
    
    
  )
}

export default App
