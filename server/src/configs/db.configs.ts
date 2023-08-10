import { IdbConfig } from '../types/Type';

const dbConfig: IdbConfig = {
  db: {
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'ProjectShoes',
    dialect: 'mysql',
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
export default dbConfig;
