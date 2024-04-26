const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
//e.g. London

class Location extends Model {}

Location.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    location_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,                   //each location needs to have a unique name
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'location',
  }
);

module.exports = Location;