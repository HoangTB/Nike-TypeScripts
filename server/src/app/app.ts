import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import UserRouter from './routers/user.router';
import ProductRouter from './routers/product.router';
import ImageRouter from './routers/image.router';
import OrderDetailRouter from './routers/orderDetail.router';
import OrderRouter from './routers/order.router';
import HistoryRouter from './routers/history.router';
import cookieParser from 'cookie-parser';
// import paypal from 'paypal-rest-sdk';
// import { paypalConfig } from '../configs/paypal-config';
const corsOrigin = [
  // 'https://nike-type-scripts-ry6v.vercel.app',
  // 'https://nike-type-scripts.vercel.app',
  'http://localhost:3000',
  'http://localhost:5000',
];

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Biên dịch url
app.use(bodyParser.json()); // Lấy Body

app.use(morgan('dev')); // Logger error
// app.use(helmet()); // Bảo vệ ứng dụng bằng header HTTP
// Chia sẻ tài nguyên giữa client và server

const corsOptions = {
  origin: corsOrigin,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, '../../public')));
// paypal.configure({
//   mode: 'sandbox',
//   client_id: paypalConfig.client_id,
//   client_secret: paypalConfig.client_secret,
// });
// Router
app.use('/api/v1/users', UserRouter);
app.use('/api/v1/products', ProductRouter);
app.use('/api/v1/images', ImageRouter);
app.use('/api/v1/order', OrderRouter);
app.use('/api/v1/order-detail', OrderDetailRouter);
app.use('/api/v1/history', HistoryRouter);

// Handle Error

export default app;
