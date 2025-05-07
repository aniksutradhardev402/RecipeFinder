import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'


const Header = ({ darkMode, toggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
<header className={`${darkMode ? 'bg-gray-800' : 'bg-green-600'} shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          <Link to="/" className="flex-shrink-0">
              <img className="h-12 w-12 rounded-full border-2 border-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl" src={logo} alt="Recipe Finder Logo" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out hover:text-lg hover:shadow-text">Home</Link>
                <Link to="/recipes" className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out hover:text-lg hover:shadow-text">Recipes</Link>
                <a href='#about' className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out hover:text-lg hover:shadow-text">About</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <h1 className="text-white text-xl font-bold">Recipe Finder</h1>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ease-in-out hover:text-lg hover:shadow-text">Home</Link>
            <Link to="/recipes" className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ease-in-out hover:text-lg hover:shadow-text">Recipes</Link>
            <Link to="/about" className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ease-in-out hover:text-lg hover:shadow-text">About</Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
