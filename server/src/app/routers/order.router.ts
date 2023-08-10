import express from 'express';
const router = express.Router();

import orderController from '../controllers/order.controller';

router.post('/', orderController.postOrder);
router.get('/', orderController.getOrder);
router.get('/:id', orderController.getOrderById);

export default router;
