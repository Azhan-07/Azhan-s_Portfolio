import grabify from '../assets/grabify.png';
import kingclothing from '../assets/kingclothing.png';
import securelink from '../assets/securelink.png';
import leadgenerator from '../assets/leadgenerator.png';
import luxuryMotors from '../assets/luxury-motors.png';
import location from '../assets/location.jpg';
import shortlink from '../assets/shortlink.png';
import srsImage from '../assets/srsdocumenttaion generator.png';
import mirrorClone from '../assets/mirror_clone.png';
import searchAlgo from '../assets/search_algo.png';
import attendanceImage from '../assets/smart_attendence_system.png';
import techxai from '../assets/Aircanvas.png';
import handVolumeController from '../assets/hand_volume_controller.png';
import shayanTraders from '../assets/shayanfoods crm.png';
import himoKb from '../assets/himo kb.png';

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image?: string;
  github?: string;
  live?: string;
  featured: boolean;
  client: boolean;
  tags?: string[];
  caseStudy?: string;
}

export const categories = [
  "All",
  "E-Commerce",
  "Information Security",
  "Python / AI / ML",
  "Algorithms",
  "Applications",
  "Client Projects",
  "University / Events",
  "Creative / Experimental",
] as const;

export const projects: Project[] = [
  {
    id: "king-clothing",
    number: "01",
    title: "King Clothing",
    category: "E-Commerce",
    categorySlug: "e-commerce",
    description:
      "A modern clothing e-commerce website designed around product discovery, product presentation, responsive layouts, and a polished shopping experience.",
    longDescription:
      "King Clothing is a full e-commerce frontend experience focused on product presentation and discovery. The design emphasizes clean product photography layouts, intuitive category browsing, and a polished shopping flow across all devices.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Responsive Design"],
    github: "https://github.com/Azhan-07/king-clothing",
    image: kingclothing,
    featured: true,
    client: false,
    tags: ["E-Commerce"],
    caseStudy: "E-commerce UI focused on product discovery and presentation. Responsive layouts with modern frontend patterns.",
  },
  {
    id: "secure-link",
    number: "02",
    title: "Secure Link Communication",
    category: "Information Security",
    categorySlug: "information-security",
    description:
      "A client-server communication project focused on secure communication and encrypted data transmission using SSL and TLS protocols.",
    longDescription:
      "This project implements secure client-server communication using SSL and TLS protocols, demonstrating encrypted data transmission, certificate handling, and secure connection establishment. It showcases practical information security concepts in a real implementation.",
    technologies: ["Python", "SSL/TLS", "Client-Server Architecture", "Socket Programming", "Networking"],
    image: securelink,
    github: "https://github.com/Azhan-07/SecureLink",
    featured: true,
    client: false,
    tags: ["Security"],
    caseStudy: "Implementing secure communication channels with SSL/TLS encryption and certificate-based authentication.",
  },
  {
    id: "lead-generator",
    number: "03",
    title: "Lead Generator",
    category: "Python / AI / ML",
    categorySlug: "python-ai-ml",
    description:
      "A Python-based Google Maps scraping and lead-generation tool that automatically discovers business prospects, especially businesses without websites.",
    longDescription:
      "Lead Generator is a Python-based Google Maps scraping and lead-generation tool designed to automatically discover potential business prospects, especially businesses without websites. The system collects key business information such as business name, phone number, address, category, rating, reviews, opening hours, and Google Maps links, then organizes the results into an Excel workbook for easy outreach and follow-up.",
    technologies: ["Python", "Web Scraping", "Automation", "Google Maps", "Data Processing", "Excel"],
    image: leadgenerator,
    github: "https://github.com/Azhan-07/Lead-Generator",
    featured: true,
    client: false,
    tags: ["SaaS"],
    caseStudy:
      "A Python-powered lead generation automation system built to reduce manual prospecting. The tool transforms Google Maps search results into structured, outreach-ready business leads, helping streamline the process of finding potential clients and organizing them for sales campaigns.",
  },
  {
    id: "car-salon",
    number: "04",
    title: "Luxury Motors",
    category: "E-Commerce",
    categorySlug: "e-commerce",
    description:
      "A premium automotive e-commerce marketplace designed to showcase and sell high-end vehicles through a modern, responsive shopping experience.",
    longDescription:
      "Luxury Motors is a premium automotive e-commerce marketplace designed to showcase and sell high-end vehicles through a modern, responsive shopping experience. The platform includes a curated vehicle storefront, persistent shopping cart, secure checkout with server-side price validation and automatic tax calculation, and a password-protected admin dashboard for managing inventory and orders.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "SQLite", "better-sqlite3", "Responsive Design"],
    image: luxuryMotors,
    github: "https://github.com/Azhan-07/luxury-Motors-website",
    featured: false,
    client: false,
    tags: ["E-Commerce"],
    caseStudy:
      "A full-stack automotive e-commerce experience built around premium vehicle presentation and seamless product discovery. The project combines a polished responsive storefront with real e-commerce functionality, including cart management, checkout, order processing, inventory CRUD operations, revenue analytics, and administrative order management.",
  },
  {
    id: "live-location-tracker",
    number: "05",
    title: "Live Location Tracker",
    category: "Applications",
    categorySlug: "applications",
    description:
      "A real-time location-based web application designed to capture GPS coordinates and display them dynamically on an interactive map.",
    longDescription:
      "Live Location Tracker is a real-time location-based web application designed to capture GPS coordinates and display them dynamically on an interactive map. The application provides a smooth tracking experience by continuously handling location data and presenting it in a clear visual format. It was developed to demonstrate practical applications of geolocation, real-time data handling, and mobile device capabilities.",
    technologies: ["JavaScript", "Capacitor", "HTML", "CSS", "Geolocation API", "Interactive Maps"],
    github: "https://github.com/Azhan-07/Live-location-tracker",
    image: location,
    featured: false,
    client: false,
    tags: ["Security"],
    caseStudy:
      "The main objective of this project was to develop a lightweight and practical solution for real-time location tracking using modern web technologies. The application integrates device GPS capabilities through Capacitor and processes live location data using JavaScript. The collected coordinates are then represented visually through an interactive map, allowing users to understand how real-time positioning systems work.",
  },
  {
    id: "grabify",
    number: "06",
    title: "Grabify",
    category: "Applications",
    categorySlug: "applications",
    description:
      "A lightweight, self-hosted video and audio downloading platform built to provide a simple and efficient way to process media from supported online platforms.",
    longDescription:
      "Grabify is a lightweight, self-hosted video and audio downloading platform built to provide a simple and efficient way to process media from supported online platforms. Users can paste a video URL, preview its metadata, select the desired video quality or audio bitrate, and start a download directly through a clean web interface.\n\nThe project is designed to work across multiple platforms supported by yt-dlp, while providing both a browser-based experience and a native desktop application through PyQt5. It includes real-time download progress, asynchronous processing, automatic retry handling, cookie-based bot detection workarounds, temporary-file cleanup, and Docker support for flexible deployment.",
    technologies: ["Python", "Flask", "yt-dlp", "PyQt5", "FFmpeg", "REST API", "Docker", "JavaScript"],
    image: grabify,
    github: "https://github.com/Azhan-07/grabify",
    featured: false,
    client: false,
    tags: ["SaaS"],
    caseStudy:
      "The main objective of Grabify was to develop a practical media downloading system that combines a simple user experience with reliable backend processing. The application uses Flask to expose RESTful API endpoints for retrieving media information, starting downloads, monitoring progress, checking download status, and serving completed files. The yt-dlp integration provides multi-platform media extraction, while FFmpeg enables audio extraction and media conversion.\n\nA key focus of the project was maintaining a responsive experience during resource-intensive downloads. Background processing allows multiple downloads to run without blocking the web interface, while real-time progress tracking gives users clear feedback throughout the process. The application also implements retry logic for temporary extraction failures and supports browser cookies for handling certain platform access restrictions.\n\nGrabify was further structured for flexible deployment, with Docker support allowing the complete application to run consistently across different environments. The PyQt5 wrapper extends the project beyond a traditional web application by providing a desktop experience using the same underlying web interface and backend.",
  },
  {
    id: "url-shortener",
    number: "07",
    title: "Shortlink URL Shortener",
    category: "Applications",
    categorySlug: "applications",
    description:
      "Shortlink is a production-ready, full-stack URL shortening platform designed to create, manage, and analyze short links through a fast and secure web interface.",
    longDescription:
      "Shortlink is a production-ready, full-stack URL shortening platform designed to create, manage, and analyze short links through a fast and secure web interface. Users can generate short URLs using random codes or custom aliases, manage their links through authenticated accounts, and monitor detailed click analytics including browser, operating system, device, country, and referrer data.\n\nThe project goes beyond basic URL shortening by integrating authentication, rate limiting, Redis caching, privacy-conscious analytics, API documentation, automated testing, monitoring, and containerized deployment. Its premium responsive dashboard provides a modern experience while the backend architecture is designed with scalability, security, and observability in mind.",
    technologies: ["Node.js", "TypeScript", "Fastify", "React", "Vite", "PostgreSQL", "Prisma", "Redis", "JWT", "Tailwind CSS"],
    github: "https://github.com/Azhan-07/shortlink",
    image: shortlink,
    featured: false,
    client: false,
    tags: ["SaaS"],
    caseStudy:
      "The primary objective of Shortlink was to build a complete URL-shortening ecosystem that demonstrates how a production-oriented full-stack application can be designed beyond its core functionality. The system supports both authenticated and guest users, allowing URLs to be shortened with generated nanoid codes or custom aliases, while also supporting configurable redirects and link expiration.\n\nA major focus of the project was building a reliable analytics and infrastructure layer. Click activity is processed into useful insights such as browser, OS, device, country, and referrer statistics, while IP addresses are hashed to provide a more privacy-conscious tracking approach. Redis caching improves redirect performance, while rate limiting, Helmet security headers, CORS controls, and Zod validation strengthen the API.\n\nThe project also incorporates Prometheus and Grafana for observability, Swagger for interactive API documentation, automated testing with Vitest and Supertest, and GitHub Actions for CI/CD validation.",
  },
  {
    id: "srs-generator",
    number: "08",
    title: "SRS Documentation Generator",
    category: "Applications",
    categorySlug: "applications",
    description:
      "An AI-powered documentation tool designed to automatically generate professional Software Requirement Specification (SRS) documents from user-provided project requirements using locally hosted LLMs.",
    longDescription:
      "AI SRS Generator is an AI-powered documentation tool designed to automatically generate professional Software Requirement Specification (SRS) documents from user-provided project requirements. It uses locally hosted Large Language Models through Ollama to transform natural-language project ideas into structured technical documentation while keeping the AI processing local.\n\nThe application provides real-time stream-based generation, allowing users to see the document being produced dynamically instead of waiting for the complete response. It also generates Mermaid.js UML diagrams, including use case and class diagrams, and supports exporting the generated documentation as a PDF. A responsive dark-themed interface and in-memory caching further improve usability and performance.",
    technologies: ["Python", "Flask", "Ollama", "Local LLMs", "Qwen 2.5", "Mermaid.js", "REST API", "PDF Generation", "HTML", "CSS", "JavaScript", "In-Memory Caching"],
    github: "https://github.com/Azhan-07/SRS-Documentation-Generator/",
    image: srsImage,
    featured: false,
    client: false,
    tags: ["SaaS"],
    caseStudy:
      "The primary objective of AI SRS Generator was to explore how locally hosted AI models can automate one of the most time-consuming parts of software development: creating structured technical documentation. Instead of manually writing an SRS document from scratch, users can provide their project requirements and allow a local LLM to generate organized documentation based on the given information.\n\nThe system integrates Ollama as the local AI inference layer, enabling models such as Qwen 2.5 to process requirements without relying on a cloud-based AI API. Stream-based responses provide real-time generation feedback, while Mermaid.js is used to transform generated system information into visual UML representations such as use case and class diagrams.\n\nThe project also incorporates in-memory caching to reduce unnecessary processing for repeated requests and includes PDF export for producing shareable documentation. Overall, AI SRS Generator demonstrates practical experience in local AI integration, prompt-driven document generation, backend development with Flask, real-time streaming, automated technical documentation, UML visualization, and privacy-focused AI workflows.",
  },
  {
    id: "searching-algorithm",
    number: "09",
    title: "Search Algorithm Comparator",
    category: "Algorithms",
    categorySlug: "algorithms",
    description:
      "A desktop-based benchmarking application designed to visually compare the performance of multiple searching algorithms under the same dataset and search conditions.",
    longDescription:
      "Search Algorithm Comparator is a desktop-based benchmarking application designed to visually compare the performance of multiple searching algorithms under the same dataset and search conditions. Built with PyQt5, the application provides an interactive environment where users can generate large datasets, load custom CSV data, select different algorithms, and evaluate their execution performance side-by-side.\n\nThe application supports eight searching algorithms, ranging from traditional Linear Search to constant-time Hash Search. It combines algorithmic benchmarking with a modern graphical interface, providing real-time progress updates, sortable performance results, speedup comparisons, and graphical visualization to make differences in algorithm efficiency easier to understand.",
    technologies: ["Python", "PyQt5", "NumPy", "Pandas", "Matplotlib", "CSV Data Processing", "Algorithm Benchmarking", "Data Visualization"],
    github: "https://github.com/Azhan-07/search-algorithm-comparator",
    image: searchAlgo,
    featured: false,
    client: false,
    tags: ["Python"],
    caseStudy:
      "The primary objective of Search Algorithm Comparator was to create a practical educational and benchmarking tool for understanding how different searching algorithms behave under real execution conditions. Instead of studying time-complexity notation alone, the application allows users to run multiple algorithms against the same dataset and directly observe their relative performance.\n\nThe system implements Linear, Binary, Jump, Interpolation, Exponential, Ternary, Fibonacci, and Hash Search, while clearly distinguishing algorithms that require sorted data from those that do not. Users can generate datasets containing up to 100,000 integers or import their own data through CSV files, select the algorithms they want to test, and execute comparisons with a single interaction.\n\nPerformance results are presented through a sortable table as well as a horizontal bar graph, making algorithmic differences easier to analyze visually. The application also calculates speedup comparisons and provides CSV export functionality for further analysis. Overall, the project demonstrates practical understanding of data structures and algorithms, computational complexity, performance benchmarking, GUI development, data processing, and technical visualization.",
  },
  {
    id: "smart-attendance",
    number: "10",
    title: "Smart Attendance System",
    category: "Python / AI / ML",
    categorySlug: "python-ai-ml",
    description:
      "A full-stack Student Attendance Management System that digitizes student enrollment, attendance tracking, and academic record management through a centralized admin dashboard.",
    longDescription:
      "Student Attendance Management System is a full-stack web application designed to simplify and digitize student enrollment, attendance tracking, and academic record management through a centralized admin dashboard. The system allows administrators to securely manage student information, record daily attendance, search and filter records, and monitor attendance statistics from a responsive interface.\n\nThe application combines a Node.js and Express backend with a MySQL database and a lightweight HTML, CSS, and JavaScript frontend. It includes JWT-based authentication, password hashing, automated database initialization, department-based roll numbers, attendance history, dashboard statistics, and responsive dark/light themes, providing a complete workflow from student registration to attendance management.",
    technologies: ["Node.js", "Express.js", "MySQL", "JavaScript", "HTML5", "CSS3", "JWT", "bcryptjs", "REST API", "SQL", "Nodemon", "Responsive Design", "LocalStorage"],
    image: attendanceImage,
    github: "https://github.com/Azhan-07/Smart_Attendence_System/",
    featured: false,
    client: false,
    tags: ["Full Stack"],
    caseStudy:
      "The primary objective of this project was to develop a practical attendance management solution that replaces manual attendance processes with a centralized and structured digital system. The application provides administrators with a secure dashboard where they can add, update, delete, and search students while organizing them through department-based roll number conventions.\n\nThe backend follows a RESTful API architecture with dedicated routes, controllers, models, and authentication middleware. JWT authentication protects administrative operations, while bcryptjs is used for secure password hashing. MySQL handles persistent storage for student and attendance data, with the application automatically creating the required database structure during initial setup.\n\nA major focus was creating an efficient attendance workflow. Administrators can enter a student's roll number to instantly mark them present, view daily attendance, filter historical records, review attendance statistics, and remove incorrect entries when necessary. The frontend also supports responsive layouts and persistent dark/light theme preferences.\n\nOverall, this project demonstrates practical experience in full-stack web development, REST API design, relational database management, authentication and authorization, CRUD operations, data modeling, dashboard development, and responsive UI design.",
  },
  {
    id: "aircanvas",
    number: "11",
    title: "AirCanvas",
    category: "Python / AI / ML",
    categorySlug: "python-ai-ml",
    description:
      "AI Air Canvas is an interactive computer-vision application that allows users to draw digitally using hand gestures and a webcam, eliminating the need for a mouse, touchscreen, or physical drawing device.",
    longDescription:
      "AI Air Canvas is an interactive computer-vision application that allows users to draw digitally using hand gestures and a webcam, eliminating the need for a mouse, touchscreen, or physical drawing device. The system tracks hand and finger movements in real time and translates gestures into drawing actions directly on a virtual canvas.\n\nThe application provides multiple drawing colors, eraser functionality, multi-step undo support, PNG artwork export, and optional screen recording. It can work with a laptop's built-in webcam, external cameras, or a smartphone camera through an IP Webcam connection, making it a practical demonstration of gesture-controlled human-computer interaction.",
    technologies: ["Python", "OpenCV", "MediaPipe", "NumPy", "Computer Vision", "Hand Landmark Detection", "Gesture Recognition", "Webcam / IP Camera", "Real-Time Image Processing"],
    github: "https://github.com/Azhan-07/AirCanvas-",
    image: techxai,
    featured: false,
    client: false,
    tags: ["AI / ML"],
    caseStudy:
      "The primary objective of AI Air Canvas was to explore how computer vision and hand-tracking technology can be used to create a natural and touch-free drawing experience. Instead of relying on traditional input devices, the application uses MediaPipe Hands to detect hand landmarks from a live video stream and interpret specific finger configurations as user commands.\n\nThe system recognizes different gestures to control the canvas. A raised index finger activates drawing, two raised fingers pause the drawing action, a closed fist enables eraser mode, and a thumbs-up gesture can trigger an undo operation. OpenCV handles the camera feed, canvas rendering, interface overlays, and real-time video processing, while NumPy supports the underlying image and canvas operations.\n\nThe project also incorporates practical features such as multiple drawing colors, up to 20 levels of undo, PNG export, optional AVI recording, and support for both local webcams and network-based phone cameras. Overall, AI Air Canvas demonstrates practical experience in computer vision, real-time hand tracking, gesture recognition, image processing, interactive application development, and human-computer interaction.",
  },
  {
    id: "hand-volume-controller",
    number: "12",
    title: "Hand Volume Controller",
    category: "Python / AI / ML",
    categorySlug: "python-ai-ml",
    description:
      "An AI-powered computer vision project that enables users to control system volume through real-time hand gestures using a webcam. The application detects hand landmarks, recognizes gestures such as pinching, fist, and V-signs, and translates them into volume and mute controls without requiring a keyboard or trackpad.",
    longDescription:
      "Hand Volume Controller is an AI-powered computer vision project that enables users to control system volume through real-time hand gestures using a webcam. The application detects hand landmarks, recognizes gestures such as pinching, fist, and V-signs, and translates them into volume and mute controls without requiring a keyboard or trackpad.\n\nTraditional volume controls require physical interaction with a keyboard, mouse, or touchpad. The goal was to create a more natural, touch-free method of controlling system audio. Hand Volume Controller uses MediaPipe Hands to track 21 hand landmarks in real time. Joint-angle analysis is used to classify gestures, while the distance between the thumb and index finger is mapped to a 0–100% volume range. A fist controls the operating mode, while a V-sign provides instant mute/unmute functionality.",
    technologies: ["Python", "Computer Vision", "MediaPipe", "OpenCV", "Machine Learning", "Gesture Recognition", "Pycaw"],
    image: handVolumeController,
    github: "https://github.com/Azhan-07/Hand_Volume_Controller/",
    featured: false,
    client: false,
    tags: ["AI / ML"],
    caseStudy:
      "The primary objective of Hand Volume Controller was to create a more natural, touch-free method of controlling system audio instead of relying on physical interaction with a keyboard or mouse. The application uses MediaPipe Hands to track 21 hand landmarks in real time, with joint-angle analysis used to classify gestures.\n\nThe distance between the thumb and index finger is mapped to a 0–100% volume range, while a fist controls the operating mode and a V-sign provides instant mute/unmute functionality. Overall, this project demonstrates practical experience in computer vision, real-time hand tracking, gesture recognition, and system-level audio control.",
  },
  {
    id: "shayan-inventory",
    number: "14",
    title: "Shayan Traders CRM",
    category: "Client Projects",
    categorySlug: "client-projects",
    description:
      "A business management and inventory management system designed to streamline day-to-day operations for Shayan Traders. The dashboard provides a centralized view of inventory value, sales, outstanding credit, expenses, billing, invoices, returns, and damaged items.",
    longDescription:
      "A business management and inventory management system designed to streamline day-to-day operations for Shayan Traders. The dashboard provides a centralized view of inventory value, sales, outstanding credit, expenses, billing, invoices, returns, and damaged items, helping businesses manage their operations more efficiently.\n\nManaging inventory, sales, expenses, invoices, returns, and customer credit manually can make business operations difficult to track and increase the chances of errors. A centralized CRM and inventory management dashboard was developed to organize core business operations in one place, providing dedicated sections for Inventory, Billing, Invoices, Returns, Damage Items, and Credit, while the main dashboard gives users an instant overview of important financial and operational information.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MySQL", "REST API", "Dashboard UI", "Database Management"],
    live: "https://shayantraders.com",
    image: shayanTraders,
    github: "https://github.com/Azhan-07",
    featured: false,
    client: true,
    caseStudy:
      "Managing inventory, sales, expenses, invoices, returns, and customer credit manually can make business operations difficult to track and increase the chances of errors. A centralized CRM and inventory management dashboard was developed to organize core business operations in one place. The system provides dedicated sections for Inventory, Billing, Invoices, Returns, Damage Items, and Credit, while the main dashboard gives users an instant overview of important financial and operational information.",
  },
  {
    id: "himo-kb",
    number: "13",
    title: "Himo KB",
    category: "Client Projects",
    categorySlug: "client-projects",
    description:
      "A premium product showcase website developed for HIMO KB, a Karachi-based tissue brand offering 2-ply, extra-soft, perfumed tissues. The website focuses on presenting the product through a luxury black-and-gold visual identity while highlighting its softness, strength, absorbency, fragrance, and everyday usability.",
    longDescription:
      "A premium product showcase website developed for HIMO KB, a Karachi-based tissue brand offering 2-ply, extra-soft, perfumed tissues. The website focuses on presenting the product through a luxury black-and-gold visual identity while highlighting its softness, strength, absorbency, fragrance, and everyday usability.\n\nThe platform also promotes HIMO KB's monthly lucky draw campaign and provides direct purchasing access through Daraz, creating a simple path from product discovery to purchase. The website presents the product specifications, key features, product showcase, usage environments, brand benefits, dealer pricing, and the monthly lucky draw campaign in a structured landing-page experience.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Web Design", "UI/UX Design", "Vercel", "Daraz Integration"],
    live: "https://himo-kb.vercel.app/",
    image: himoKb,
    github: "https://github.com/Azhan-07",
    featured: false,
    client: true,
    caseStudy:
      "HIMO KB needed a professional digital presence that could introduce its tissue product, communicate its premium positioning, and make it easy for customers to discover and purchase the product online. A dedicated product-focused website was created with a premium black-and-gold design language, presenting the product specifications, key features, product showcase, usage environments, brand benefits, dealer pricing, and the monthly lucky draw campaign in a structured landing-page experience.\n\nThe website also integrates direct Daraz purchase links, allowing visitors to move from product discovery directly to the purchasing platform. Result: a professional online brand presence that combines product storytelling, visual branding, promotional marketing, and e-commerce conversion. Key highlights include a 150-sheet premium tissue box, 2-ply extra-soft construction, perfumed and absorbent tissues, premium black-and-gold branding, lucky draw promotional campaign, dealer/shopkeeper pricing information, direct Daraz purchasing integration, responsive product-focused interface, and deployment on Vercel.",
  },
  {
    id: "mirror-clone",
    number: "15",
    title: "Mirror Clone",
    category: "Creative / Experimental",
    categorySlug: "creative-experimental",
    description:
      "A real-time computer vision project that transforms a webcam feed into an interactive neon mirror experience. Using MediaPipe Pose, the application detects the user's body movements through 33 landmarks, renders a glowing neon skeleton, and creates a horizontally mirrored digital clone that follows the user's movements in real time.",
    longDescription:
      "Neon Mirror Clone is a real-time computer vision project that transforms a webcam feed into an interactive neon mirror experience. Using MediaPipe Pose, the application detects the user's body movements through 33 landmarks, renders a glowing neon skeleton, and creates a horizontally mirrored digital clone that follows the user's movements in real time.\n\nThe project combines real-time pose estimation with creative graphics processing to turn ordinary webcam footage into an interactive digital-art experience. Features such as live FPS monitoring, fullscreen mode, screenshot capture, and smooth landmark tracking make it suitable for both experimentation and portfolio demonstrations.",
    technologies: ["Python", "Computer Vision", "MediaPipe", "OpenCV", "NumPy", "Pose Estimation", "Real-Time Tracking", "Gaussian Blur", "HSV Color Animation"],
    image: mirrorClone,
    github: "https://github.com/Azhan-07/Mirror_Clone",
    featured: false,
    client: false,
    tags: ["AI / ML"],
    caseStudy:
      "The primary objective of Neon Mirror Clone was to explore how real-time pose estimation can be combined with creative graphics processing to create an interactive digital-art experience. The application uses MediaPipe Pose to detect 33 body landmarks and renders a glowing neon skeleton that mirrors the user's movements.\n\nFeatures include live FPS monitoring, fullscreen mode, screenshot capture, and smooth landmark tracking. Overall, the project demonstrates practical experience in computer vision, real-time pose estimation, creative graphics processing, and interactive application development.",
  },
];
