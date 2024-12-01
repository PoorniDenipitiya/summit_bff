"use strict";
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
