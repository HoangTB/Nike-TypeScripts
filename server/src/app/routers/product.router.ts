import express from 'express';
import upload from '../middlewares/upload';
const router = express.Router();
import productController from '../controllers/product.controller';

router.get('/', productController.getProduct);
router.get('/last', productController.getProductLast);
router.get('/:id', productController.getProductById);
router.get('/order-orderDetail/:id', productController.getProductMergerId);
router.post('/create', productController.postProduct);
router.post('/admin-create', upload.single('image'), productController.postProductNotJson);
router.delete('/delete/:id', productController.deleteProductById);
router.patch('/update/:id', productController.updateProductById);
router.patch('/admin-update/:id', upload.single('image'), productController.updateProductNotJson);

export default router;
