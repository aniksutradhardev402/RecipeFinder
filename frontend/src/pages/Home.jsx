import React from 'react'
import Header from '../components/Header'
import RandomRecipeSlider from '../components/RandomRecipeSlider'
import FloatingSearch from '../components/FloatingSearch'
import About from '../pages/About'
import { Router, Route ,Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <Header />

      <RandomRecipeSlider />
       <FloatingSearch />
         <About />  
           
           </div>
  )
}

export default Home
