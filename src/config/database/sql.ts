import { envs } from '@config/env';
import { logger } from '@config/logger/logger';
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'mysql',
  host: envs.db.host,
  port: 3306,
  username: envs.db.username,
  password: envs.db.password,
  database: envs.db.database,
});

/**
 * This function is used for connecting database
 */
export const connect = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    logger.info('Connection has been established successfully.');
  } catch (error) {
    logger.error('Unable to connect to the database:', error);
  }
};
