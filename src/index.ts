import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
//import axios from 'axios';
//import userRoutes from './routes/authRoutes';
//import cartRoutes from './routes/cartRoutes';
import productRoutes from './routes/productRoutes';
import errorHandler from './utils/errorHandler';


const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
//app.use('/api/users', userRoute);
//app.use('/api/cart', cartRoutes);
//app.use('/api/product', productRoutes);
app.use('/products', productRoutes);

// Error handling middleware
app.use(errorHandler);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`BFF server running on port ${PORT}`);
});

export default app;