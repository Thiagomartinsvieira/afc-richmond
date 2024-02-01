import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { env } from '../../config/env-config';

export function checkToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const verified = jwt.verify(token, env.JWT_SECRET);
    // res.locals.user = verified;
    req.user = verified;
    next(); // to continue the flow
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
}
