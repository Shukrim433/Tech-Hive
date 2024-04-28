// import models
const Role = require('./Role');
const Category = require('./Category');
const Tag = require('./Tag');
const RoleTag = require('./RoleTag');
const Location = require('./Location');
const Application = require('./Application');
const User = require('./User');
const SavedRole = require('./SavedRole');

//one to many
// Categories have many Roles: 1 category has many roles
Category.hasMany(Role,{
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
  })
// Roles belongsTo Category: each role belongs to 1 category
Role.belongsTo(Category, {
  foreignKey: 'category_id'
})


//one to many
//Locations have many Roles: 1 location has many roles
Location.hasMany(Role, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE'
})
//Roles belongsTo Location: each role belongs to 1 Location
Role.belongsTo(Location, {
  foreignKey: 'location_id'
})


//many to many
// Roles belongToMany Tags (through RoleTag): 1 role can have multiple tags associated with it***
Role.belongsToMany(Tag, {
  through: RoleTag,            // Use through for many-to-many associations
  foreignKey: 'role_id',
  onDelete: 'CASCADE'
})
// Tags belongToMany Roles (through RoleTag):  1 tag can be associated with multiple roles***
Tag.belongsToMany(Role, {
  through: RoleTag,            // Use through for many-to-many associations
  foreignKey: 'tag_id',
  onDelete: 'CASCADE',
})


//many to many
// Roles belongToMany Users (through SavedRole): 1 role can be saved by multiple users
Role.belongsToMany(User, {
  through: SavedRole,            // Use through for many-to-many associations
  as: 'SavedUsers',              //alias for this association (users saving roles)
  foreignKey: 'role_id',
  onDelete: 'CASCADE'
})
// User belongToMany Roles (through SavedRole):  1 user can be associated with multiple roles***
User.belongsToMany(Role, {
  through: SavedRole,              // Use through for many-to-many associations
  as: 'SavedRoles',                //alias for this association (users saving roles)
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})

//many to many
// Roles belongToMany Users (through  Application): 1 role can be applied to by multiple users
Role.belongsToMany(User, {
  through: Application,            // Use through for many-to-many associations
  as: 'AppliedUsers',              //alias for this association (users applying for roles)
  foreignKey: 'role_id',
  onDelete: 'CASCADE'
})
// User belongToMany Roles (through Application):  1 user can be associated with multiple roles***
User.belongsToMany(Role, {
  through: Application,            // Use through for many-to-many associations
  as: 'AppliedRoles',              //alias for this association (users applying for roles)
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})

module.exports = {
  Role,
  Category,
  Tag,
  RoleTag,
  Location,
  User,
  Application,
  SavedRole
};