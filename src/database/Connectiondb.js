import Sequelize from 'sequelize';
import User from '../app/models/User';

import dbConfig from '../config/database';

class Connectiondb {
  constructor() {
    this.models = [User];

    this.init();
  }

  init() {
    const connectiondb = new Sequelize(dbConfig);

    this.models.map((model) => model.init(connectiondb));
  }
}

export default new Connectiondb();
