import { HistoryType } from '../../types/Type';
import historyServices from '../services/history.services';
import { Request, Response } from 'express';
class historyController {
  postHistory = async (req: Request, res: Response) => {
    const data: HistoryType = req.body;
    historyServices.postHistory(data, res);
  };

  getAllHistoryByIdOrder = async (req: Request, res: Response) => {
    historyServices.getAllHistoryByIdOrder(req, res);
  };

  getHistoryByIdOrder = async (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    historyServices.getHistoryByIdOrder(id, res);
  };

  getHistoryWithMonth = async (req: Request, res: Response) => {
    historyServices.getHistoryWithMonth(req, res);
  };

  updateHistoryStatus = async (req: Request, res: Response) => {
    const data: HistoryType = req.body;
    const id: number = Number(req.params.id);
    historyServices.updateHistoryStatus(id, data, res);
  };
}
export default new historyController();
