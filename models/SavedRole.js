const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
//Junction model (joins user and role to make = savedRole)

class SavedRole extends Model {}

SavedRole.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {               // References the `user` model's `id`.
          model: 'user',
          key: 'id'
        }
    },
    role_id: {
        type: DataTypes.INTEGER,
        references: {               // References the `role` model's `id`.
          model: 'role',
          key: 'id'
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'saved_role',
  }
);

module.exports = SavedRole;
