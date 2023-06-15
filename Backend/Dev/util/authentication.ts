import { Request, Response, NextFunction } from 'express';

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session?.userId) {
    next();
  } else {
    res.status(402).json({ message: 'Authentication required' });
  }
};

export default{
    requireAuth,
}