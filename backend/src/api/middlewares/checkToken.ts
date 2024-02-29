import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { env } from '../../config/env-config';
import { getUserByToken } from '../helpers/get-user-by-token';
import { IUser } from '../interfaces/IUser';

/**
 * Middleware to check and verify an authentication token.
 *
 * This middleware extracts the authorization token from the request headers,
 * verifies the token using the provided JWT secret, and sets user information in the request object.
 * If the token is invalid, a 400 Bad Request response is sent.
 *
 * @param {Request} req - Express Request object.
 * @param {Response} res - Express Response object.
 * @param {NextFunction} next - Express NextFunction callback.
 */
export async function checkToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const verified = jwt.verify(token, env.JWT_SECRET);
    const user = (await getUserByToken(req, res, token)) as IUser;

    req.user = {
      verified,
      email: user.email,
      membership: user.membership,
    };
    next(); // to continue the flow
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
}
