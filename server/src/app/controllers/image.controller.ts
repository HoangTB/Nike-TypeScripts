import { ImageType } from '../../types/Type';
import imageServices from '../services/image.services';
import { Request, Response } from 'express';
class imageController {
  postImage = (req: Request, res: Response) => {
    const data: ImageType = req.body;
    imageServices.postImage(data, res);
  };

  postImageNotJson = (req: Request, res: Response) => {
    imageServices.postImageNotJson(req, res);
  };
  updateImageNotJson = (req: Request, res: Response) => {
    imageServices.updateImageNotJson(req, res);
  };
}
export default new imageController();
