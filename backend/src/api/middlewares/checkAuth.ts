import { NextFunction, Request, Response } from 'express';
import { getUserByToken } from '../helpers/get-user-by-token';
import { IUser } from '../interfaces/IUser';

/**
 * Middleware to check user authentication and role permissions.
 *
 * This middleware extracts the authorization token from the request headers,
 * retrieves user information using the token, and checks if the user has the 'admin' role.
 * If the user does not have the 'admin' role, a 403 Forbidden response is sent.
 *
 * @param {Request} req - Express Request object.
 * @param {Response} res - Express Response object.
 * @param {NextFunction} next - Express NextFunction callback.
 */
export async function checkAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Access denied' });

  const user = (await getUserByToken(req, res, token)) as IUser;

  if (!user.roles.includes('admin')) {
    return res.status(403).json({ message: 'Permission denied' });
  }
  next();
}
