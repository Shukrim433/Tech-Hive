const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
//e.g. Full Stack Developer

class Role extends Model {}

Role.init(
  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salary: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {       
        isFloat: true,            // checks for valid floating point numbers
      }
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    job_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'location', // References the Location model
        key: 'id'
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {               // References the `category` model's `id`.
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'role',
  }
);

module.exports = Role;
