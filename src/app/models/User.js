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

  static associate(models) {
    this.hasMany(models.Addresses, { foreignKey: 'user_id', as: 'addresses' });
    this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' });
  }
}

export default User;
