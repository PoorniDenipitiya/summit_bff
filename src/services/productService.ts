import axios from 'axios';
import config from '../config';
import { ProductDTO } from '../dto/ProductDTO';

class ProductService {
  async getAllProducts() {
    try {
      const response = await axios.get(`${config.productServiceUrl}/products`);
      return response.data;
    } catch (error: any) {
      console.error(`Error fetching all products: ${error.message}`);
      throw new Error(error.response?.data || 'Failed to fetch products');
    }
  }

  async getProductById(id: string) {
    try {
      const response = await axios.get(`${config.productServiceUrl}/products/${id}`);
      return response.data;
    } catch (error: any) {
      console.error(`Error fetching product by ID: ${error.message}`);
      throw new Error(error.response?.data || 'Failed to fetch product');
    }
  }

  async createProduct(productData: ProductDTO) {
    try {
      const response = await axios.post(`${config.productServiceUrl}/products`, productData);
      return response.data;
    } catch (error: any) {
      console.error(`Error creating product: ${error.message}`);
      throw new Error(error.response?.data || 'Failed to create product');
    }
  }

  async updateProduct(id: string, productData: ProductDTO) {
    try {
      const response = await axios.put(`${config.productServiceUrl}/products/${id}`, productData);
      return response.data;
    } catch (error: any) {
      console.error(`Error updating product: ${error.message}`);
      throw new Error(error.response?.data || 'Failed to update product');
    }
  }

  async deleteProduct(id: string) {
    try {
      await axios.delete(`${config.productServiceUrl}/products/${id}`);
    } catch (error: any) {
      console.error(`Error deleting product: ${error.message}`);
      throw new Error(error.response?.data || 'Failed to delete product');
    }
  }
}

export default new ProductService();
