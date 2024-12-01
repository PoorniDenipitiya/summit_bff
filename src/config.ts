import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 3001,
  //BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:8080/api',
  productServiceUrl: process.env.PRODUCT_SERVICE_URL || 'http://localhost:8082/api',
  cartServiceUrl: process.env.CART_SERVICE_URL || 'http://localhost:8083/api',
  categoryServiceUrl: process.env.CATEGORY_SERVICE_URL || 'http://localhost:8084/api',
  userServiceUrl: process.env.USER_SERVICE_URL || 'http://localhost:8081/api',

  COGNITO_USER_POOL_ID: process.env.COGNITO_USER_POOL_ID || '',
  COGNITO_CLIENT_ID: process.env.COGNITO_CLIENT_ID || '',
  JWT_SECRET: process.env.JWT_SECRET || "your-secret-key",
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || "1h",
};