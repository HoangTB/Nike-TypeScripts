import { Response } from 'express';
import OrderDetail from '../models/orderDetail.model';
import { IOrderDetails, IUpdateOrderDetailById, IUpdateOrderDetailQuantity } from '../../types/Type';

class OrderDetailService {
  getOrderDetailById = async (id: number, res: Response) => {
    try {
      const orderDetail = await OrderDetail.findAll({
        where: { order_id: id },
      });

      res.status(200).json(orderDetail);
    } catch (err) {
      res.status(500).json({ message: 'Error Get OrderDetail', err });
    }
  };

  postOrderDetail = async (data: IOrderDetails, res: Response) => {
    try {
      const orderDetailValue = await OrderDetail.bulkCreate([data] as any);
      res.status(200).json({ message: 'Post successfully', orderDetailValue });
    } catch (err) {
      res.status(500).json({ message: 'Failed to create OrderDetail ', err });
    }
  };

  updateOrderDetailById = async (id: number, data: IUpdateOrderDetailById, res: Response) => {
    try {
      const orderDetailUpdate = await OrderDetail.update(data, {
        where: {
          product_id: Number(id),
        },
      });
      res.status(200).json({ message: 'Update successfully !', orderDetailUpdate });
    } catch (err) {
      res.status(500).json({ message: 'Error Update OrderDetail', err });
    }
  };

  updateOrderDetailQuantity = async (id: number, data: IUpdateOrderDetailQuantity, res: Response) => {
    try {
      const productCheckId = await OrderDetail.update(data, { where: { product_id: Number(id) } });

      res.status(200).json({ message: 'Update quantity successfully completed', productCheckId });
    } catch (err) {
      res.status(500).json({ message: 'Error Update quantity' });
    }
  };

  deleteOrderDetail = async (id: number, res: Response) => {
    try {
      const orderDetail: any = await OrderDetail.destroy({
        where: {
          product_id: id,
        },
      });
      res.status(200).json({ message: 'Delete successfully', orderDetail });
    } catch (err) {
      res.status(500).json({ message: 'Error Delete OrderDetail', err });
    }
  };

  deleteOrderDetailByHistory = async (id: number, res: Response) => {
    try {
      const orderDetail: any = await OrderDetail.destroy({
        where: {
          order_id: id,
        },
      });
      res.status(200).json({ message: 'Delete successfully', orderDetail });
    } catch (err) {
      res.status(500).json({ message: 'Error Delete OrderDetail', err });
    }
  };
}

export default new OrderDetailService();
