import Sequelize from 'sequelize';
import User from '../app/models/User';
import Addresses from '../app/models/Addreses';
import Techs from '../app/models/Tech';

import dbConfig from '../config/database';

class Connectiondb {
  constructor() {
    this.models = [User, Addresses, Techs];

    this.init();
  }

  init() {
    const connectiondb = new Sequelize(dbConfig);

    this.models.map((model) => model.init(connectiondb));
    this.models.map(
      model => model.associate && model.associate(connectiondb.models)
    )
  }
}

export default new Connectiondb();
