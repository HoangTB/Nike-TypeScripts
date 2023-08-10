import { Request, Response } from 'express';
import userServices from '../services/user.services';

class userController {
  getUser = (req: Request, res: Response) => {
    userServices.getUser(req, res);
  };

  getUserId = (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    userServices.getUserId(id, res);
  };

  createUser = (req: Request, res: Response) => {
    const data = req.body;
    userServices.createUser(data, res);
  };

  loginUser = (req: Request, res: Response) => {
    const data = req.body;
    userServices.loginUser(data, res);
  };

  updateUser = (req: Request, res: Response) => {
    const data = req.body;
    const id: number = Number(req.params.id);
    userServices.updateUser(data, id, res);
  };

  updateStatusByAdmin = (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    userServices.updateStatusByAdmin(id, res);
  };

  updateRoleByAdmin = (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    userServices.updateRoleByAdmin(id, res);
  };
}
export default new userController();
