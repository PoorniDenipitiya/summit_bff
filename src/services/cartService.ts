/*import axios from 'axios';
import config from '../config';

export default class CartService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = `${config.BACKEND_URL}/cart`;
  }

  async addToCart(userId: string, productId: number, quantity: number, unitPrice: number) {
    const response = await axios.post(`${this.baseUrl}/add`, {
      userId,
      productId,
      quantity,
      unitPrice
    });
    return response.data;
  }

  async getCart(userId: string) {
    const response = await axios.get(`${this.baseUrl}/${userId}`);
    return response.data;
  }

  async updateCartItem(userId: string, productId: number, quantity: number, unitPrice: number) {
    const response = await axios.put(`${this.baseUrl}/update`, {
      userId,
      productId,
      quantity,
      unitPrice
    });
    return response.data;
  }

  async removeFromCart(userId: string, productId: number) {
    await axios.delete(`${this.baseUrl}/${userId}/${productId}`);
  }
}
  */

//new
/*const axios = require('axios');
const { cartServiceUrl } = require('../config/config');

class CartService {
  async getAllCarts() {
    const response = await axios.get(`${cartServiceUrl}/api/carts`);
    return response.data;
  }

  async getCartById(id) {
    const response = await axios.get(`${cartServiceUrl}/api/carts/${id}`);
    return response.data;
  }

  async createCart(cartData) {
    const response = await axios.post(`${cartServiceUrl}/api/carts`, cartData);
    return response.data;
  }

  async deleteCart(id) {
    await axios.delete(`${cartServiceUrl}/api/carts/${id}`);
  }
}

module.exports = new CartService();
*/


import axios from 'axios';
import config from '../config';
import { CartDTO } from '../dto/CartDTO';

class CartService {
  async getAllCart() {
    try {
      const response = await axios.get(`${config.cartServiceUrl}/cart`);
      return response.data;
    } catch (error: any) {
      console.error(`Error fetching all cart: ${error.message}`);
      throw new Error(error.response?.data || 'Failed to fetch cart');
    }
  }

  async getCartById(id: string) {
    try {
      const response = await axios.get(`${config.cartServiceUrl}/cart/${id}`);
      return response.data;
    } catch (error: any) {
      console.error(`Error fetching cart by ID: ${error.message}`);
      throw new Error(error.response?.data || 'Failed to fetch cart');
    }
  }

  async createCart(cartData: CartDTO) {
    try {
      const response = await axios.post(`${config.cartServiceUrl}/cart`, cartData);
      return response.data;
    } catch (error: any) {
      console.error(`Error creating cart: ${error.message}`);
      throw new Error(error.response?.data || 'Failed to create cart');
    }
  }

  async updateCart(id: string, cartData: CartDTO) {
    try {
      const response = await axios.put(`${config.cartServiceUrl}/cart/${id}`, cartData);
      return response.data;
    } catch (error: any) {
      console.error(`Error updating cart: ${error.message}`);
      throw new Error(error.response?.data || 'Failed to update cart');
    }
  }

  async deleteCart(id: string) {
    try {
      await axios.delete(`${config.productServiceUrl}/products/${id}`);
    } catch (error: any) {
      console.error(`Error deleting cart: ${error.message}`);
      throw new Error(error.response?.data || 'Failed to delete cart');
    }
  }
}

export default new CartService();
