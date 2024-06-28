/* eslint-disable @typescript-eslint/no-explicit-any */
import { isCelebrateError } from 'celebrate';
import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const handleValidationError = (
  err: any,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!isCelebrateError(err)) {
    return next(err);
  }
  const error = [];
  // eslint-disable-next-line no-restricted-syntax, @typescript-eslint/no-unused-vars
  for (const [segment, joiError] of err.details.entries()) {
    error.push(joiError.message);
  }

  res.status(400).send({ error, timestamp: new Date().toISOString() });
};
