/*import { Request, Response } from 'express';

const productService = require('../services/productService');

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (err) {
    next(err);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const product = await productService.getProductById(req.params.id);
    res.json(product);
  } catch (err) {
    next(err);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
};

exports.updateProduct = async(req,res,next)=>{
  try {
    const { id } = req.params;  // Get the product ID from URL
    const productData = req.body;  // Get updated product data from request body

    // Call the service function to update the product
    const updatedProduct = await productService.updateProduct(id, productData);

    if (updatedProduct) {
        res.status(200).json(updatedProduct);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
} catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'An error occurred while updating the product' });
}
};

exports.deleteProduct = async (req, res, next) => {
  try {
    await productService.deleteProduct(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

*/

import { Request, Response, NextFunction } from 'express';
import { ProductDTO } from '../dto/ProductDTO';
import productService from '../services/productService';

export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (err) {
    next(err);
  }
};

export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await productService.getProductById(req.params.id);
    res.json(product);
  } catch (err) {
    next(err);
  }
};

export const createProduct: (req: Request, res: Response, next: NextFunction) => Promise<void> = async (req, res, next) => {
  try {
    const newProduct: ProductDTO = req.body;
    const createdProduct = await productService.createProduct(newProduct);
    res.status(201).json({ message: 'Product created successfully', data: createdProduct });
  } catch (err) {
    next(err); // Pass error to the error handler
  }
};

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const productId = req.params.id;
    const updatedProductData: ProductDTO = req.body;
    const updatedProduct = await productService.updateProduct(productId, updatedProductData);
    res.json(updatedProduct);
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await productService.deleteProduct(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};