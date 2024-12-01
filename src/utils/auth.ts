import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

const validateToken = (token: string): any => {
  try {
    return jwt.verify(token, config.JWT_SECRET);
  } catch (err) {
    throw err;
  }
};

const authMiddleware = (): (req: Request, res: Response, next: NextFunction) => void => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
      res.status(401).json({ 
        message: 'Authorization header is missing' 
      });
      return; // Ensure the middleware ends here
    }

    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      res.status(401).json({ 
        message: 'Invalid authorization header format'
      });
      return;
    }

    
    const token = parts[1];
    try {
      const decoded = jwt.verify(token, config.JWT_SECRET);
      (req as any).user = decoded; // Attach decoded data to the request
      next(); // Call next middleware
    } catch (err) {
      if (err instanceof jwt.TokenExpiredError) {
        res.status(401).json({ 
          message: 'Token has expired', 
          error: 'Unauthorized' 
        });
      } else if (err instanceof jwt.JsonWebTokenError) {
        res.status(401).json({ 
          message: 'Invalid token', 
          error: 'Unauthorized' 
        });
      } else {
        res.status(500).json({ 
          message: 'Authentication error', 
          error: 'Internal Server Error' 
        });
      }
    }
  };
};

export default authMiddleware;
