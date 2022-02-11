'use strict';
const { v4: uuidv4 } = require('uuid');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Roles.hasMany(models.Admins, { foreignKey: 'role_id' });
    }
  }
  Roles.init({
    label: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Roles',
  });
  Roles.addHook("beforeSave", async (element) => {
    return element.id = uuidv4();
  } )
  return Roles;
};