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
    title: "Belleza",
    slug: "belleza",
    type: "Web Application",
    description:
      "A full-stack, multi-country beauty marketplace for Belleza: a Laravel REST API and admin panel behind a bilingual English and Arabic Next.js storefront, with CrediMax and BENEFIT payments, per-country currencies, gift cards, and 80+ brands.",
    image: "Belleza.png",
    tags: ["Laravel", "PHP", "REST API", "Next.js", "CrediMax", "BENEFIT", "Twilio"],
    github: "#",
    live: "https://staging.bellezabh.com/en/bh",
    year: "2026",
    category: "Full-Stack",
    problem:
      "Belleza sells to shoppers in several countries, each with its own currency, and customers pay through the two gateways people in Bahrain actually use. The business also needed a single back office to run the catalog, orders, purchasing, delivery and marketing, instead of spreading that work across separate tools.",
    solution:
      "Built a Laravel RESTful API as the single backend for the storefront and the admin panel, with country-aware pricing in local currencies, CrediMax and BENEFIT payment integration, Twilio OTP verification, guest checkout, country- and weight-based shipping charges, gift cards, and automatic back-in-stock emails. The bilingual Next.js storefront consumes the API, and admins and moderators run the whole operation from a role-based admin panel. The backend is modular so new countries, payment methods and features can be added without rewriting the core.",
    features: [
      "Laravel RESTful API serving the storefront and the admin panel",
      "CrediMax (card) and BENEFIT payment gateway integration",
      "Multi-country store: each country has its own currency, exchange rate and shipping rules, and any customer can buy any product",
      "Twilio OTP verification, so customers confirm their phone number with a one-time code",
      "Guest checkout, so anyone can place an order without creating an account",
      "Gift cards that customers can buy and redeem at checkout",
      "Shipping charges calculated by destination country and order weight, with a separate rate table for each country",
      "Back-in-stock alerts: shoppers tap Notify Me on an out-of-stock product and automatically receive an email as soon as it is available again",
      "Bilingual English / Arabic storefront built with Next.js, with country-scoped URLs such as /en/bh",
      "Role-based admin panel for admins and moderators",
      "Catalog management for products, brands, nested categories and attributes across 80+ brands",
      "Orders, pending orders and abandoned-cart visibility, plus order and financial reporting with a sales dashboard",
      "Purchasing workflow covering suppliers, shipments, purchase invoices, shipment expenses and receiving",
      "Delivery agents, delivery settings and deliveries & settlements tracking",
      "Marketing tools including discount coupons, general discounts, cashback rewards, newsletters, searched-keyword insights and affiliate requests",
      "Content management for pages, blogs, sliders, promo banners, header messages and pop-ups, plus WhatsApp configuration",
    ],
  },
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
    title: "Eduskandia",
    slug: "eduskandia",
    type: "Web Application",
    description:
      "A full-stack study-abroad platform for Eduskandia, a European education consultancy: a React frontend on a Laravel REST API where international students discover verified Nordic university programs, compare tuition and fees, apply, and track every step of their application from a personal dashboard.",
    image: "EduSkandia.png",
    tags: ["React", "Next.js", "Laravel", "PHP", "REST API", "Tailwind CSS"],
    github: "#",
    live: "https://eduskandia.com/",
    year: "2026",
    category: "Full-Stack",
    problem:
      "Students applying to Nordic universities from abroad face scattered program information, unclear tuition and fees, confusing document requirements, and no single place to see where their application stands. The consultancy needed one platform that presents verified programs transparently and guides each student from first shortlist to visa decision.",
    solution:
      "Built a Laravel RESTful API that holds programs, partner institutions, student accounts, applications and blog content, and a React frontend (Next.js, Tailwind CSS) that consumes it. Students search and filter the catalog, see every cost before applying, sign in to apply, and follow their application through clear stages on a dashboard, while the team publishes new programs and articles without touching code.",
    features: [
      "Laravel RESTful API serving programs, institutions, student accounts, applications and blog content to the React frontend",
      "Program catalog of verified, English-taught programs from partner universities such as Aalto, KTH, Uppsala, DTU, NTNU, Chalmers and the University of Helsinki",
      "Search by program or country, with filters for country and study level",
      "Program pages showing tuition, duration, intakes, application fee, file opening fee, service charge and entry requirements",
      "Sign in to apply straight from a program page",
      "Student registration, sign-in and protected account area",
      "Application dashboard that tracks each application through profile, documents and submission with a progress indicator",
      "Document checklist guidance for transcripts, statements and references",
      "Guided four-step journey: discover, prepare, apply & track, and plan your move with visa and pre-departure support",
      "Homepage statistics for programs, partner institutions, countries and tuition-free options, pulled from the live catalog",
      "Programs, institutions and blog posts managed through the backend, so new content goes live without a deploy",
      "Blog with news, guides and funding categories, plus a monthly newsletter subscription",
      "Responsive, animated interface with light and dark themes and Next.js image optimization",
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
