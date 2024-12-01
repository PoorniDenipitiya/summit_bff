"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getAllProducts = void 0;
const productService_1 = __importDefault(require("../services/productService"));
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productService_1.default.getAllProducts();
        res.json(products);
    }
    catch (err) {
        next(err);
    }
});
exports.getAllProducts = getAllProducts;
const getProductById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield productService_1.default.getProductById(req.params.id);
        res.json(product);
    }
    catch (err) {
        next(err);
    }
});
exports.getProductById = getProductById;
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProduct = req.body;
        const createdProduct = yield productService_1.default.createProduct(newProduct);
        res.status(201).json(createdProduct);
    }
    catch (err) {
        next(err);
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.id;
        const updatedProductData = req.body;
        const updatedProduct = yield productService_1.default.updateProduct(productId, updatedProductData);
        res.json(updatedProduct);
    }
    catch (err) {
        next(err);
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield productService_1.default.deleteProduct(req.params.id);
        res.status(204).send();
    }
    catch (err) {
        next(err);
    }
});
exports.deleteProduct = deleteProduct;
