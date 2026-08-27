export const profile = {
  name: "Masud Rana Mushfiq",
  firstName: "Masud Rana",
  lastName: "Mushfiq",
  university: "University of Rajshahi",
  tagline:
    "Building elegant solutions at the intersection of web development and software engineering.",
  github: "https://github.com/MasudRanaMushfiq",
  linkedin: "https://www.linkedin.com/in/masudranamushfiq/",
  email: "masudranaorg71@gmail.com",
  availability: "Open to internships & opportunities",
};

export const contact = {
  email: "masudranaorg71@gmail.com",
  github: "https://github.com/MasudRanaMushfiq",
  linkedin: "https://www.linkedin.com/in/masudranamushfiq/",
  medium: "https://medium.com/@masudranamushfiq",
  youtube: "https://youtube.com/@masudranamushfiq",
};

export const workingPreferences = {
  timezone: "GMT+6 · base 09:00–17:00 flexible shift for cross-region overlap",
  overlap: "EU + UK — ~4h | US — async-first; ~1–2h on overlap days",
  comms: "Async-first · Loom · written RFCs · EOD standups · GitHub PRs as the source of truth",
  languages: "English (working) · Bangla (native)",
};

export const about = {
  heading: ["Passionate builder,", "curious learner."],
  paragraphs: [
    "I'm Masud Rana Mushfiq, a Computer Science undergraduate at the University of Rajshahi, Bangladesh. I'm driven by a deep curiosity about how technology can solve real-world problems — from crafting responsive frontend interfaces to building robust backend systems.",
    "My journey started with the fundamentals — C, C++, and data structures — and has grown into a passion for full-stack web development and mobile applications. I enjoy turning complex ideas into working, polished software.",
    "Beyond coding, I love discussing frontend architecture, object-oriented design patterns, and modern web technologies. I believe the best engineers never stop asking \"why?\" and \"how can this be better?\"",
  ],
  stats: [
    { value: "5+", label: "Full-stack projects built" },
    { value: "4", label: "Years of CSE study" },
    { value: "6", label: "Programming languages" },
    { value: "3", label: "Frameworks mastered" },
  ],
};

export const skills = [
  {
    group: "Languages",
    color: "#0e6ba8",
    items: ["C", "C++", "Java", "JavaScript", "TypeScript", "Python"],
  },
  {
    group: "Frontend & Mobile",
    color: "#0d8a7a",
    items: ["HTML5", "CSS3", "React", "React Native", "Expo", "Chrome Extensions"],
  },
  {
    group: "Data",
    color: "#7c5ea3",
    items: ["Pandas", "NumPy", "DSA"],
  },
  {
    group: "Tools & Systems",
    color: "#b86b3a",
    items: ["Git", "GitHub", "Firebase", "Laravel", "LaTeX", "OOP"],
  },
];

export const projectCategories = [
  "All",
  "Full-Stack",
  "Backend",
  "Frontend",
  "App",
];

