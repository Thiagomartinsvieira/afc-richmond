import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { env } from '../../config/env-config';
import { IUser } from '../interfaces/IUser';

export async function createUserToken(_req: Request, res: Response, user: IUser) {
  const token = jwt.sign(
    // payload data
    {
      name: user.name,
      id: user._id,
    },
    env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  // return token
  res.status(200).json({
    message: 'You are authenticated',
    token: token,
    userId: user._id,
  });
}
