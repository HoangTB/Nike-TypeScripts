//cau hinh multer
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
// cau hinh luu tru
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images');
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.toLocaleLowerCase().split(' ').join('-');
    cb(null, uuidv4() + '-' + fileName);
  },
});

export default storage;
