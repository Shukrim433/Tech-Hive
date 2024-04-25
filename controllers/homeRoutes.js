const router = require('express').Router();

const roles = [
    {
      role_name: 'Developer',
      company: 'Google',
      location: 'London',
      job_type: 'Full-time',
      salary: '£40,000 - £50,000 per annum',
    },
    {
      role_name: 'Software Engineer',
      company: 'Amazon',
      location: 'Manchester',
      job_type: 'Full-time',
      salary: '£96,000 - £120,000 per annum',
    },
    {
      role_name: 'Product Manager',
      company: 'Apple',
      location: 'Bristol',
      job_type: 'Contract',
      salary: '£104,000 - £128,000 per annum',
    },
    {
      role_name: 'UX/UI Designer',
      company: 'Facebook',
      location: 'Edinburgh',
      job_type: 'Part-time',
      salary: '£48,000 - £60,000 per annum',
    },
    {
      role_name: 'Cybersecurity Analyst',
      company: 'IBM',
      location: 'Glasgow',
      job_type: 'Full-time',
      salary: '£64,000 - £80,000 per annum',
    },
];
const location = ['London', 'New York City', 'Cupertino', 'San Francisco', 'Chicago'];

const job_type = ['Full-time', 'Part-time', 'Contract'];

const salary = ['£40,000 - £60,000 per annum', '£60,000 - £80,000 per annum', '£80,000 - £100,000 per annum', '£100,000 - £120,000 per annum', '£120,000 - £140,000 per annum'];

router.get('/', async (req, res) => {
  res.render('all', { roles, location, job_type, salary }); 
});

router.get('/role/:num', (req, res) => {
  const randomIndex = Math.floor(Math.random() * roles.length);
  const featurejob = roles[randomIndex];
  res.render('role', {featurejob});
});
module.exports = router;
