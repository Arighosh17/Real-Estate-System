/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import { Op } from 'sequelize';
import Property from '@modules/property/model';
import { controller } from '@config/controller/controller';

/**
 * @param req
 * @param res
 */
export const searchProperties = controller(async (req: Request, res: Response): Promise<void> => {
  const { location, minPrice, maxPrice, type, bedrooms, bathrooms, amenities, keywords } = req.query;

  const filters: any = {};

  if (location) {
    filters.location = { [Op.like]: `%${location}%` };
  }
  if (minPrice) {
    filters.price = { ...filters.price, [Op.gte]: parseFloat(minPrice as string) };
  }
  if (maxPrice) {
    filters.price = { ...filters.price, [Op.lte]: parseFloat(maxPrice as string) };
  }
  if (type) {
    filters.type = type;
  }
  if (bedrooms) {
    filters.bedrooms = bedrooms;
  }
  if (bathrooms) {
    filters.bathrooms = bathrooms;
  }
  if (amenities) {
    filters.amenities = { [Op.like]: `%${amenities}%` };
  }
  if (keywords) {
    filters.keywords = { [Op.like]: `%${keywords}%` };
  }

  try {
    const properties = await Property.findAll({ where: filters });
    res.status(200).send(properties);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching properties:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
});
