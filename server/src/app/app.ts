import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';

import UserRouter from './routers/user.router';
import ProductRouter from './routers/product.router';
import ImageRouter from './routers/image.router';
import OrderDetailRouter from './routers/orderDetail.router';
import OrderRouter from './routers/order.router';
import HistoryRouter from './routers/history.router';

// Middleware
const corsOrigin = ['https://nike-ten-mu.vercel.app', 'https://nike-tfgk.vercel.app'];
const app = express();

app.use(express.urlencoded({ extended: true })); // Biên dịch url
app.use(bodyParser.json()); // Lấy Body
app.use(morgan('dev')); // Logger error
// app.use(helmet()); // Bảo vệ ứng dụng bằng header HTTP
app.use(cors()); // Chia sẻ tài nguyên giữa client và server

const corsOptions = {
  origin: corsOrigin,
  credentials: true, // access-control-allow-credentials: true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Đọc tài nguyên tĩnh
app.use(express.static(path.join(__dirname, '../../public')));

// Router
app.use('/api/v1/users', UserRouter);
app.use('/api/v1/products', ProductRouter);
app.use('/api/v1/images', ImageRouter);
app.use('/api/v1/order', OrderRouter);
app.use('/api/v1/order-detail', OrderDetailRouter);
app.use('/api/v1/history', HistoryRouter);

// Handle Error

export default app;
