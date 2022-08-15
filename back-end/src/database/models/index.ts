import { Options, Sequelize } from 'sequelize';
import * as config from '../config/config.js';

export default new Sequelize(config as Options);
