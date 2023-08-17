import multer from 'multer';
import store from '../utils/multer';
import { Request } from 'express';
const upload = multer({
  storage: store,
  fileFilter: (req: Request, file: Express.Multer.File, callback: any) => {
    if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
      callback(null, true);
    } else {
      callback(null, false);
      return callback(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  },
});

export default upload;
