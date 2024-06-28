/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { authRouter } from './auth';
import { userRouter } from './user';
import router from './property'; // Adjust the import path based on your project structure
import { propertyRouter } from './property/create';
import { searchRouter } from './property/search';

const v1Router = Router();

v1Router.use('/auth', authRouter);
v1Router.use('/user', userRouter);
v1Router.use('/properties', router); 
v1Router.use('/properties', propertyRouter); 
v1Router.use('/',searchRouter);

export { v1Router };
