import express from 'express';

const router = express.Router();
import historyController from '../controllers/history.controller';
router.post('/', historyController.postHistory);
router.get('/get-orderID', historyController.getAllHistoryByIdOrder);
router.get('/get-orderID/:id', historyController.getHistoryByIdOrder);
router.post('/get-month', historyController.getHistoryWithMonth);
router.patch('/update/:id', historyController.updateHistoryStatus);

export default router;
