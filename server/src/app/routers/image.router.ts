import express from 'express';
const router = express.Router();
import update from '../middlewares/upload';
import imageController from '../controllers/image.controller';

router.post('/', imageController.postImage);
router.post('/admin-create', update.array('images', 4), imageController.postImageNotJson);
router.patch('/admin-update/:id', update.array('images', 4), imageController.updateImageNotJson);
export default router;
