import express from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
} from '../controllers/ProductsController';

const router = express.Router();
router.get('/', getAllProducts);
router.get('/:productId', getProductById);
router.post('/', createProduct);

export default router;
