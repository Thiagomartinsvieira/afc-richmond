import { JwtPayload } from 'jsonwebtoken';

interface IRequestUser {
  verified: string | JwtPayload;
  // verified: {
  //   name: string | undefined;
  //   id: string | undefined;
  //   iat: number | undefined;
  //   exp: number | undefined;
  // };
  email: string | undefined;
  membership: string | undefined;
}

declare global {
  declare namespace Express {
    export interface Request {
      user?: IRequestUser;
    }
  }
}
