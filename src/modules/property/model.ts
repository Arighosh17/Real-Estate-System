/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import * as Sequelize from 'sequelize';
// //import sequelize from 'sequelize/types/sequelize';

// export interface Property extends Sequelize.Model {
//   id: number;
//   location: string;
//   price: number;
//   type: string;
//   bedrooms: number;
//   bathrooms: number;
//   amenities?: string;
//   keywords?: string;
// }

// export default Property;

import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '@config/database/sql'; // Adjust the import path as necessary

// These are the attributes of the model
interface PropertyAttributes {
  id: number;
  location: string;
  price: number;
  type: string;
  bedrooms: number;
  bathrooms: number;
  amenities?: string;
  keywords?: string;
}

// These are the attributes that can be passed to `.create()` and `.build()`
type PropertyCreationAttributes = Optional<PropertyAttributes, 'id'>

class Property extends Model<PropertyAttributes, PropertyCreationAttributes> implements PropertyAttributes {
  public id!: number;
  public location!: string;
  public price!: number;
  public type!: string;
  public bedrooms!: number;
  public bathrooms!: number;
  public amenities?: string;
  public keywords?: string;
}

Property.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bedrooms: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bathrooms: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amenities: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  keywords: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Property',
});

export default Property;
