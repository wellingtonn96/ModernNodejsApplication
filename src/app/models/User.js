import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(dbConnection) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING
    }, {
      sequelize: dbConnection
    })

    return this;
  }
}

export default User;
