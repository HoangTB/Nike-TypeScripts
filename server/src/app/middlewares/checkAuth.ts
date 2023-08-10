import jwt from 'jsonwebtoken';
import { secretKey } from '../../configs/jwt.configs';
import { NextFunction, Request, Response } from 'express';

const checkAuthentication = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.header('Authorization');
  const token: any = authHeader && authHeader.split(' ')[1];
  if (!token) res.sendStatus(401);
  try {
    const decoded = jwt.verify(token, secretKey);
    next();
  } catch (err) {
    return res.sendStatus(403);
  }
};
export default checkAuthentication;
