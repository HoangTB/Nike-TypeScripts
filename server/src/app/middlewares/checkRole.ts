import { NextFunction, Request, Response } from 'express';

const checkRole = (req: Request, res: Response, next: NextFunction) => {
  console.log(111, req.body);
  next();
};
export default checkRole;
