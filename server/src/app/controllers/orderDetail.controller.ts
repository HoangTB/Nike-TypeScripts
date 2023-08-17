import { Request, Response } from 'express';
import orderDetailServices from '../services/orderDetail.services';
import { IOrderDetails, IUpdateOrderDetailById, IUpdateOrderDetailQuantity } from '../../types/Type';

class orderDetailService {
  getOrderDetailById = (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    orderDetailServices.getOrderDetailById(id, res);
  };
  postOrderDetail = (req: Request, res: Response) => {
    const data: IOrderDetails = req.body;
    orderDetailServices.postOrderDetail(data, res);
  };
  updateOrderDetailById = (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    const data: IUpdateOrderDetailById = req.body;
    orderDetailServices.updateOrderDetailById(id, data, res);
  };

  updateOrderDetailQuantity = (req: Request, res: Response) => {
    const data: IUpdateOrderDetailQuantity = req.body;
    const id: number = Number(req.params.id);
    orderDetailServices.updateOrderDetailQuantity(id, data, res);
  };

  deleteOrderDetail = (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    orderDetailServices.deleteOrderDetail(id, res);
  };

  deleteOrderDetailByHistory = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    orderDetailServices.deleteOrderDetailByHistory(id, res);
  };
}

export default new orderDetailService();
