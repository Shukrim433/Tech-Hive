// import models
const Role = require('./Role');
const Category = require('./Category');
const Tag = require('./Tag');
const RoleTag = require('./RoleTag');
const Location = require('./Location');

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

module.exports = {
  Role,
  Category,
  Tag,
  RoleTag,
  Location,
};


/*** example, if you have a product like "T-shirt," it might be associated with tags like "clothing," "fashion," and "apparel." */
/*** example, the tag "clothing" might be associated with various products like "T-shirt," "pants," and "jackets." */

/***ProductTag model acts as a junction or pivot table that facilitates this many-to-many relationship. It contains foreign keys that reference
the id columns of both the Product and Tag tables. This setup allows for efficient querying and management of the relationships between products 
and tags. */


/*  1.     1 category has many products
           many products belong to 1 category
*/

/*  2.     a product can have many tags
           a tag can have many products associated with it
*/
