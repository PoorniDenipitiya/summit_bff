/*import { Request, Response, NextFunction } from 'express';
import { CognitoJwtVerifier } from "aws-jwt-verify";
import config from '../config';

// Extend the Request interface to include the user property
declare global {
  namespace Express {
    interface Request {
      user?: any; 
    }
  }
}

// Ensure that COGNITO_USER_POOL_ID and COGNITO_CLIENT_ID are always strings
const userPoolId = config.COGNITO_USER_POOL_ID || '';
const clientId = config.COGNITO_CLIENT_ID || '';

const verifier = CognitoJwtVerifier.create({
  userPoolId: userPoolId,
  tokenUse: "access",
  clientId: clientId
});

export const verifyToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    res.status(401).json({ error: 'No token provided' });
    return;
  }

  try {
    const payload = await verifier.verify(token, {});
    req.user = payload;
    next();
  } catch (error) {
    console.error('Token verification failed:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
};
*/