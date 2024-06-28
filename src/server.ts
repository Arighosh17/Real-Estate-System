import 'module-alias/register';
import app from './app';
import { logger } from '@config/logger/logger';
import '@config/env/validateEnv';
import { envs } from '@config/env';
import { sequelize } from '@config/database/sql';

sequelize
  .sync()
  .then(() => {
    logger.info('Table(s) created successfully.');
  })
  .catch((err) => {
    logger.info('Error creating table(s):', err);
  });
app.listen(envs.port, () => {
  logger.info(`Express server listening on port ${envs.port}`);
});
