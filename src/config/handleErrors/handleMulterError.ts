/* eslint-disable @typescript-eslint/no-explicit-any */
import multer from 'multer';
import { Request, Response, NextFunction } from 'express';

export const handleMulterError = (err: any, _req: Request, res: Response, next: NextFunction) => {
  if (!(err instanceof multer.MulterError)) {
    return next(err);
  }

  // Customize error based on the project requirement
  res.status(400).send({ error: 'File upload error', timestamp: new Date().toISOString() });
};
