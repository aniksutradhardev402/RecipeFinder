# 🍽️ Recipe Finder

![Logo](https://github.com/user-attachments/assets/79bb4dc1-40eb-4ca6-989a-fa0ec1900ba7)


 web app to discover, search, and explore recipes , responsive UI powered by React, Vite, and Tailwind CSS. The backend is powered by Express and MongoDB.

🔗 **Live Demo:** [recipe-finder.vercel.app](https://recipe-finder-7t3tcmbix-aniksutradhars-projects.vercel.app/)

---

## ✨ Features

- 🔍 **Search Recipes** by name with instant suggestions.
- 🎲 **Random Recipe Slider** on the homepage.
- 📋 **All Recipes Page** with paginated grid layout.
- 📖 **Recipe Details** with ingredients, directions, and nutrition facts.
- 📈 **Nutrition Breakdown** with circular progress bars.
- 📱 **Responsive Design** for all screen sizes.
- 🔁 **Smooth Scrolling Navigation** (About section).
- 🌐 **Deployed** on Vercel (Frontend) and Render (Backend).

---

## 🖼️ Preview

![Screenshot]
---
![ss1](https://github.com/user-attachments/assets/53c0d0c6-38ed-4ec9-9efd-0201db8807d8)
![ss2](https://github.com/user-attachments/assets/48049b09-1c5a-4879-bd48-de500ba52a4d)


## 🛠️ Tech Stack

### Frontend

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)

### Backend

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB + Mongoose](https://mongoosejs.com/)
- [Render](https://render.com/)

---

## 📦 Folder Structure (Frontend)

```
recipe-finder/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── RandomRecipeSlider.jsx
│   │   ├── RecipeCard.jsx
│   │   └── SearchBar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AllRecipes.jsx
│   │   ├── RecipeDetails.jsx
│   ├── App.jsx
│   └── main.jsx
├── .env
├── vite.config.js
└── tailwind.config.js
```

---

## 🚀 Getting Started Locally

### 1. Clone the Repository

```bash
git clone https://github.com/aniksutradhar/recipe-finder.git
cd recipe-finder
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file:

```env
VITE_API_URL=https://your-backend-url.onrender.com
```

### 4. Run the App

```bash
npm run dev
```

---

## 🌍 Deployment

### Frontend (Vercel)

1. Push your project to GitHub.
2. Go to [Vercel](https://vercel.com).
3. Import the GitHub repo.
4. Add the environment variable:  
   `VITE_API_URL=https://your-render-backend-url`
5. Deploy!

### Backend (Render)

1. Push your Express API to a separate GitHub repo.
2. Go to [Render](https://render.com).
3. Create a new Web Service.
4. Set `PORT=5000` and your `MONGO_URI`.
5. Deploy!

---

## 🧑‍💻 Author

**Anik Sutradhar**  
[LinkedIn](https://linkedin.com/in/aniksutradhar) • [GitHub](https://github.com/aniksutradhar)

---

## 📜 License

This project is licensed under the MIT License.
