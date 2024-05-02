const { joinSQLFragments } = require('sequelize/lib/utils/join-sql-fragments');
const { Role } = require('../models');

const roleData = [
  {
    role_name: 'Full Stack Developer',
    salary: 80000,
    company: 'TechCorp',
    description: 'Seeking a skilled Full Stack Developer to join our team and contribute to the development of innovative software solutions. The ideal candidate will have experience in both frontend and backend technologies.',
    job_type: 'Full-time',
    location_id: 1,
    category_id: 1, // "Software Development" category has id 1
  },
  {
    role_name: 'Software Engineer',
    salary: 85000,
    company: 'TechGuru',
    description: 'Looking for a talented Software Engineer to work on exciting projects, collaborating with cross-functional teams to deliver high-quality software solutions. The successful candidate will have a passion for coding and problem-solving.',
    job_type: 'Full-time',
    location_id: 2,
    category_id: 1, // "Software Development" category has id 1
  },
  {
    role_name: 'Data Scientist',
    salary: 90000,
    company: 'DataTech',
    description: 'We are looking for a skilled Data Scientist to analyze complex datasets and generate actionable insights. The candidate should have strong statistical and programming skills, with the ability to communicate findings effectively to stakeholders.',
    job_type: 'Full-time',
    location_id: 3,
    category_id: 2, // "Data Analysis" category has id 2
  },
  {
    role_name: 'UX/UI Designer',
    salary: 75000,
    company: 'DesignWorks',
    description: 'Design intuitive user interfaces and engaging user experiences for our web and mobile applications. The candidate should have a keen eye for detail and a deep understanding of user-centered design principles.',
    job_type: 'Full-time',
    location_id: 1, 
    category_id: 3, //  "Design" category has id 3
  },
  {
    role_name: 'Cloud Engineer',
    salary: 95000,
    company: 'CloudTech',
    description: 'Join our team to build and maintain scalable cloud infrastructure using cutting-edge technologies. The successful candidate will have expertise in cloud computing platforms and a strong understanding of networking principles.',
    job_type: 'Full-time',
    location_id: 2, 
    category_id: 4, // "Cloud Computing" category has id 4
  },
  {
    role_name: 'Network Engineer',
    salary: 85000,
    company: 'NetCorp',
    description: 'We are seeking a skilled Network Engineer to design and implement scalable network solutions. The candidate should have hands-on experience with network protocols and a thorough understanding of cybersecurity principles.',
    job_type: 'Full-time',
    location_id: 4, 
    category_id: 5, //  "Network Engineering" category has id 5
  },
  {
    role_name: 'DevOps Engineer',
    salary: 90000,
    company: 'TechOps',
    description: 'Join our team to automate and streamline our software development processes. The ideal candidate will have experience with CI/CD pipelines and a strong background in Linux systems administration.',
    job_type: 'Full-time',
    location_id: 5, 
    category_id: 6, //  "DevOps" category has id 6
  },
  {
    role_name: 'Machine Learning Engineer',
    salary: 95000,
    company: 'AI Solutions',
    description: 'We are looking for a Machine Learning Engineer to develop and deploy machine learning models. The candidate should have a deep understanding of machine learning algorithms and experience with frameworks such as TensorFlow or PyTorch.',
    job_type: 'Full-time',
    location_id: 6,
    category_id: 7, //  "Machine Learning" category has id 7
  },
  {
    role_name: 'Cybersecurity Analyst',
    salary: 90000,
    company: 'SecureTech',
    description: 'Seeking a skilled Cybersecurity Analyst to protect our organization from cyber threats. The successful candidate will have experience in threat detection and incident response, with a strong understanding of security best practices.',
    job_type: 'Full-time',
    location_id: 7,
    category_id: 8, //  "Cybersecurity" category has id 8
  },
  {
    role_name: 'Frontend Developer',
    salary: 80000,
    company: 'WebWorks',
    description: 'We are looking for a Frontend Developer to create beautiful and responsive user interfaces. The candidate should have a passion for web development and proficiency in modern frontend frameworks such as React or Vue.js.',
    job_type: 'Full-time',
    location_id: 8, 
    category_id: 1, // "Software Development" category has id 1
  },
  {
    role_name: 'Database Administrator',
    salary: 85000,
    company: 'DataWorks',
    description: 'Join our team to manage and optimize our database systems for performance and reliability. The ideal candidate will have experience with relational and NoSQL databases, along with strong troubleshooting skills.',
    job_type: 'Full-time',
    location_id: 9, 
    category_id: 9, //"Database Administration" category has id 9
  },
  {
    role_name: 'Product Manager',
    salary: 100000,
    company: 'ProductTech',
    description: 'Lead the development of innovative products and drive product strategy. The successful candidate will have experience in product management, with a focus on market research and product roadmap planning.',
    job_type: 'Full-time',
    location_id: 10,
    category_id: 10, // "Product Management" category has id 10 
  },
  {
    role_name: 'Data Scientist',
    salary: 95000,
    company: 'DataWorks',
    description: 'Join our team as a Data Scientist II to tackle challenging data problems and drive data-driven decisions. The candidate should have experience in statistical analysis and proficiency in programming languages such as Python or R.',
    job_type: 'Full-time',
    location_id: 10,
    category_id: 2, //"Data Analysis" category has id 2
  },
  {
    role_name: 'AI Research Scientist',
    salary: 110000,
    company: 'AI Innovations',
    description: 'We are seeking an AI Research Scientist to conduct cutting-edge research in artificial intelligence and contribute to the development of innovative AI solutions. In this role, you will be responsible for exploring advanced AI algorithms and techniques, leveraging your expertise in machine learning, natural language processing, and computer vision. You will collaborate with multidisciplinary teams to address complex problems and drive AI-driven innovation across various domains, including healthcare, finance, and autonomous systems. The ideal candidate should have a strong publication record in top-tier AI conferences and journals, along with excellent programming skills in languages such as Python, R, or Java. If you are passionate about pushing the boundaries of AI research and applying your skills to real-world challenges, we encourage you to apply.',
    job_type: 'Full-time',
    location_id: 6,
    category_id: 11, // "Artificial Intelligence Research" category has id 11
  },
  {
    role_name: 'Blockchain Developer',
    salary: 90000,
    company: 'CryptoTech',
    description: 'CryptoTech is looking for a skilled and motivated Blockchain Developer to join our dynamic team. As a Blockchain Developer, you will play a key role in the design and development of decentralized applications (dApps) and smart contracts on blockchain platforms such as Ethereum, Hyperledger, or Binance Smart Chain. You will collaborate with cross-functional teams to understand business requirements and translate them into blockchain solutions that address real-world problems in finance, supply chain, and digital identity. The ideal candidate should have a solid understanding of blockchain technology and cryptographic principles, along with hands-on experience in smart contract development using languages like Solidity or Go. If you are passionate about blockchain technology and eager to work on innovative projects at the forefront of decentralized ecosystems, we would love to hear from you.',
    job_type: 'Full-time',
    location_id: 2,
    category_id: 12, // "Blockchain Development" category has id 12
  },
  {
    role_name: 'Game Developer',
    salary: 85000,
    company: 'GameWorks',
    description: 'Join our team as a Game Developer and be part of creating immersive and captivating gaming experiences for players worldwide. As a Game Developer at GameWorks, you will have the opportunity to work on a variety of projects spanning different genres and platforms, from mobile games to console and PC titles. You will collaborate with talented artists, designers, and programmers to bring game concepts to life, from initial concept to final release. The ideal candidate should have a passion for gaming and a strong understanding of game design principles, along with proficiency in game development engines like Unity or Unreal Engine. If you are creative, driven, and eager to contribute to the world of gaming, we want to hear from you!',
    job_type: 'Full-time',
    location_id: 11,
    category_id: 13, // "Game Development" category has id 13
  },
  {
    role_name: 'IoT Engineer',
    salary: 95000,
    company: 'IoT Solutions',
    description: 'IoT Solutions is seeking a talented IoT Engineer to join our innovative team and drive the development of cutting-edge Internet of Things solutions. As an IoT Engineer, you will be responsible for designing, prototyping, and deploying IoT systems for various industries, including smart cities, industrial automation, and healthcare. You will work closely with cross-functional teams to gather requirements, design architectures, and integrate IoT technologies such as sensors, actuators, and communication protocols. The ideal candidate should have a strong background in electrical engineering or computer science, with expertise in IoT platforms, cloud services, and data analytics. If you are passionate about leveraging IoT technology to solve real-world problems and shape the future of connected devices, we would love to hear from you!',
  },
  {
    role_name: 'AI Research Scientist',
    salary: 110000,
    company: 'AI Innovations',
    description: 'We are seeking an experienced and visionary AI Research Scientist to join our dynamic team. In this role, you will lead and conduct cutting-edge research in artificial intelligence, exploring novel algorithms and methodologies to advance the field. As an AI Research Scientist, you will have the opportunity to contribute to the development of innovative AI solutions across various domains, including natural language processing, computer vision, and machine learning. The ideal candidate should possess a strong background in mathematics, statistics, and computer science, with expertise in programming languages such as Python, R, or C++. Additionally, candidates with experience in deep learning frameworks like TensorFlow or PyTorch will be highly valued. If you are passionate about pushing the boundaries of AI research and eager to make a meaningful impact, we encourage you to apply.',
    job_type: 'Full-time',
    location_id: 6,
    category_id: 11, // "Artificial Intelligence Research" category has id 11
  },
  {
    role_name: 'Blockchain Developer',
    salary: 90000,
    company: 'CryptoTech',
    description: 'CryptoTech is looking for a talented and enthusiastic Blockchain Developer to join our innovative team. As a Blockchain Developer, you will be responsible for designing, implementing, and maintaining decentralized applications (dApps) and smart contracts on blockchain platforms such as Ethereum, Hyperledger, or Binance Smart Chain. You will collaborate with cross-functional teams to identify and develop blockchain solutions that address real-world challenges in various industries, including finance, supply chain, and healthcare. The ideal candidate should have a solid understanding of blockchain technology and cryptographic principles, along with proficiency in programming languages such as Solidity, Go, or Java. Experience with blockchain development frameworks like Truffle or Web3.js is desirable. If you are passionate about blockchain technology and eager to contribute to the future of decentralized ecosystems, we would love to hear from you.',
    job_type: 'Full-time',
    location_id: 2,
    category_id: 12, // "Blockchain Development" category has id 12
  },
  {
    role_name: 'Game Developer',
    salary: 85000,
    company: 'GameWorks',
    description: 'GameWorks is seeking a creative and experienced Game Developer to join our passionate team of gaming enthusiasts. As a Game Developer, you will play a key role in the development of exciting and immersive gaming experiences for players worldwide. You will collaborate closely with artists, designers, and other developers to conceptualize, prototype, and implement game features and mechanics. The ideal candidate should have a strong understanding of game design principles, along with proficiency in game development frameworks such as Unity or Unreal Engine. Experience with programming languages like C# or C++ is essential, and familiarity with 3D graphics programming and physics simulation will be advantageous. If you are a self-motivated individual with a passion for gaming and a desire to create memorable player experiences, we would love to have you on our team.',
    job_type: 'Full-time',
    location_id: 11,
    category_id: 13, // "Game Development" category has id 13
  },
  {
    role_name: 'IoT Engineer',
    salary: 95000,
    company: 'IoT Solutions',
    description: 'IoT Solutions is looking for a skilled and innovative IoT Engineer to drive the development of cutting-edge Internet of Things (IoT) solutions. As an IoT Engineer, you will be responsible for designing, implementing, and maintaining IoT systems and devices for various applications, including smart cities, industrial automation, and healthcare. You will work closely with hardware and software teams to integrate sensors, actuators, and communication protocols into IoT architectures, ensuring reliability, scalability, and security. The ideal candidate should have a strong background in electrical engineering or computer science, with expertise in IoT technologies such as MQTT, LoRaWAN, or Zigbee. Proficiency in programming languages like Python, C, or Java is essential, and experience with IoT platforms such as AWS IoT or Azure IoT will be advantageous. If you are passionate about leveraging IoT technology to solve real-world problems and drive digital transformation, we want to hear from you.',
    job_type: 'Full-time',
    location_id: 10,
    category_id: 14, // "Internet of Things (IoT)" category has id 14
  },
  {
    role_name: 'Embedded Systems Engineer',
    salary: 90000,
    company: 'TechEmbedded',
    description: 'TechEmbedded is seeking a talented and motivated Embedded Systems Engineer to join our growing team. As an Embedded Systems Engineer, you will be responsible for designing, developing, and testing embedded software for a variety of applications, including consumer electronics, automotive systems, and IoT devices. You will work closely with hardware engineers to optimize system performance and ensure seamless integration of software and hardware components. The ideal candidate should have a solid understanding of embedded systems architecture and real-time operating systems, along with proficiency in programming languages such as C, C++, or assembly language. Experience with microcontrollers, DSPs, and communication interfaces like UART, SPI, or I2C is desirable. If you are passionate about embedded systems development and enjoy tackling complex engineering challenges, we would love to have you on our team.',
    job_type: 'Full-time',
    location_id: 5,
    category_id: 15, // "Embedded Systems" category has id 15
  }, 
  {
    role_name: 'Software Quality Assurance Engineer',
    salary: 80000,
    company: 'QA Tech Solutions',
    description: 'QA Tech Solutions is seeking a detail-oriented Software Quality Assurance Engineer to ensure the quality and reliability of our software products. As a QA Engineer, you will be responsible for designing and executing test plans, identifying and documenting defects, and collaborating with development teams to resolve issues. The ideal candidate will have a strong understanding of software testing methodologies, along with experience in automated testing tools and techniques. If you are passionate about delivering high-quality software and ensuring an exceptional user experience, we want to hear from you.',
    job_type: 'Full-time',
    location_id: 10,
    category_id: 1, // "Software Development" category has id 1
  },
  {
    role_name: 'Data Analyst',
    salary: 75000,
    company: 'DataInsights',
    description: 'DataInsights is looking for a skilled Data Analyst to extract insights from complex datasets and drive data-driven decision-making. The Data Analyst will be responsible for collecting, cleaning, and analyzing data to uncover trends, patterns, and correlations. The ideal candidate should have strong analytical skills, proficiency in statistical analysis and data visualization tools, and experience working with databases and querying languages. If you are passionate about turning data into actionable insights and driving business growth, we encourage you to apply.',
    job_type: 'Full-time',
    location_id: 11,
    category_id: 2, // "Data Analysis" category has id 2
  },
  {
    role_name: 'UI/UX Researcher',
    salary: 85000,
    company: 'UserResearch',
    description: 'UserResearch is seeking a UI/UX Researcher to conduct user research and gather insights to inform the design and development of our digital products. The UI/UX Researcher will be responsible for planning and conducting user studies, interviews, and surveys to understand user needs and preferences. The ideal candidate should have a strong background in human-computer interaction, usability testing, and qualitative research methods. Proficiency in prototyping and wireframing tools, as well as experience working closely with design and development teams, is desirable. If you are passionate about creating user-centric designs and enhancing the overall user experience, we would love to have you on our team.',
    job_type: 'Full-time',
    location_id: 12,
    category_id: 3, // "Design" category has id 3
  },
  { 
    role_name: 'Cloud Solutions Architect',
    salary: 110000,
    company: 'CloudArchitects',
    description: 'CloudArchitects is looking for an experienced Cloud Solutions Architect to design and implement scalable and reliable cloud solutions for our clients. The Cloud Solutions Architect will work closely with stakeholders to understand business requirements and develop cloud architectures that meet performance, security, and cost objectives. The ideal candidate should have a strong understanding of cloud computing platforms, infrastructure as code, and cloud-native technologies. Experience with cloud migration, hybrid cloud environments, and container orchestration platforms is desirable. If you are passionate about cloud technology and have a track record of delivering innovative solutions, we want to hear from you.',
    job_type: 'Full-time',
    location_id: 12,
    category_id: 4, // "Cloud Computing" category has id 4
  },
  {
    role_name: 'Network Security Engineer',
    salary: 95000,
    company: 'SecureNetworks',
    description: 'SecureNetworks is seeking a talented Network Security Engineer to design, implement, and manage secure network infrastructures. The Network Security Engineer will be responsible for identifying security vulnerabilities, conducting risk assessments, and implementing security controls to protect against cyber threats. The ideal candidate should have a strong understanding of network protocols, firewall configurations, and intrusion detection systems. Experience with security best practices, penetration testing, and security compliance frameworks is desirable. If you are passionate about cybersecurity and have a proactive approach to security challenges, we encourage you to apply.',
    job_type: 'Full-time',
    location_id: 14,
    category_id: 5, // "Network Engineering" category has id 5
  },
  {
    role_name: 'Release Manager',
    salary: 90000,
    company: 'ReleaseTech',
    description: 'ReleaseTech is looking for a dedicated Release Manager to oversee the planning, coordination, and execution of software releases. The Release Manager will work closely with development, QA, and operations teams to ensure smooth and timely releases while minimizing risks and disruptions. The ideal candidate should have strong project management skills, experience with release management processes, and excellent communication and stakeholder management skills. Knowledge of CI/CD pipelines, version control systems, and release automation tools is desirable. If you are passionate about delivering high-quality software and thrive in a fast-paced environment, we want to hear from you.',
    job_type: 'Full-time',
    location_id: 15,
    category_id: 6, // "DevOps" category has id 6
  },
  {
    role_name: 'AI Ethics Researcher',
    salary: 100000,
    company: 'EthicalAI',
    description: 'EthicalAI is seeking an AI Ethics Researcher to explore the ethical implications of artificial intelligence and develop frameworks for responsible AI development and deployment. The AI Ethics Researcher will conduct research on topics such as bias, fairness, transparency, and accountability in AI systems. The ideal candidate should have a strong background in ethics, philosophy, or social sciences, with expertise in AI ethics and related fields. Experience with interdisciplinary research, stakeholder engagement, and policy development is desirable. If you are passionate about shaping the future of AI in a responsible and ethical manner, we encourage you to apply.',
    job_type: 'Full-time',
    location_id: 3,
    category_id: 7, // "Machine Learning" category has id 7
  },
  {
    role_name: 'Incident Response Analyst',
    salary: 95000,
    company: 'IncidentResponse',
    description: 'IncidentResponse is seeking a skilled Incident Response Analyst to investigate and respond to cybersecurity incidents. The Incident Response Analyst will be responsible for detecting security breaches, coordinating incident response activities, and implementing remediation measures to contain and mitigate threats. The ideal candidate should have experience in incident detection and analysis, threat intelligence, and digital forensics. Strong analytical and problem-solving skills, as well as knowledge of security frameworks and regulations, are desirable. If you are passionate about cybersecurity and have a proactive approach to incident response, we would love to have you on our team.',
    job_type: 'Full-time',
    location_id: 10,
    category_id: 8, // "Cybersecurity" category has id 8
  },
  {
    role_name: 'Frontend Development Team Lead',
    salary: 110000,
    company: 'FrontendLeaders',
    description: 'FrontendLeaders is looking for a talented Frontend Development Team Lead to lead and mentor our frontend development team. The Frontend Development Team Lead will be responsible for overseeing the design, development, and maintenance of frontend applications, ensuring high-quality code and adherence to best practices. The ideal candidate should have strong technical skills in frontend development, along with leadership experience and the ability to communicate effectively with cross-functional teams. Proficiency in modern frontend frameworks, such as React or Angular, and experience with version control systems is desirable. If you are passionate about creating beautiful and intuitive user experiences, we encourage you to apply.',
    job_type: 'Full-time',
    location_id: 13,
    category_id: 9, // "Frontend Development" category has id 9
  },
  { 
    role_name: 'Software Development Manager',
    salary: 120000,
    company: 'CodeLeaders',
    description: 'CodeLeaders is seeking an experienced Software Development Manager to lead our team of talented software engineers. As a Software Development Manager, you will be responsible for overseeing the planning, execution, and delivery of software projects, ensuring high quality and timely releases. You will mentor and coach team members, foster a culture of collaboration and innovation, and drive continuous improvement in development processes. The ideal candidate should have a strong background in software engineering, with proven leadership skills and a track record of delivering successful software products. Excellent communication and interpersonal skills are essential, along with the ability to manage multiple projects and priorities effectively. If you are passionate about leading high-performing teams and driving technical excellence, we want to hear from you.',
    job_type: 'Full-time',
    location_id: 4,
    category_id: 1, // "Software Development" category has id 1
  },
  {
    role_name: 'Data Engineer',
    salary: 100000,
    company: 'DataTech',
    description: 'DataTech is looking for a skilled Data Engineer to design and build scalable data pipelines and systems for our analytics and machine learning initiatives. As a Data Engineer, you will work closely with data scientists and analysts to understand data requirements, source and ingest data from various platforms and sources, and transform and model data for analysis and insights. The ideal candidate should have a strong background in data engineering, with expertise in big data technologies such as Hadoop, Spark, or Kafka, as well as proficiency in programming languages like Python or Scala. Experience with cloud platforms and services, data warehousing solutions, and ETL processes is desirable. If you are passionate about leveraging data to drive business decisions and innovation, we encourage you to apply.',
    job_type: 'Full-time',
    location_id: 5,
    category_id: 2, // "Data Analysis" category has id 2
  },
  {
    role_name: 'User Experience Researcher',
    salary: 90000,
    company: 'UserInsights',
    description: 'UserInsights is seeking a User Experience Researcher to conduct qualitative and quantitative research to inform the design and development of our digital products. As a User Experience Researcher, you will plan and execute user research studies, gather and analyze user feedback and behaviour data, and generate actionable insights to improve the user experience. The ideal candidate should have a strong understanding of research methodologies, usability testing techniques, and data analysis tools, as well as excellent communication and presentation skills. Experience with UX/UI design principles, prototyping tools, and agile development methodologies is desirable. If you are passionate about understanding user needs and creating intuitive and engaging digital experiences, we want to hear from you.',
    job_type: 'Full-time',
    location_id: 10,
    category_id: 3, // "Design" category has id 3
  },
  {
    role_name: 'Cloud Solutions Architect',
    salary: 130000,
    company: 'CloudGenius',
    description: 'CloudGenius is looking for a Cloud Solutions Architect to design and implement cloud architectures and solutions that meet our business and technical requirements. As a Cloud Solutions Architect, you will work closely with stakeholders to understand their needs, assess existing IT environments, and design cloud solutions that are scalable, reliable, and cost-effective. The ideal candidate should have a strong background in cloud computing, with expertise in cloud platforms such as AWS, Azure, or Google Cloud, as well as proficiency in infrastructure as code tools like Terraform or CloudFormation. Experience with microservices architectures, containerization technologies, and serverless computing is desirable. If you are passionate about cloud technology and enjoy designing innovative solutions, we encourage you to apply.',
    job_type: 'Full-time',
    location_id: 6,
    category_id: 4, // "Cloud Computing" category has id 4
  },
  {
    role_name: 'Network Security Engineer',
    salary: 110000,
    company: 'SecureNet',
    description: 'SecureNet is seeking a Network Security Engineer to design, implement, and manage secure network infrastructures that protect our organization from cyber threats. As a Network Security Engineer, you will be responsible for configuring firewalls, intrusion detection/prevention systems, and other security appliances, as well as monitoring network traffic for signs of security breaches or malicious activity. The ideal candidate should have a strong understanding of network protocols, cybersecurity best practices, and threat intelligence, as well as hands-on experience with security tools and technologies. Certifications such as CISSP, CCNA, or CEH are desirable. If you are passionate about cybersecurity and enjoy solving complex security challenges, we want to hear from you.',
    job_type: 'Full-time',
    location_id: 7,
    category_id: 5, // "Network Engineering" category has id 5
  },
  {
    role_name: 'Release Engineer',
    salary: 100000,
    company: 'ReleaseMaster',
    description: 'ReleaseMaster is seeking a Release Engineer to manage and automate software release processes, ensuring smooth and timely deployments across development, testing, and production environments. As a Release Engineer, you will work closely with development, QA, and operations teams to implement CI/CD pipelines, automate build and deployment workflows, and troubleshoot release-related issues. The ideal candidate should have a strong background in release management, with expertise in configuration management tools such as Jenkins, GitLab CI, or TeamCity, as well as scripting languages like Python or Bash. Experience with containerization technologies, version control systems, and release orchestration tools is desirable. If you are passionate about streamlining software delivery and improving release quality, we encourage you to apply.',
    job_type: 'Full-time',
    location_id: 9,
    category_id: 6, // "DevOps" category has id 6
  },
  {
    role_name: 'Deep Learning Engineer',
    salary: 120000,
    company: 'DeepAI',
    description: 'DeepAI is looking for a talented Deep Learning Engineer to design, develop, and deploy deep learning models that power our AI-driven products and solutions. As a Deep Learning Engineer, you will work on cutting-edge projects in computer vision, natural language processing, and speech recognition, applying state-of-the-art deep learning techniques to solve complex problems. The ideal candidate should have a strong background in machine learning and deep learning, with hands-on experience in frameworks such as TensorFlow, PyTorch, or Keras, as well as proficiency in programming languages like Python or C++. Experience with cloud-based AI services, GPU computing, and model optimization techniques is desirable. If you are passionate about artificial intelligence and enjoy working on challenging and impactful projects, we want to hear from you.',
    job_type: 'Full-time',
    location_id: 8,
    category_id: 7, // "Machine Learning" category has id 7
  },
  {
    role_name: 'Incident Response Analyst',
    salary: 110000,
    company: 'CyberDefense',
    description: 'CyberDefense is seeking an Incident Response Analyst to investigate and respond to cybersecurity incidents, ensuring the integrity, confidentiality, and availability of our organization\'s systems and data. As an Incident Response Analyst, you will triage security alerts, conduct forensic investigations, and coordinate incident response activities with internal teams and external stakeholders. The Incident Response Analyst will play a critical role in identifying security threats, analyzing attack vectors, and implementing mitigation strategies to protect against future incidents. The ideal candidate should have a strong understanding of cybersecurity, with hands-on experience in incident response, forensics, and incident management. If you are passionate about cybersecurity and enjoy solving complex cybersecurity challenges, we encourage you to apply.',
    job_type: 'Full-time',
    location_id: 10,
    category_id: 8, // "Cyber Security" category has id 8
  },
  {
    role_name: 'Quantum Computing Researcher',
    salary: 120000,
    company: 'QuantumTech',
    description: 'QuantumTech is seeking a Quantum Computing Researcher to conduct groundbreaking research in quantum computing and quantum information science. In this role, you will explore quantum algorithms, quantum error correction, and quantum hardware development to advance the capabilities of quantum computing systems. You will collaborate with leading experts in academia and industry to tackle fundamental challenges in quantum computation and contribute to the development of practical quantum applications. The ideal candidate should have a strong background in quantum physics, mathematics, and computer science, with experience in quantum programming languages such as Qiskit or Cirq. If you are excited about the potential of quantum computing to revolutionize computation and solve complex problems, we encourage you to apply.',
    job_type: 'Full-time',
    location_id: 9,
    category_id: 16, // "Quantum Computing" category has id 16
  },
  {
    role_name: 'Cybersecurity Penetration Tester',
    salary: 100000,
    company: 'CyberSecure',
    description: 'CyberSecure is looking for a Cybersecurity Penetration Tester to assess and strengthen the security posture of our organization\'s systems and networks. As a Penetration Tester, you will conduct simulated cyber attacks and penetration tests to identify vulnerabilities and weaknesses in our defenses. You will work closely with security teams to develop remediation strategies and provide recommendations for improving security controls. The ideal candidate should have hands-on experience with penetration testing tools and techniques, along with a deep understanding of network protocols and operating systems. Certifications such as OSCP, CEH, or CISSP are desirable. If you are passionate about cybersecurity and enjoy the challenge of outsmarting attackers, we want to hear from you.',
    job_type: 'Full-time',
    location_id: 7,
    category_id: 8, // "Cybersecurity" category has id 8
  },
  {
    role_name: 'Augmented Reality Developer',
    salary: 95000,
    company: 'AR Innovations',
    description: 'AR Innovations is seeking an Augmented Reality Developer to create immersive and interactive AR experiences for mobile and wearable devices. As an AR Developer, you will design and develop AR applications and experiences using ARKit, ARCore, or similar frameworks. You will collaborate with designers and 3D artists to bring AR concepts to life, from concept to deployment. The ideal candidate should have a strong background in mobile app development, 3D graphics programming, and user interface design. Experience with Unity3D, Unreal Engine, or similar game engines is desirable. If you are passionate about pushing the boundaries of augmented reality and creating magical experiences for users, we encourage you to apply.',
    job_type: 'Full-time',
    location_id: 12,
    category_id: 17, // "Augmented Reality (AR)" category has id 17
  },
  {
    role_name: 'Ethical Hacker',
    salary: 105000,
    company: 'SecureWorks',
    description: 'SecureWorks is seeking an Ethical Hacker to help identify and mitigate security vulnerabilities in our clients\' systems and networks. As an Ethical Hacker, you will conduct authorized penetration tests and vulnerability assessments to assess the security posture of systems, applications, and networks. You will provide actionable recommendations to clients and assist in remediation efforts to address identified security issues. The ideal candidate should have hands-on experience with a variety of security testing tools and techniques, along with a strong understanding of common security vulnerabilities and attack vectors. Certifications such as CEH, OSCP, or GPEN are desirable. If you are passionate about cybersecurity and have a knack for thinking like a hacker to defend against real threats, we want to hear from you.',
    job_type: 'Full-time',
    location_id: 7,
    category_id: 8, // "Cybersecurity" category has id 8
  },
  {
    role_name: 'Backend Developer',
    salary: 90000,
    company: 'CodeCraft',
    description: 'CodeCraft is seeking a skilled Backend Developer to design, develop, and maintain server-side applications and APIs. As a Backend Developer, you will work closely with frontend developers, architects, and product managers to build scalable and reliable backend systems. You will write clean, efficient code using languages such as Python, Java, or Node.js, and design database schemas and data models. The ideal candidate should have experience with backend frameworks like Django, Spring Boot, or Express.js, along with knowledge of RESTful API design principles. Experience with cloud platforms such as AWS or Azure is a plus. If you are passionate about backend development and enjoy solving complex technical challenges, we encourage you to apply.',
    job_type: 'Full-time',
    location_id: 1,
    category_id: 1, // "Software Development" category has id 1
  },
  {
      role_name: 'Data Analyst',
      salary: 80000,
      company: 'DataInsights',
      description: 'DataInsights is looking for a talented Data Analyst to turn data into insights that drive business decisions. As a Data Analyst, you will collect, clean, and analyze large datasets to identify trends, patterns, and opportunities. You will create data visualizations and reports to communicate findings to stakeholders and support decision-making processes. The ideal candidate should have strong analytical skills, proficiency in SQL and data analysis tools such as Python or R, and the ability to work with structured and unstructured data. Experience with BI tools like Tableau or Power BI is desirable. If you are passionate about data and have a knack for uncovering valuable insights, we want to hear from you.',
      job_type: 'Full-time',
      location_id: 3,
      category_id: 2, // "Data Analysis" category has id 2
  },
  {
      role_name: 'UX Researcher',
      salary: 85000,
      company: 'UserInsight',
      description: 'UserInsight is seeking a UX Researcher to conduct user research and gather insights to inform product design and development. As a UX Researcher, you will plan and conduct user studies, interviews, and surveys to understand user needs, behaviours, and preferences. You will analyse research data and generate actionable insights to drive UX improvements and innovation. The ideal candidate should have a background in psychology, human-computer interaction, or a related field, with experience in qualitative and quantitative research methods. Strong communication and collaboration skills are essential. If you are passionate about understanding user behaviour and creating exceptional user experiences, we would love to have you on our team.',
      job_type: 'Full-time',
      location_id: 1,
      category_id: 3, // "Design" category has id 3
  },
  {
      role_name: 'Cloud Solutions Architect',
      salary: 110000,
      company: 'CloudGenius',
      description: 'CloudGenius is looking for a Cloud Solutions Architect to design and implement cloud solutions that meet the needs of our clients. As a Cloud Solutions Architect, you will work closely with clients to understand their requirements and design scalable, secure, and cost-effective cloud architectures. You will oversee the implementation of cloud solutions, providing guidance and best practices to development teams. The ideal candidate should have a deep understanding of cloud computing technologies and services, along with experience in architecture design and cloud migration projects. Certifications such as AWS Certified Solutions Architect or Azure Solutions Architect are highly desirable. If you are passionate about cloud technology and enjoy designing innovative solutions, we encourage you to apply.',
      job_type: 'Full-time',
      location_id: 2,
      category_id: 4, // "Cloud Computing" category has id 4
  },
];

const seedRoles = () => Role.bulkCreate(roleData);

module.exports = seedRoles;
