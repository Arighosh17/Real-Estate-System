/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { searchProperties } from '@controllers/property/search';
const searchRouter = Router();

searchRouter.get('/search', searchProperties);

export { searchRouter };
