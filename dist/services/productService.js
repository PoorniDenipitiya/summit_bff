"use strict";
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
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../config"));
class ProductService {
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(`${config_1.default.productServiceUrl}/products`);
            return response.data;
        });
    }
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(`${config_1.default.productServiceUrl}/products/${id}`);
            return response.data;
        });
    }
    createProduct(productData) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Sending product data:', productData);
            const response = yield axios_1.default.post(`${config_1.default.productServiceUrl}/products`, productData);
            return response.data;
        });
    }
    updateProduct(id, productData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.put(`${config_1.default.productServiceUrl}/products/${id}`, productData);
                return response.data;
            }
            catch (error) {
                console.error(`Error in productService.updateProduct: ${error.message}`);
                throw error;
            }
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield axios_1.default.delete(`${config_1.default.productServiceUrl}/products/${id}`);
        });
    }
}
exports.default = new ProductService();
