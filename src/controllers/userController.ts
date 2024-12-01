/*import { Request, Response } from 'express';
import { createOrUpdateUser } from '../services/userService';

const axios = require('axios');

exports.getAllUsers = async(req: Request, res: Response) => {
    try{
        const response = await axios.get('${}');
        res.json(response.data);
    }catch(error){
        res.status(error.response?.status||500).send(error.message);


    }
    
};

exports.getUserById = async (req: Request, res: Response) => {
    try {
        const response = await axios.get(`${USER_SERVICE_BASE_URL}/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).send(error.message);
    }
};

export const saveUser = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const { sub: cognitoId, email } = req.user; 
    const user = await createOrUpdateUser(cognitoId, email, name);
    res.status(200).json(user);
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'An error occurred while saving user data' });
  }
};
*/