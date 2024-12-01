"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
//import axios from 'axios';
//import userRoutes from './routes/authRoutes';
//import cartRoutes from './routes/cartRoutes';
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const errorHandler_1 = __importDefault(require("./utils/errorHandler"));
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
// Routes
//app.use('/api/users', userRoute);
//app.use('/api/cart', cartRoutes);
app.use('/api/product', productRoutes_1.default);
// Error handling middleware
app.use(errorHandler_1.default);
// 404 handler
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`BFF server running on port ${PORT}`);
});
exports.default = app;
