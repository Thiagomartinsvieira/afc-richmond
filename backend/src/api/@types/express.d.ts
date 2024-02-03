declare namespace Express {
  export interface Request {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    user?: any;
  }
}
