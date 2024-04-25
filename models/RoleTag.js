const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Role = require('./Role');
//will be an object inside each "tag" object in the tag array(which can also be inside the role object). and it will show the tag id and the role id that its in


class RoleTag extends Model {}

RoleTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    role_id: {
      type: DataTypes.INTEGER,
      references: {             //References the `Role` model's `id`.
        model: 'role',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {             //References the `Tag` model's `id`.
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'role_tag',
  }
);

module.exports = RoleTag;
