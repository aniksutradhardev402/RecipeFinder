import React from 'react';

const About = () => {
    return (
      <section id="about" className=" mt-20 py-12 px-6  rounded-xl shadow-inner ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">About Our Recipe App</h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            Welcome to our recipe hub! This app is your one-stop destination for discovering, saving,
            and sharing mouth-watering recipes from all over the world. Whether you're a seasoned chef
            or just starting your cooking journey, you'll find recipes that suit your taste, time, and
            ingredients on hand.
          </p>
          <p className="mt-4 text-lg text-white-200 leading-relaxed">
            Use the powerful search and filter features to quickly find what you're craving. Each recipe
            includes clear directions, preparation time, ingredients list, and beautiful images to help
            you cook with confidence. Let's make cooking fun, easy, and delicious!
          </p>
        </div>
      </section>
    );
  };
  
  export default About;