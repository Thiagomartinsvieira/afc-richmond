import { rateLimit } from 'express-rate-limit';

export function apiRequestLimiter(windowMs: number, max: number) {
  return rateLimit({
    windowMs: windowMs,
    max: max,
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    handler: (_req, res) => {
      res.status(429).json({ error: 'Too many requests' });
    },
  });
}
