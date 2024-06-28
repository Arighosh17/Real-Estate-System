/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
// Adjust the import path based on your project structure
import { controller } from '@config/controller/controller';
import Property from '@modules/property/model';

/**
 * @param req
 * @param res
 */
export const getPropertyDetails = controller(async (req: Request, res: Response): Promise<void> => {
  const propertyId: number = parseInt(req.params.id, 10);
  if (isNaN(propertyId)) {
    res.status(400).send({ error: 'Invalid property ID' });
    return;
  }

  try {
    const property = await Property.findByPk(propertyId);
    if (!property) {
      res.status(404).send({ error: 'Property not found' });
      return;
    }

    res.status(200).send(property);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching property:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
});



