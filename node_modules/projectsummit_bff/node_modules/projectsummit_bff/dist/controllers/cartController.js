"use strict";
/*import { Request, Response } from 'express';
import CartService from '../services/cartService';

export class CartController {
  private cartService: CartService;

  constructor() {
    this.cartService = new CartService();
  }

  async addToCart = async (req: Request, res: Response) => {
    try {
      const userId = req.user?.id; // Assuming user info is attached by auth middleware
      const { productId, quantity } = req.body;
      
      const result = await this.cartService.addToCart(userId, productId, quantity);
      res.status(200).json(result);
    } catch (error) {
      console.error('Error adding to cart:', error);
      res.status(500).json({ message: 'Failed to add item to cart' });
    }
  };

  async getCart = async (req: Request, res: Response) => {
    try {
      const userId = req.user?.id;
      const cart = await this.cartService.getCart(userId);
      res.status(200).json(cart);
    } catch (error) {
      console.error('Error fetching cart:', error);
      res.status(500).json({ message: 'Failed to fetch cart' });
    }
  };

  async updateCartItem = async (req: Request, res: Response) => {
    try {
      const userId = req.user?.id;
      const { productId, quantity } = req.body;
      
      const result = await this.cartService.updateCartItem(userId, productId, quantity);
      res.status(200).json(result);
    } catch (error) {
      console.error('Error updating cart item:', error);
      res.status(500).json({ message: 'Failed to update cart item' });
    }
  };

  async removeFromCart = async (req: Request, res: Response) => {
    try {
      const userId = req.user?.id;
      const { productId } = req.params;
      
      await this.cartService.removeFromCart(userId, parseInt(productId));
      res.status(200).json({ message: 'Item removed from cart' });
    } catch (error) {
      console.error('Error removing from cart:', error);
      res.status(500).json({ message: 'Failed to remove item from cart' });
    }
  };
}
  */ 
