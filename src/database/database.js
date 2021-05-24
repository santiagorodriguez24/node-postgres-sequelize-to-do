import Sequelize from 'sequelize';
import { dbconfig } from '../config/config';

export const sequelize = new Sequelize(
    dbconfig.database, 
    dbconfig.user, // username
    dbconfig.password,
    {
        host: dbconfig.host,
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000 // how long (milliseconds) to wait to close an idle client.
        },
        logging: false // hide messages in console
    }
);

