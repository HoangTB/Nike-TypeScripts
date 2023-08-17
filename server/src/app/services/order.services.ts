import { Request, Response } from 'express';
import Order from '../models/order.model';
import { IOrder } from '../../types/Type';

class orderService {
  postOrder = async (data: IOrder, res: Response) => {
    try {
      const existingOrder = await Order.findOne({ where: { user_id: data.user_id } });
      if (!existingOrder) {
        const orderValue = await Order.bulkCreate([data] as any);
        res.status(200).json({ message: 'Post successfully', orderValue });
      }
    } catch (err) {
      res.status(500).json({ message: 'Failed to create Order', err });
    }
  };

  getOrder = async (req: Request, res: Response) => {
    try {
      const order = await Order.findAll();

      res.status(200).json(order);
    } catch (err) {
      res.status(500).json({ message: 'Error Get Product', err });
    }
  };

  getOrderById = async (id: number, res: Response) => {
    try {
      const order = await Order.findAll({
        where: { user_id: id },
      });

      res.status(200).json(order);
    } catch (err) {
      res.status(500).json({ message: 'Error Get Product', err });
    }
  };
}

export default new orderService();
