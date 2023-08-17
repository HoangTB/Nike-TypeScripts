import { Request, Response } from 'express';
import orderServices from '../services/order.services';
import { IOrder } from '../../types/Type';

class orderController {
  postOrder = (req: Request, res: Response) => {
    const data: IOrder = req.body;
    orderServices.postOrder(data, res);
  };
  getOrder = (req: Request, res: Response) => {
    orderServices.getOrder(req, res);
  };
  getOrderById = (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    orderServices.getOrderById(id, res);
  };
}

export default new orderController();
