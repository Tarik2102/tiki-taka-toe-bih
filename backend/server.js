import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import roomRoutes from './routes/roomRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes 
app.use('/api/rooms', roomRoutes);
 
app.get('/', (req, res) => {
  res.send('Backend is runnindssaddasg 🚀');
});

// Connect to DB and start server
connectDB();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
 