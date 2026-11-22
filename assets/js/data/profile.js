/**
 * Portfolio content — single source of truth for everything rendered on the page.
 * All entries come from Smit Bhatti's resume (updated November 2026). Do not add content
 * that is not backed by the resume (or explicitly provided by Smit).
 * See PROJECT_DOCUMENTATION.md → "Content rules".
 */

export const profile = {
  name: 'Smit Bhatti',
  initials: 'SB',
  title: 'Associate Software Developer',
  location: 'Rajkot, Gujarat, India',
  photo: {
    webpSrcset: 'assets/img/profile-480.webp 480w, assets/img/profile-960.webp 960w',
    jpg: 'assets/img/profile-640.jpg',
    width: 640,
    height: 800,
    alt: 'Portrait of Smit Bhatti smiling, wearing glasses and a black shirt',
  },
  tagline:
    'Backend-focused software developer with 2+ years of experience building microservices in .NET, PostgreSQL and Angular, with hands-on work in Kafka and Redis.',
  aboutTitle: 'Backend developer who owns features from development to production',
  about: [
    'I am a backend-focused Associate Software Developer at TSS Consultancy Pvt. Ltd. in Rajkot, with 2+ years of experience building microservices in .NET (C#), PostgreSQL and Angular — using Kafka for event-driven messaging and Redis for caching.',
    'I take end-to-end ownership of my features, from development through production support. My work spans name-matching algorithms for the screening module, security fixes and SHA-256 based hashing, and integrations that store API results in client-provided secure storage. I am known for dependable, on-time delivery in a Scrum team and work closely with other teams, including Java-based ones.',
    'I hold a Bachelor of Technology in Computer Science and Engineering from Marwadi University. Outside work, I am building Visit Your Barber, a barber shop management application, by leading AI coding agents through requirements, architecture and review.',
  ],
  interests: {
    technical: ['Backend Development', 'Software Development'],
    personal: ['Travel', 'Anime', 'Badminton'],
  },
  strengths: ['End-to-end ownership', 'On-time delivery', 'Production support', 'Cross-team collaboration'],
  resume: {
    href: 'assets/docs/Smit_Bhatti_Resume.pdf',
    fileName: 'Smit_Bhatti_Resume.pdf',
  },
  contact: {
    email: 'smitsbhatti93@gmail.com',
    phone: '+919426369444',
    phoneLabel: '+91 94263 69444',
    linkedin: 'https://www.linkedin.com/in/smit-bhatti-27735826a',
    linkedinLabel: 'linkedin.com/in/smit-bhatti-27735826a',
    github: 'https://github.com/smitbhatti189',
    githubLabel: 'github.com/smitbhatti189',
  },
};

export const highlights = [
  { value: '2+ years', label: 'Professional experience' },
  { value: 'Microservices', label: '.NET · PostgreSQL · Kafka · Redis' },
  { value: 'B.Tech', label: 'Computer Science & Engineering' },
];

export const skills = [
  { group: 'Languages', items: ['C#', 'Java', 'Go', 'C / C++', 'TypeScript', 'JavaScript', 'SQL'] },
  { group: 'Frameworks', items: ['.NET', 'Angular', 'Node.js', 'Express.js'] },
  { group: 'Databases & Data', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
  { group: 'Messaging & Architecture', items: ['Kafka', 'Microservices', 'Micro-frontends'] },
  { group: 'Security', items: ['SHA-256 hashing', 'AES', 'RSA', 'Digital signatures'] },
  { group: 'Tools', items: ['Git', 'Postman', 'Visual Studio', 'VS Code', 'DBeaver', 'IntelliJ IDEA'] },
];

export const experience = [
  {
    role: 'Associate Software Developer',
    organization: 'TSS Consultancy Pvt. Ltd.',
    type: 'Full-time',
    location: 'Rajkot, Gujarat',
    period: 'Oct 2024 – Present',
    points: [
      'Develop and maintain backend services in a microservices architecture using .NET (C#) and PostgreSQL, with Kafka for event-driven messaging and Redis and LRU caching for performance; contributed changes to Elasticsearch-backed features.',
      'Worked on the screening module, implementing and improving name-matching algorithms used to match records against screening lists.',
      'Strengthened product security with security fixes and SHA-256 based hashing; covered the security team’s deliverables for several weeks so security releases shipped on schedule.',
      'Built integrations that persist API results to client-provided secure storage, wrote PostgreSQL stored procedures for data retrieval and updates, and developed email notification features.',
      'Resolved production issues within committed timelines and delivered nearly all assigned client tasks on time in a Scrum team.',
      'Own features end to end through production, working with the Engineering Assistance team to quickly fix defects in my features — including ones introduced by other changes.',
      'Collaborated across teams, including Java-based teams, on their client deliveries and shared requirements, and contributed to Java development when needed.',
      'Maintained and fixed the automation team’s daily-run setup, improving environment stability and deployments; independently handle Angular front-end fixes for small features.',
    ],
    tech: ['.NET (C#)', 'Angular', 'PostgreSQL', 'Java', 'Kafka', 'Redis'],
  },
  {
    role: 'SDK Developer Intern',
    organization: 'TSS Consultancy Pvt. Ltd.',
    type: 'Internship',
    location: 'Rajkot, Gujarat',
    period: 'Dec 2023 – Mar 2024',
    points: [
      'Built a Go SDK/API for secure data exchange with clients, implementing encryption, decryption and digital signature verification in both directions.',
      'Applied industry-standard symmetric and asymmetric cryptography to protect data confidentiality, integrity and sender authenticity.',
    ],
    tech: ['Go', 'AES', 'RSA', 'Digital Signatures'],
  },
  {
    role: 'Web Developer Intern',
    organization: 'Sampaarsh Technology',
    type: 'Internship',
    location: 'Rajkot, Gujarat',
    period: 'Jun 2023 – Jul 2023',
    points: [
      'Developed the company website as part of a team to expand its online reach and clearly present its services to clients.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
];

export const projects = [
  {
    name: 'Visit Your Barber',
    status: 'Personal project',
    period: 'Oct 2026 – Present',
    description:
      'A barber shop management application covering staff, inventory, billing, customer and booking management. I lead development with AI coding agents — defining requirements and architecture, planning the workflow, assigning tasks, and reviewing and approving every change.',
    tech: ['Staff', 'Inventory', 'Billing', 'Customers', 'Bookings', 'AI coding agents'],
    links: [],
  },
  {
    name: 'Secure Data Exchange SDK',
    status: 'Internship project',
    period: 'Dec 2023 – Mar 2024',
    description:
      'A Go SDK/API for secure data exchange with clients, with encryption, decryption and digital signature verification in both directions — protecting confidentiality, integrity and sender authenticity.',
    tech: ['Go', 'AES', 'RSA', 'Digital Signatures'],
    links: [],
  },
  {
    name: 'Sampaarsh Technology Website',
    status: 'Internship project',
    period: 'Jun 2023 – Jul 2023',
    description:
      'The company website, developed as part of a team to expand Sampaarsh Technology’s online reach and clearly present its services to clients.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    links: [],
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
    qualification: 'Senior Secondary Education (12th)',
    institution: 'Javiya Schooling System, Junagadh',
    period: '2020 – 2021',
    result: '87.84%',
  },
];
