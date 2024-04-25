const { Role } = require('../models');

const roleData = [
    {
        role_name: 'QA Tester',
        company: 'QualityTech Ltd.',
        location: 'London',
        job_type: 'Full-time',
        salary: '£40,000 - £50,000 per annum',
        description: 'Develop and execute test plans to ensure the quality and reliability of software applications.',
        category_id: 1, // Development
      },
      {
        role_name: 'Graphic Designer',
        company: 'VisualWorks Co.',
        location: 'Manchester',
        job_type: 'Contract',
        salary: '£35 - £45 per hour',
        description: 'Create visually stunning graphics and illustrations for digital and print media.',
        category_id: 2, // Design
      },
      {
        role_name: 'Information Security Officer',
        company: 'SecureGuard Solutions',
        location: 'Birmingham',
        job_type: 'Full-time',
        salary: '£50,000 - £60,000 per annum',
        description: 'Implement and enforce security policies and procedures to protect sensitive information.',
        category_id: 3, // Security
      },
      {
        role_name: 'Machine Learning Researcher',
        company: 'ML Research Institute',
        location: 'Cambridge',
        job_type: 'Full-time',
        salary: '£80,000 - £90,000 per annum',
        description: 'Conduct research to advance the state of the art in machine learning algorithms and techniques.',
        category_id: 4, // AI
      },
      {
        role_name: 'Network Administrator',
        company: 'NetWorks Ltd.',
        location: 'Edinburgh',
        job_type: 'Full-time',
        salary: '£45,000 - £55,000 per annum',
        description: 'Manage and maintain network infrastructure to ensure connectivity and security.',
        category_id: 5, // Systems
      },
      {
        role_name: 'Supply Chain Manager',
        company: 'SupplyWorks Ltd.',
        location: 'Bristol',
        job_type: 'Full-time',
        salary: '£65,000 - £75,000 per annum',
        description: 'Optimize the supply chain to ensure efficient sourcing, manufacturing, and distribution of goods.',
        category_id: 6, // Operations
      },
      {
        role_name: 'Product Owner',
        company: 'ProductWorks Ltd.',
        location: 'Manchester',
        job_type: 'Full-time',
        salary: '£70,000 - £80,000 per annum',
        description: 'Define and prioritize product features and requirements to maximize business value.',
        category_id: 7, // Project Management
      },
      {
        role_name: 'Software Engineer',
        company: 'Tech Innovations Ltd.',
        location: 'London',
        job_type: 'Full-time',
        salary: '£60,000 - £70,000 per annum',
        description: 'Develop and maintain software solutions using modern programming languages and frameworks.',
        category_id: 1, // Development
      },
      {
        role_name: 'UX/UI Designer',
        company: 'Digital Creations Co.',
        location: 'Manchester',
        job_type: 'Contract',
        salary: '£50 - £60 per hour',
        description: 'Design intuitive and visually appealing user interfaces for web and mobile applications.',
        category_id: 2, // Design
      },
      {
        role_name: 'Cybersecurity Analyst',
        company: 'SecureTech Solutions',
        location: 'Birmingham',
        job_type: 'Full-time',
        salary: '£45,000 - £55,000 per annum',
        description: 'Monitor and analyze security threats to protect systems and data from cyber attacks.',
        category_id: 3, // Security
      },
      {
        role_name: 'AI Engineer',
        company: 'AI Tech Ltd.',
        location: 'Cambridge',
        job_type: 'Full-time',
        salary: '£70,000 - £80,000 per annum',
        description: 'Develop and deploy machine learning models to solve complex business problems.',
        category_id: 4, // AI
      },
      {
        role_name: 'Systems Administrator',
        company: 'SystemWorks Ltd.',
        location: 'Edinburgh',
        job_type: 'Full-time',
        salary: '£50,000 - £60,000 per annum',
        description: 'Manage and maintain IT systems to ensure their availability, reliability, and security.',
        category_id: 5, // Systems
      },
      {
        role_name: 'Operations Manager',
        company: 'OperateTech Solutions',
        location: 'Bristol',
        job_type: 'Full-time',
        salary: '£60,000 - £70,000 per annum',
        description: 'Oversee day-to-day operations, including resource allocation, process improvement, and performance management.',
        category_id: 6, // Operations
      },
      {
        role_name: 'Project Manager',
        company: 'ProjectWorks Ltd.',
        location: 'Manchester',
        job_type: 'Full-time',
        salary: '£55,000 - £65,000 per annum',
        description: 'Plan, execute, and deliver projects within scope, schedule, and budget constraints.',
        category_id: 7, // Project Management
      },
      {
        role_name: 'Software Architect',
        company: 'ArchitectTech Ltd.',
        location: 'London',
        job_type: 'Full-time',
        salary: '£80,000 - £90,000 per annum',
        description: 'Design and implement the overall structure of software systems to meet business requirements.',
        category_id: 1, // Development
      },
      {
        role_name: 'User Researcher',
        company: 'Insightful Solutions Co.',
        location: 'Manchester',
        job_type: 'Contract',
        salary: '£45 - £55 per hour',
        description: 'Conduct user research to understand user needs and behaviors, informing product design decisions.',
        category_id: 2, // Design
      },
      {
        role_name: 'Penetration Tester',
        company: 'PenTest Security Ltd.',
        location: 'Birmingham',
        job_type: 'Full-time',
        salary: '£55,000 - £65,000 per annum',
        description: 'Identify and exploit vulnerabilities in computer systems and networks to assess security risks.',
        category_id: 3, // Security
      },
      {
        role_name: 'AI Ethics Specialist',
        company: 'EthicalAI Innovations',
        location: 'Cambridge',
        job_type: 'Full-time',
        salary: '£70,000 - £80,000 per annum',
        description: 'Address ethical considerations in AI development and deployment, ensuring responsible and fair use of AI technologies.',
        category_id: 4, // AI
      },
      {
        role_name: 'System Administrator',
        company: 'SysAdmin Solutions Ltd.',
        location: 'Edinburgh',
        job_type: 'Full-time',
        salary: '£50,000 - £60,000 per annum',
        description: 'Install, configure, and maintain operating systems and software to ensure the reliability and security of IT systems.',
        category_id: 5, // Systems
      },
      {
        role_name: 'Quality Assurance Manager',
        company: 'QA Works Ltd.',
        location: 'Bristol',
        job_type: 'Full-time',
        salary: '£60,000 - £70,000 per annum',
        description: 'Develop and implement quality assurance policies and procedures to ensure product quality and customer satisfaction.',
        category_id: 6, // Operations
      },
      {
        role_name: 'Scrum Master',
        company: 'AgileWorks Ltd.',
        location: 'Manchester',
        job_type: 'Full-time',
        salary: '£65,000 - £75,000 per annum',
        description: 'Facilitate Agile development processes and ceremonies to help teams deliver high-quality software products.',
        category_id: 7, // Project Management
      },
      {
        role_name: 'Frontend Developer',
        company: 'Frontend Solutions Ltd.',
        location: 'London',
        job_type: 'Full-time',
        salary: '£55,000 - £65,000 per annum',
        description: 'Build user-facing features and interfaces for web applications using HTML, CSS, and JavaScript.',
        category_id: 1, // Development
      },
      {
        role_name: 'Visual Designer',
        company: 'VisualCraft Co.',
        location: 'Manchester',
        job_type: 'Contract',
        salary: '£50 - £60 per hour',
        description: 'Create visually compelling designs for digital and print media, including websites, ads, and branding materials.',
        category_id: 2, // Design
      },
      {
        role_name: 'Information Security Specialist',
        company: 'SecureInfo Ltd.',
        location: 'Birmingham',
        job_type: 'Full-time',
        salary: '£60,000 - £70,000 per annum',
        description: 'Implement and manage security measures to protect systems and data from cyber threats and breaches.',
        category_id: 3, // Security
      },
      {
        role_name: 'Machine Learning Scientist',
        company: 'ML Research Labs',
        location: 'Cambridge',
        job_type: 'Full-time',
        salary: '£90,000 - £100,000 per annum',
        description: 'Research and develop machine learning algorithms and models to solve complex problems and improve decision-making processes.',
        category_id: 4, // AI
      },
      {
        role_name: 'Network Engineer',
        company: 'NetWorks Solutions Ltd.',
        location: 'Edinburgh',
        job_type: 'Full-time',
        salary: '£55,000 - £65,000 per annum',
        description: 'Design, implement, and manage computer networks to ensure smooth and secure communication between devices and systems.',
        category_id: 5, // Systems
      },
      {
        role_name: 'Logistics Manager',
        company: 'LogiWorks Ltd.',
        location: 'Bristol',
        job_type: 'Full-time',
        salary: '£70,000 - £80,000 per annum',
        description: 'Plan and coordinate the movement of goods and materials, optimizing logistics processes for efficiency and cost-effectiveness.',
        category_id: 6, // Operations
      },
      {
        role_name: 'Product Owner',
        company: 'ProductWorks Ltd.',
        location: 'Manchester',
        job_type: 'Full-time',
        salary: '£70,000 - £80,000 per annum',
        description: 'Lead product development efforts by defining and prioritizing features based on business goals and customer needs.',
        category_id: 7, // Project Management
      },
      {
        role_name: 'Software Development Manager',
        company: 'DevWorks Ltd.',
        location: 'London',
        job_type: 'Full-time',
        salary: '£90,000 - £100,000 per annum',
        description: 'Lead a team of software engineers to deliver high-quality software solutions that meet business objectives and customer requirements.',
        category_id: 1, // Development
      },
      {
        role_name: 'User Experience Researcher',
        company: 'UX Insight Co.',
        location: 'Manchester',
        job_type: 'Contract',
        salary: '£55 - £65 per hour',
        description: 'Conduct user research and usability testing to gather insights and improve the user experience of digital products and services.',
        category_id: 2, // Design
      },

];

const seedRoles = () => Role.bulkCreate(roleData);

module.exports = seedRoles;
