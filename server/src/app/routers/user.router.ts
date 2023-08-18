import express from 'express';
const router = express.Router();

import userController from '../controllers/user.controller';
import checkAuthentication from '../middlewares/checkAuth';
import checkRole from '../middlewares/checkRole';
router.get('/', userController.getUser);
router.get('/:id', userController.getUserId);
router.get('/order/:id', userController.getUserIdOrder);
router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.post('/refresh-token', userController.refreshToken);
router.post('/logout', checkAuthentication, userController.logout);
router.patch('/update-user/:id', userController.updateUser);
router.patch('/update-status/:id', userController.updateStatusByAdmin);
router.patch('/update-role/:id', userController.updateRoleByAdmin);

export default router;
