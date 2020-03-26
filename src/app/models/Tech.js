import Sequelize, { Model } from 'sequelize';

class Tech extends Model {
  static init(dbConnection) {
    super.init({
      name: Sequelize.STRING
    }, {
      sequelize: dbConnection,
      tableName: 'techs'
    })

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.User, { foreignKey: 'techs_id', through: 'user_techs', as: 'users'});
  }
}

export default Tech;
