/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import Property from '@modules/property/model';
import { controller } from '@config/controller/controller';

/**
 * @param req
 * @param res
 */
export const createProperty = controller(async (req: Request, res: Response): Promise<void> => {
  const { location, price, type, bedrooms, bathrooms, amenities, keywords } = req.body;

  try {
    const newProperty = await Property.create({
      location,
      price,
      type,
      bedrooms,
      bathrooms,
      amenities,
      keywords,
    });

    res.status(201).send(newProperty);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error creating property:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
});
