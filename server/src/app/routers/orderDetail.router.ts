import express from 'express';
const router = express.Router();

import orderDetailController from '../controllers/orderDetail.controller';

router.get('/:id', orderDetailController.getOrderDetailById);
router.post('/', orderDetailController.postOrderDetail);
router.patch('/quantity/:id', orderDetailController.updateOrderDetailQuantity);
router.patch('/update/:id', orderDetailController.updateOrderDetailById);
router.delete('/delete/:id', orderDetailController.deleteOrderDetail);
router.delete('/delete-history/:id', orderDetailController.deleteOrderDetailByHistory);
export default router;
