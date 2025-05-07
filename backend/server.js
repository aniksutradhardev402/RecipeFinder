import recipeRoutes from './routes/recipeRoutes.js';
import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './config/db.js';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
// Middleware
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use('/api/recipes', recipeRoutes);

app.get('/', (req, res) => {
  res.send('🍽️ Recipe API is running');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});