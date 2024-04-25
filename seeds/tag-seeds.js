const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Full Stack',
  },
  {
    tag_name: 'Back End',
  },
  {
    tag_name: 'Front End',
  },
  {
    tag_name: 'HTML5',
  },
  {
    tag_name: 'ReactJS',
  },
  {
    tag_name: 'CSS3',
  },
  {
    tag_name: 'JavaScript',
  },
  {
    tag_name: 'Python',
  },
  {
    tag_name: 'Ruby on Rails',
  },
  {
    tag_name: 'MERNStack',
  },
  {
    tag_name: 'SQL',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
