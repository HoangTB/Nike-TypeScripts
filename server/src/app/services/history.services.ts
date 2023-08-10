import History from '../models/history.model';
import Product from '../models/product.model';
import Order from '../models/order.model';
import sendRegistrationEmail from '../utils/mailer';
import { Op } from 'sequelize';
import { Request, Response } from 'express';
import { HistoryType } from '../../types/Type';

class historyService {
  postHistory = async (data: any, res: Response) => {
    try {
      const historyValue = await History.bulkCreate([data]);
      await sendRegistrationEmail(data);
      res.status(200).json({ message: 'Post History successfully', historyValue });
    } catch (err) {
      res.status(500).json({ message: 'Error creating History', err });
    }
  };

  getAllHistoryByIdOrder = async (req: Request, res: Response) => {
    try {
      const result = await History.findAll({
        include: [
          {
            model: Product,
          },
          {
            model: Order,
          },
        ],
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ message: 'Error', error: err });
    }
  };

  getHistoryByIdOrder = async (id: number, res: Response) => {
    try {
      const result = await History.findAll({
        attributes: [
          'order_id',
          'quantity',
          'size_product',
          'email',
          'address',
          'phone',
          'status',
          'order_date',
          'product_id',
        ],
        include: [
          {
            model: Product,
            attributes: ['name', 'type', 'image', 'price'],
          },
        ],
        where: {
          order_id: id,
        },
      });

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ message: 'Error', error: err });
    }
  };

  getHistoryWithMonth = async (req: Request, res: Response) => {
    const { dataMonth } = req.body;
    try {
      const result = await History.findAll({
        include: [
          {
            model: Product,
          },
          {
            model: Order,
          },
        ],
        where: {
          status: 4,
          order_date: {
            [Op.gte]: new Date(`2023-${dataMonth}-01T00:00:00.000Z`),
            [Op.lt]: new Date(`2023-${dataMonth}-01T00:00:00.000Z`).setMonth(dataMonth),
          },
        },
      });
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Error', error: err });
    }
  };

  updateHistoryStatus = async (id: number, data: HistoryType, res: Response) => {
    try {
      const result = await History.update(data, {
        where: {
          id: id,
        },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ message: 'Error Update History', err });
    }
  };
}
export default new historyService();
