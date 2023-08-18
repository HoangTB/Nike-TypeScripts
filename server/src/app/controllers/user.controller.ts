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
  getUserIdOrder = (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    userServices.getUserIdOrder(id, res);
  };
  createUser = (req: Request, res: Response) => {
    const data = req.body;
    userServices.createUser(data, res);
  };

  loginUser = (req: Request, res: Response) => {
    const data = req.body;
    userServices.loginUser(data, res);
  };
  refreshToken = (req: Request, res: Response) => {
    userServices.refreshToken(req, res);
  };

  logout = (req: Request, res: Response) => {
    userServices.logout(req, res);
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
