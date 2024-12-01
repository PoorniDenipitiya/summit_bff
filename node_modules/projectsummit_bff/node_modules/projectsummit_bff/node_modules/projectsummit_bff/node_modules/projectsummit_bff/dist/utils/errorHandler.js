"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    // Differentiate between different types of errors
    if (err instanceof Error) {
        res.status(500).json({
            error: err.message,
            stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
        });
    }
    else {
        res.status(500).json({ error: 'An unknown error occurred' });
    }
};
exports.default = errorHandler;
