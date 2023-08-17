import { NextFunction, Request, Response } from 'express';

const checkRole = (req: Request, res: Response, next: NextFunction) => {
  console.log(111, req.body);
  if ((req as any).user.role === 2) {
    next();
  } else {
    res.sendStatus(403);
  }
};
export default checkRole;
