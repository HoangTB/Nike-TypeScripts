//cau hinh multer
import { Request } from 'express';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;
// cau hinh luu tru
const storage = multer.diskStorage({
  destination: function (req: Request, file: Express.Multer.File, cb: DestinationCallback): void {
    cb(null, './public/images');
  },
  filename: function (req: Request, file: Express.Multer.File, cb: FileNameCallback) {
    const fileName = file.originalname.toLocaleLowerCase().split(' ').join('-');
    cb(null, uuidv4() + '-' + fileName);
  },
});

export default storage;
