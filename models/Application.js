const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
//junction model (joins user and role to make = application)
//this model to represents the applications submitted by users for specific roles. 


class Application extends Model {}

Application.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    phone_number: {
        type: DataTypes.STRING,//**
        allowNull: false,
    },
    cv_link: {
        type: DataTypes.STRING,
        allowNull: false,
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
    modelName: 'application',
  }
);

module.exports = Application;
