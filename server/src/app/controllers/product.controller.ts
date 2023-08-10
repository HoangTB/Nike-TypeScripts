import { Request, Response } from 'express';
import productServices from '../services/product.services';

class productController {
  getProduct = (req: Request, res: Response) => {
    productServices.getProduct(req, res);
  };

  getProductLast = (req: Request, res: Response) => {
    productServices.getProductLast(req, res);
  };

  getProductById = (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    productServices.getProductById(id, res);
  };

  postProduct = (req: Request, res: Response) => {
    const data = req.body;
    productServices.postProduct(data, res);
  };

  postProductNotJson = (req: Request, res: Response) => {
    const data = req.body;
    const file: Express.Multer.File | undefined = req.file;
    if (file) {
      productServices.postProductNotJson(data, file, req, res);
    } else {
      res.status(400).json({ message: 'No file uploaded' });
    }
  };

  deleteProductById = (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    productServices.deleteProductById(id, res);
  };

  updateProductById = (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    const data = req.body;
    productServices.updateProductById(id, data, res);
  };

  updateProductNotJson = (req: Request, res: Response) => {
    const data = req.body;
    const file: Express.Multer.File | undefined = req.file;
    if (file) {
      productServices.updateProductNotJson(data, file, req, res);
    } else {
      res.status(400).json({ message: 'No file uploaded' });
    }
  };

  getProductMergerId = (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    productServices.getProductMergerId(id, res);
  };
}

export default new productController();
