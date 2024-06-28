/* eslint-disable prettier/prettier */
import express from 'express';
import { getPropertyDetails } from '@controllers/property'; // Adjust the import path based on your project structure

const router = express.Router();

// Route to get property details by ID
router.get('/:id', getPropertyDetails);

export default router;
