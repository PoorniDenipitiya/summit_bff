"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const authMiddleware = () => {
    return (req, res, next) => {
        // Extract the authorization header
        const authHeader = req.headers['authorization'];
        // Check if authorization header exists
        if (!authHeader) {
            return res.status(401).json({
                message: 'Authorization header is missing',
                error: 'Unauthorized'
            });
        }
        // Split the header and get the token (Bearer token format)
        const parts = authHeader.split(' ');
        if (parts.length !== 2 || parts[0] !== 'Bearer') {
            return res.status(401).json({
                message: 'Invalid authorization header format',
                error: 'Unauthorized'
            });
        }
        const token = parts[1];
        try {
            // Verify the token using the secret from config
            const decoded = jsonwebtoken_1.default.verify(token, config_1.default.JWT_SECRET);
            // Attach the decoded user information to the request
            req.user = decoded;
            // Proceed to the next middleware or route handler
            next();
        }
        catch (err) {
            // Handle different types of JWT verification errors
            if (err instanceof jsonwebtoken_1.default.TokenExpiredError) {
                return res.status(401).json({
                    message: 'Token has expired',
                    error: 'Unauthorized'
                });
            }
            if (err instanceof jsonwebtoken_1.default.JsonWebTokenError) {
                return res.status(401).json({
                    message: 'Invalid token',
                    error: 'Unauthorized'
                });
            }
            // Catch any other unexpected errors
            return res.status(500).json({
                message: 'Authentication error',
                error: 'Internal Server Error'
            });
        }
    };
};
exports.default = authMiddleware();
