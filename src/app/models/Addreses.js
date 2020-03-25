import Sequelize, { Model } from 'sequelize';

class Addresses extends Model {
  static init(connectiondb) {
    super.init({
      zipcode: Sequelize.STRING,
      street: Sequelize.STRING,
      number: Sequelize.INTEGER
    }, {
      sequelize: connectiondb
    })

    return this
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
  }
}

export default Addresses
