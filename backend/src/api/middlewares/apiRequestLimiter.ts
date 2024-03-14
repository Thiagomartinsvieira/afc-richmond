import { RateLimitRequestHandler, rateLimit } from 'express-rate-limit';

/**
 * Creates and returns an Express middleware for rate limiting API requests.
 *
 * @param {number} windowMs - The time window for rate limiting in milliseconds.
 * @param {number} max - The maximum number of requests allowed within the specified window.
 * @returns {RateLimitRequestHandler} Express middleware for rate limiting API requests.
 */
export function apiRequestLimiter(
  windowMs: number,
  max: number
): RateLimitRequestHandler {
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
