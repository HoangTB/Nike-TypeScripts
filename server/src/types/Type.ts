import { Dialect } from 'sequelize';
import { Multer } from 'multer';
export interface IdbConfig {
  db: {
    host: string;
    user: string;
    password: string;
    database: string;
    dialect: Dialect;
  };
  pool: {
    max: number;
    min: number;
    acquire: number;
    idle: number;
  };
}

export interface Request {
  file: Multer;
  id: number;
}

export interface HistoryType {
  id: number;
  quantity: number;
  size_product: string;
  fullName: string;
  email: string;
  address: string;
  phone: string;
  status: number;
  order_date: Date;
  order_id: number;
  product_id: number;
}

export interface ImageType {
  id: number;
  image_1: string;
  image_2: string;
  image_3: string;
  image_4: string;
  product_id: number;
}

export interface UserType {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthday: Date;
  role: number;
  status: number;
}
