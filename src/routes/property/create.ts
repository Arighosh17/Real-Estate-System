/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { createProperty }  from '@controllers/property/create'; // Adjust the import path based on your project structure

const propertyRouter = Router();

// Route to get property details by ID

// Route to create a new property
propertyRouter.post('/create', createProperty);

export { propertyRouter };
