import Image from '../models/image.model';
import ImageJson from '../../libraries/database/image.json';
import { Request, Response } from 'express';
class imageServices {
  postImage = async (data: any, res: Response) => {
    try {
      const createdImage = await Image.bulkCreate(
        ImageJson.map((image) => ({
          id: image.id,
          image_1: image.image_1,
          image_2: image.image_2,
          image_3: image.image_3,
          image_4: image.image_4,
          product_id: image.product_id,
        }))
      );
      console.log(`Created ${createdImage.length} products`);
      res.status(200).json(createdImage);
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

  postImageNotJson = async (req: Request, res: Response) => {
    try {
      const url = req.protocol + '://' + req.get('host');
      const files = req.files as Express.Multer.File[];
      const fileData = {
        image_1: url + '/images/' + files[0].filename,
        image_2: url + '/images/' + files[1].filename,
        image_3: url + '/images/' + files[2].filename,
        image_4: url + '/images/' + files[3].filename,
        product_id: req.body.product_id,
      };
      const result = await Image.create(fileData);
      return res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Failed to create products', err });
    }
  };

  updateImageNotJson = async (req: Request, res: Response) => {
    try {
      const url = req.protocol + '://' + req.get('host');
      const files = req.files as Express.Multer.File[];
      const fileData = {
        image_1: url + '/images/' + files[0].filename,
        image_2: url + '/images/' + files[1].filename,
        image_3: url + '/images/' + files[2].filename,
        image_4: url + '/images/' + files[3].filename,
      };
      const result = await Image.update(fileData, {
        where: {
          product_id: req.params.id,
        },
      });
      console.log(fileData);
      return res.status(200).json(fileData);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Failed to create products', err });
    }
  };
}

export default new imageServices();
