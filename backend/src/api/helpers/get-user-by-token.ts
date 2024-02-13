import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { env } from '../../config/env-config';
import { User } from '../models/User';

export async function getUserByToken(
  _req: Request,
  res: Response,
  token: string | undefined
) {
  try {
    if (!token) return res.status(422).json({ message: 'Access denied' });

    const decoded = jwt.verify(token, env.JWT_SECRET) as { id: string };
    const userId = decoded.id;

    const user = await User.findOne({ _id: userId });

    return user;
  } catch (error) {
    console.error(error);
  }
}