export const projects = [
  {
    title: "Rajshahi University Employee Profile System",
    slug: "ru-employee-profile-management-system",
    type: "Web Application",
    description:
      "A full-stack profile, payroll and directory platform that replaced a decade-old legacy system for 4,586 university employees — self-service profiles, an auditable payroll pipeline, CV and payslip PDFs, and a public staff directory.",
    image: "RU Employee Profile.jpg",
    tags: ["Laravel", "PHP", "MySQL", "React", "TypeScript"],
    github: "#",
    live: "http://profile.ru.ac.bd/public",
    year: "2026",
    category: "Full-Stack",
    problem:
      "The legacy system held 4,586 employees but only 1,240 had ever filled in a profile, nobody could update their own record, payroll lived in hand-distributed Excel sheets with no audit trail, and the same job role was spelled four different ways across two sources of truth.",
    solution:
      "Built a Laravel REST API and React + TypeScript SPA where every employee owns their own record, five administrative roles each get only their slice of authority, and the monthly payroll spreadsheet moves through an explicit staging → review → approve → publish state machine that can never write straight to an employee record.",
    features: [
      "Employee self-service profiles — academic and employment history, research, publications, awards and contacts",
      "One-click A4 CV export in public and private variants",
      "Monthly payslip download, released only after the payroll batch is published, with every download recorded",
      "TOTP two-factor authentication with QR-code enrolment",
      "Five scoped admin roles — Accounts, Establishment, Duty, Public relations, Super-admin",
      "Office admins maintaining their own office — reordering its seniority index and changing employee status — with no reach into any other office",
      "Super office admin able to reorder any office's seniority index and grant office-admin rights to any user",
      "Payroll import of 25 earnings and 60+ deduction columns, reviewed as a diff before it touches any record",
      "Salary PDFs reproducing the legacy bill layout, including the Bangla amount-in-words line",
      "Extra duty module with bulk Excel upload — the office spreadsheet is imported straight into the database instead of retyped",
      "Public office directory plus a key-gated API serving the university mobile app and ru.ac.bd itself, which draws its office head, chairman and director listings from this system",
    ],
  },
  {
    title: "Rajshahi University Student Management System",
    slug: "ru-student-management-system",
    type: "Web Application",
    description:
      "The central student-data service for Rajshahi University, holding 53,000+ student records and feeding the exam result system, exam form fill-up, the medical system, and hall automation over a capability-scoped REST API — with organization-scoped panels for every office and official Bengali PDF documents.",
    image: "RUSMS.png",
    tags: ["Laravel", "PHP", "MySQL", "REST API"],
    github:
      "https://github.com/MasudRanaMushfiq/Rajshahi-University-Student-Management-System",
    live: "https://studentdb.ru.ac.bd",
    year: "2026",
    category: "Backend",
    problem:
      "Student data lived in separate spreadsheets across the Academic Section, dean offices, departments, and halls. Copies went stale, a correction made in one office never reached the others, access was all-or-nothing, and nothing recorded who changed what.",
    solution:
      "Built a Laravel monolith that holds one authoritative student record and serves it two ways — a server-rendered web application with organization-scoped panels for university officers, and a versioned REST API that gives other campus systems only the fields their token entitles them to.",
    features: [
      "Fast student lookup with sectioned record views and cross-entity validation",
      "50+ individual permissions, assignable by role or directly to a user, gating view, edit, and export separately down to single sections of a student record",
      "Scoped panels for Super Admin, Academic, Dean, Department, and Hall offices, each confined to its own faculty, department, or hall",
      "Official PDFs — admission forms, registration cards, migration certificates — with correct Bengali typesetting, barcodes, and QR codes",
      "Excel exports composed by the officer — pick the columns, the pick order sets the column order, filter by department, hall, session, or district",
      "Admin dashboard with live student counts by faculty, department, hall, and session, split by gender and totalled, computed on demand rather than from a nightly batch",
      "Admission statistics summarising merit versus quota intake, broken down by individual quota type, filterable by faculty, department, hall, or session",
      "Integration API serving the exam result system, exam form fill-up, the university medical system, and hall automation — each token carrying its own permission set",
      "Full database backup facility — the system is the single authoritative copy, so scheduled complete snapshots are a standing requirement, not an add-on",
      "Activity log with actor attribution and field-level diffs",
    ],
  },
  {
    title: "TryLense",
    slug: "trylense",
    type: "Website",
    description:
      "An online eyewear shop built for TryLense, with Meta Pixel tracking, anti-fraud order screening, and a face-tracked virtual try-on that lets shoppers preview frames before buying.",
    image: "TryLense.png",
    tags: ["React", "Vite", "Meta Pixel", "Virtual Try-On"],
    github: "#",
    live: "https://trylense.com/",
    year: "2026",
    category: "Frontend",
    problem:
      "The store was getting a large volume of fake orders, Meta was charging for those bad conversions, and buyers needed a better way to preview eyewear before purchasing.",
    solution:
      "Built the TryLense storefront, set up Meta Pixel tracking, moved abnormal orders into a fake-order flow, added blocking logic to stop repeat bad users, and implemented a virtual try-on experience using face tracking.",
    features: [
      "Online eyewear shop experience",
      "Meta Pixel and conversion tracking setup",
      "Abnormal-order detection and fake-order handling",
      "User blocking for repeat fraudulent activity",
      "Virtual try-on with selfie camera or uploaded image",
      "Face-tracked eyewear preview with download and manual adjustment controls",
    ],
  },
  {
    title: "Online Judge",
    slug: "online-judge",
    type: "Web Application",
    description:
      "A minimal online judge that compiles and runs C / C++ code inside a Docker sandbox. Write code in the browser, hit Run, and see the output — all without leaving the editor.",
    image: "online-judge.svg",
    tags: ["JavaScript", "Docker", "Node.js"],
    github: "https://github.com/MasudRanaMushfiq/Online-Judge",
    live: "#",
    year: "2026",
    category: "Backend",
    problem:
      "Competitive programmers and students needed a quick way to test C/C++ code snippets without setting up a local compiler or switching contexts. Existing online judges were either too heavy or required account creation.",
    solution:
      "Built a lightweight, browser-based code execution environment using Node.js with Docker sandboxing. Users write code in a web editor, hit Run, and get real-time output — no setup, no account needed.",
    features: [
      "In-browser code editor with syntax highlighting",
      "Docker-based sandboxed execution for safety",
      "Supports C and C++ compilation",
      "Real-time output streaming",
      "Minimal, distraction-free UI",
    ],
  },
  {
    title: "Laravel Blood Donation Backend",
    slug: "laravel-blood-donation-backend",
    type: "Backend API",
    description:
      "A RESTful Laravel backend for blood donation management — donor CRUD, blood requests, emergency handling, and location-based filtering with a web admin dashboard.",
    image: "blood-donation.svg",
    tags: ["Laravel", "PHP", "REST API"],
    github: "https://github.com/MasudRanaMushfiq/Laravel-Blood-Donation-Backend",
    live: "#",
    year: "2025",
    category: "Backend",
    problem:
      "Blood donation organizations lacked a centralized digital platform to manage donors, track blood requests, and handle emergency situations efficiently.",
    solution:
      "Created a RESTful API with Laravel that manages donor registrations, blood requests, emergency alerts, and location-based filtering, paired with an admin dashboard.",
    features: [
      "Donor registration and profile management",
      "Blood request creation and tracking",
      "Emergency alert system",
      "Location-based donor filtering",
      "Admin dashboard for oversight",
    ],
  },
  {
    title: "Ticket Booking Mobile App",
    slug: "ticket-booking-app",
    type: "Mobile App",
    description:
      "A full-featured React Native mobile app built with Expo Go and Firebase. Delivers a seamless ticket purchasing experience with real-time backend integration and cross-platform support.",
    image: "ticket-booking.svg",
    tags: ["React Native", "TypeScript", "Expo Go", "Firebase"],
    github: "https://github.com/MasudRanaMushfiq/Ticket-Booking-App",
    live: "#",
    year: "2025",
    category: "App",
    problem:
      "Event-goers needed a convenient mobile solution to browse, book, and manage tickets on the go. Existing platforms were clunky and lacked real-time updates.",
    solution:
      "Built a cross-platform React Native mobile app with Expo Go and Firebase backend, providing a seamless ticket browsing and purchasing experience with real-time synchronization.",
    features: [
      "Cross-platform (iOS & Android) with Expo Go",
      "Firebase real-time backend integration",
      "Ticket browsing and purchase flow",
      "Booking history and management",
      "Push notifications for updates",
    ],
  },
  {
    title: "Task Poster Mobile App",
    slug: "task-poster-app",
    type: "Mobile App",
    description:
      "A React Native mobile app built with Expo and Firebase for posting and managing tasks — real-time sync, cross-platform support, and a clean task workflow.",
    image: "task-poster.svg",
    tags: ["React Native", "TypeScript", "Expo", "Firebase"],
    github: "https://github.com/MasudRanaMushfiq/Task_Poster_App",
    live: "#",
    year: "2025",
    category: "App",
    problem:
      "Teams and individuals needed a simple mobile tool to post, assign, and track tasks without the overhead of heavyweight project management tools.",
    solution:
      "Designed a lightweight task management mobile app using React Native and Firebase, enabling users to create, update, and track tasks with real-time sync across devices.",
    features: [
      "Task creation and assignment",
      "Real-time sync with Firebase",
      "Cross-platform (Expo)",
      "Task status tracking",
      "Clean, minimal interface",
    ],
  },
];

export const education = {
  period: "2022 — Present",
  degree: "B.Sc. in Computer Science & Engineering",
  school: "University of Rajshahi, Bangladesh",
  description:
    "Pursuing a rigorous curriculum covering data structures, algorithms, OOP, web technologies, and database systems. Actively applying coursework to real projects and open-source contributions on GitHub.",
  coursework: [
    "Data Structures",
    "Algorithms",
    "OOP",
    "Web Dev",
    "DSA",
    "Database Systems",
  ],
};
