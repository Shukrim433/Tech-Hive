const { Role } = require('../models');

const roleData = [
  {
    role_name: 'Full Stack Developer',
    salary: 80000,
    company: 'TechCorp',
    description: 'Seeking a skilled Full Stack Developer to join our team.',
    job_type: 'Full-time',
    location_id: 1,
    category_id: 1, // "Software Development" category has id 1
  },
  {
    role_name: 'Software Engineer',
    salary: 85000,
    company: 'TechGuru',
    description: 'Looking for a talented Software Engineer to work on exciting projects.',
    job_type: 'Full-time',
    location_id: 2,
    category_id: 1, // "Software Development" category has id 1
  },
  {
    role_name: 'Data Scientist',
    salary: 90000,
    company: 'DataTech',
    description: 'We are looking for a skilled Data Scientist to analyze complex datasets and generate actionable insights.',
    job_type: 'Full-time',
    location_id: 3,
    category_id: 2, // "Data Analysis" category has id 2
  },
  {
    role_name: 'UX/UI Designer',
    salary: 75000,
    company: 'DesignWorks',
    description: 'Design intuitive user interfaces and engaging user experiences for our web and mobile applications.',
    job_type: 'Full-time',
    location_id: 1, 
    category_id: 3, //  "Design" category has id 3
  },
  {
    role_name: 'Cloud Engineer',
    salary: 95000,
    company: 'CloudTech',
    description: 'Join our team to build and maintain scalable cloud infrastructure using cutting-edge technologies.',
    job_type: 'Full-time',
    location_id: 2, 
    category_id: 4, // "Cloud Computing" category has id 4
  },
  {
    role_name: 'Network Engineer',
    salary: 85000,
    company: 'NetCorp',
    description: 'We are seeking a skilled Network Engineer to design and implement scalable network solutions.',
    job_type: 'Full-time',
    location_id: 4, 
    category_id: 5, //  "Network Engineering" category has id 5
  },
  {
    role_name: 'DevOps Engineer',
    salary: 90000,
    company: 'TechOps',
    description: 'Join our team to automate and streamline our software development processes.',
    job_type: 'Full-time',
    location_id: 5, 
    category_id: 6, //  "DevOps" category has id 6
  },
  {
    role_name: 'Machine Learning Engineer',
    salary: 95000,
    company: 'AI Solutions',
    description: 'We are looking for a Machine Learning Engineer to develop and deploy machine learning models.',
    job_type: 'Full-time',
    location_id: 6,
    category_id: 7, //  "Machine Learning" category has id 7
  },
  {
    role_name: 'Cybersecurity Analyst',
    salary: 90000,
    company: 'SecureTech',
    description: 'Seeking a skilled Cybersecurity Analyst to protect our organization from cyber threats.',
    job_type: 'Full-time',
    location_id: 7,
    category_id: 8, //  "Cybersecurity" category has id 8
  },
  {
    role_name: 'Frontend Developer',
    salary: 80000,
    company: 'WebWorks',
    description: 'We are looking for a Frontend Developer to create beautiful and responsive user interfaces.',
    job_type: 'Full-time',
    location_id: 8, 
    category_id: 1, // "Software Development" category has id 1
  },
  {
    role_name: 'Database Administrator',
    salary: 85000,
    company: 'DataWorks',
    description: 'Join our team to manage and optimize our database systems for performance and reliability.',
    job_type: 'Full-time',
    location_id: 9, 
    category_id: 9, //"Database Administration" category has id 9
  },
  {
    role_name: 'Product Manager',
    salary: 100000,
    company: 'ProductTech',
    description: 'Lead the development of innovative products and drive product strategy.',
    job_type: 'Full-time',
    location_id: 10,
    category_id: 10, // "Product Management" category has id 10 
  },
  {
    role_name: 'Data Scientist',
    salary: 95000,
    company: 'DataWorks',
    description: 'Join our team as a Data Scientist II to tackle challenging data problems and drive data-driven decisions.',
    job_type: 'Full-time',
    location_id: 10,
    category_id: 2, //"Data Analysis" category has id 2
  },
];


const seedRoles = () => Role.bulkCreate(roleData);

module.exports = seedRoles;
