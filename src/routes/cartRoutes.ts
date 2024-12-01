/*import express from 'express';
import { CartController } from '../controllers/cartController';
//import { authMiddleware } from '../middlewares/auth'; 

const router = express.Router();
const cartController = new CartController();

//router.use(authMiddleware);

router.post('/add', cartController.addToCart);
router.get('/current', cartController.getCart);
router.put('/update', cartController.updateCartItem);
router.delete('/:productId', cartController.removeFromCart);

export default router;
*/

import express from 'express';
import axios from 'axios';
import config from '../config';
import bodyParser from 'body-parser';

const router = express.Router();
const SPRING_BOOT_URL = 'http://localhost:8083/api/cart';

// Middleware
router.use(bodyParser.json());

// Routes
router.post('/', async (req, res) => {
  console.log('Incoming cart data:', req.body); // Add logging
  try {
    const response = await axios.post(SPRING_BOOT_URL, req.body);
    res.status(200).json(response.data);
  } catch (error: any) {
    console.error('Error forwarding data:', error);
    res.status(500).json({ error: error.response?.data || 'Failed to save data',
      details: error.message 
     });
  }
});

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(SPRING_BOOT_URL);
    res.status(200).send(response.data);
  } catch (error: any) {
    console.error('Error retrieving data:', error);
    res.status(500).json({ error: error.response?.data || 'Failed to retrieve data' });
  }
});

export default router;
