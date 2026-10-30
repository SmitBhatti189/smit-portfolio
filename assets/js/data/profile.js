/**
 * Portfolio content — single source of truth for everything rendered on the page.
 * All entries come from Smit Bhatti's CV. Do not add content that is not backed by the CV
 * (or explicitly provided by Smit). See PROJECT_DOCUMENTATION.md → "Content rules".
 */

export const profile = {
  name: 'Smit Bhatti',
  initials: 'SB',
  title: 'Associate Software Developer',
  location: 'Rajkot, Gujarat, India',
  photo: {
    webp: 'assets/img/profile.webp',
    jpg: 'assets/img/profile.jpg',
    width: 452,
    height: 565,
    alt: 'Portrait of Smit Bhatti smiling, wearing glasses',
  },
  tagline:
    'I build and optimise features across .NET, Angular and PostgreSQL — working with Kafka, Redis, microservices and micro-front-end architecture.',
  about: [
    'I am an Associate Software Developer at TSS Consultancy Pvt. Ltd. in Rajkot, where I implement features using Kafka and Redis within a microservices and micro-front-end architecture, and refactor code to improve performance and maintainability.',
    'I hold a Bachelor of Technology in Computer Science and Engineering from Marwadi University. Before joining full-time, I built an encryption and decryption SDK in Go during an internship at TSS Consultancy, and developed a lead-generation website for Sampaarsh Technology.',
  ],
  interests: {
    technical: ['Front-end Development', 'Software Development'],
    personal: ['Travel', 'Anime', 'Badminton'],
  },
  softSkills: ['Communication', 'Teamwork', 'Time Management', 'Analysis'],
  contact: {
    email: 'smitsbhatti93@gmail.com',
    linkedin: 'https://www.linkedin.com/in/smit-bhatti',
    github: 'https://github.com/SmitBhatti189',
  },
};

export const highlights = [
  { value: 'Oct 2024', label: 'Developer at TSS Consultancy' },
  { value: '2', label: 'Internships completed' },
  { value: 'B.Tech', label: 'Computer Science & Engineering' },
];

export const skills = [
  { group: 'Programming Languages', items: ['C / C++', 'C# (.NET)', 'Go'] },
  { group: 'Frameworks & Runtimes', items: ['.NET', 'Angular', 'Node.js', 'Express.js', 'Laravel'] },
  { group: 'Databases', items: ['PostgreSQL', 'MongoDB'] },
  { group: 'Architecture & Messaging', items: ['Microservices', 'Micro-front-ends', 'Kafka', 'Redis'] },
  { group: 'Web', items: ['HTML', 'CSS', 'JavaScript'] },
  { group: 'Tools', items: ['Git', 'VS Code', 'Postman'] },
];

export const coursework = [
  'Data Structures',
  'Web Development',
  'Database Management',
  'Object-Oriented Programming',
];

export const experience = [
  {
    role: 'Associate Software Developer',
    organization: 'TSS Consultancy Pvt. Ltd.',
    type: 'Full-time',
    location: 'Rajkot, Gujarat',
    period: 'Oct 2024 – Present',
    points: [
      'Implemented features using Kafka and Redis within microservices and micro-front-end architecture.',
      'Refactored and optimised code to improve performance and maintainability.',
      'Collaborated with the Automation Team to improve environment stability, enabling smoother deployments.',
    ],
    tech: ['.NET', 'Angular', 'PostgreSQL', 'Kafka', 'Redis'],
  },
  {
    role: 'SDK Builder Intern',
    organization: 'TSS Consultancy Pvt. Ltd.',
    type: 'Internship',
    location: 'Rajkot, Gujarat',
    period: 'Dec 2023 – Mar 2024',
    points: [
      'Developed an encryption and decryption SDK for TSS Consultancy, covering cryptography, algorithm selection and secure software development.',
      'Integrated an industry-standard hashing algorithm to ensure data integrity.',
    ],
    tech: ['Go'],
  },
  {
    role: 'Web Developer Intern',
    organization: 'Sampaarsh Technology',
    type: 'Internship',
    location: 'Rajkot, Gujarat',
    period: 'Jun 2023 – Jul 2023',
    points: [
      'Developed a dynamic lead-generation website for Sampaarsh Technology.',
      'The website attracts potential interns and developers, expanding the company’s talent pool.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: { label: 'sampaarsh.com', href: 'https://www.sampaarsh.com' },
  },
];

export const projects = [
  {
    name: 'Visit your Barber',
    status: 'In development',
    period: 'Jul 2026 – Present',
    description:
      'A practice project for booking appointments with a hair specialist and ordering hair- and skin-care products online.',
    tech: ['Angular', 'Node.js', 'Express.js', 'PostgreSQL'],
    links: [],
  },
  {
    name: 'Encryption & Decryption SDK',
    status: 'Internship project',
    period: 'Dec 2023 – Mar 2024',
    description:
      'An SDK built for TSS Consultancy providing encryption and decryption, with an industry-standard hashing algorithm for data integrity.',
    tech: ['Go', 'Cryptography'],
    links: [],
  },
  {
    name: 'Sampaarsh Technology Website',
    status: 'Internship project',
    period: 'Jun 2023 – Jul 2023',
    description:
      'A dynamic lead-generation website that helps Sampaarsh Technology attract potential interns and developers.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    links: [{ label: 'Live site', href: 'https://www.sampaarsh.com' }],
  },
];

export const education = [
  {
    qualification: 'Bachelor of Technology — Computer Science and Engineering',
    institution: 'Marwadi University, Rajkot',
    period: '2021 – 2025',
    result: 'CGPA 7.70',
  },
  {
    qualification: 'Senior Secondary Education',
    institution: 'Javiya Schooling System, Junagadh',
    period: '2020 – 2021',
    result: '87.84%',
  },
  {
    qualification: 'Junior Secondary Education',
    institution: 'Alpha High School, Junagadh',
    period: '2019 – 2020',
    result: '77.00%',
  },
];

export const certifications = [
  { title: 'Web Development Internship', issuer: 'Sampaarsh Technology' },
  { title: 'SDK Development Internship', issuer: 'TSS Consultancy Pvt. Ltd.' },
];
