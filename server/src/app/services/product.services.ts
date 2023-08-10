import { Request, Response } from 'express';
import Product from '../models/product.model';
import Image from '../models/image.model';
import Order from '../models/order.model';
import OrderDetail from '../models/orderDetail.model';
import ProductJson from '../../libraries/database/product.json';
class productServices {
  getProductLast = async (req: Request, res: Response) => {
    try {
      const products = await Product.findAll();

      if (products.length > 0) {
        const lastProduct = products.pop();
        res.status(200).json(lastProduct);
      } else {
        res.status(404).json({ message: 'No products found' });
      }
    } catch (err) {
      res.status(500).json({ message: 'Error Get Product', err });
    }
  };

  getProduct = async (req: Request, res: Response) => {
    try {
      const products = await Product.findAll({
        include: [
          {
            model: Image,
          },
        ],
      });

      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: 'Error Get Product', err });
    }
  };

  getProductById = async (id: number, res: Response) => {
    try {
      const product = await Product.findAll({
        include: [
          {
            model: Image,
          },
        ],
        where: {
          id: id,
        },
      });
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: 'Error Get Product', err });
    }
  };

  postProduct = async (data: any, res: Response) => {
    try {
      console.log(ProductJson);
      const createdProducts = await Product.bulkCreate(
        ProductJson.map((product) => ({
          id: product.id,
          name: product.name,
          type: product.type,
          image: product.image,
          price: product.price,
          new: product.new,
          quantity_inventory: product.quantity_inventory,
        }))
      );
      console.log(`Created ${createdProducts.length} products`);
      res.status(200).json({ message: 'Products created successfully' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Failed to create products', err });
    }

    // try {
    //   console.log(data);
    //   const productValues = await Product.bulkCreate([data]);
    //   res.status(200).json({ message: 'Post successfully', productValues });
    // } catch (err) {
    //   console.log(err);
    //   res.status(500).json({ message: 'Failed to create products', err });
    // }
  };

  postProductNotJson = async (data: any, file: Express.Multer.File, req: Request, res: Response) => {
    try {
      const url = req.protocol + '://' + req.get('host');
      const fileData = {
        image: url + '/images/' + file.filename,
        name: data.name,
        type: data.type,
        price: data.price,
        new: data.new,
        quantity_inventory: data.quantity_inventory,
      };
      const result = await Product.create(fileData);
      return res.status(200).json(fileData);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Failed to create products', err });
    }
  };

  deleteProductById = async (id: number, res: Response) => {
    try {
      const product = await Product.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).json({ message: 'Delete successfully !' });
    } catch (err) {
      res.status(500).json({ message: 'Error Delete Product', err });
    }
  };

  updateProductById = async (id: number, data: any, res: Response) => {
    try {
      const productUpdate = await Product.update(data, {
        where: {
          id: id,
        },
      });
      res.status(200).json({ message: 'Update successfully !', productUpdate });
    } catch (err) {
      res.status(500).json({ message: 'Error Update Product', err });
    }
  };

  updateProductNotJson = async (data: any, file: Express.Multer.File, req: Request, res: Response) => {
    try {
      const url = req.protocol + '://' + req.get('host');
      const fileData = {
        image: url + '/images/' + file.filename,
        name: data.name,
        type: data.type,
        price: data.price,
        new: data.new,
        quantity_inventory: data.quantity_inventory,
      };
      const result = await Product.update(fileData, {
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json(fileData);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Failed to create products', err });
    }
  };

  getProductMergerId = async (id: number, res: Response) => {
    try {
      const result = await Order.findAll({
        attributes: ['status', 'order_date', 'user_id'],
        include: [
          {
            model: OrderDetail,
            attributes: ['quantity', 'size_product', 'product_id'],
            include: [
              {
                model: Product,
                attributes: ['name', 'type', 'image', 'price'],
              },
            ],
          },
        ],
        where: {
          user_id: id,
        },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ message: 'error', err });
    }
  };
}

export default new productServices();
