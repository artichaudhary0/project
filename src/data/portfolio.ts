import { Project, Skill, Experience } from '../types/portfolio';

export const projects: Project[] = [

  {
    id: '1',
    title: 'Maidify: Your Premier Maid Booking Solution',
    description: 'Welcome to Maidify! Your go-to platform for seamless maid booking services, designed to simplify your life and ensure a clean, comfortable living space. Discover trusted maids, schedule appointments, and manage your cleaning needs effortlessly with our intuitive mobile app.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Provider','Figma'],
    imageUrl: 'https://images.unsplash.com/photo-1546552696-7d5f4e89b0e8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'flutter',
    githubUrl: 'https://github.com/artichaudhary0/wear_work',
    features : [
      {
        title: "Easy Booking Process",
        features: [
          "Explore Maids: Discover a diverse selection of experienced maids available for hire.",
          "Customize Services: Tailor your cleaning requirements by selecting specific services and skills.",
          "Schedule Appointments: Book maid services for your preferred date and time with just a few taps.",
          "Real-Time Availability: Instantly see which maids are available for your desired booking slot."
        ]
      },
      {
        title: "Trust and Transparency",
        features: [
          "Maid Profiles: Access detailed profiles of maids, including ratings, reviews, and work experience.",
          "ID Verification: Ensure the legitimacy of maid profiles through secure ID verification processes.",
          "Transparent Pricing: View transparent pricing details and transaction summaries before confirming bookings.",
          "Work History: Review previous tasks completed by maids to ensure quality."
        ]
      },
      {
        title: "User-Friendly Interface",
        features: [
          "Intuitive Design: Enjoy a seamless user experience with our intuitive and visually appealing interface.",
          "Secure Payments: Make secure payments for maid services through integrated payment gateways.",
          "Dark Mode: Switch to a visually comfortable dark mode for low-light environments.",
          "Multi-Language Support: Use the app in your preferred language."
        ]
      },
      {
        title: "Security and Privacy",
        features: [
          "Encrypted Data: Ensure your data remains safe with end-to-end encryption.",
          "Anonymous Reviews: Provide feedback without revealing personal information.",
          "Secure Authentication: Use OTP and two-factor authentication for added security.",
          "GDPR Compliance: Protect user privacy in compliance with global data standards."
        ]
      },
      {
        title: "Customer Support",
        features: [
          "24/7 Support: Access round-the-clock assistance for any issues or queries.",
          "Help Center: Find answers to common questions and troubleshooting steps.",
          "Feedback System: Share suggestions to improve the app’s performance.",
          "Live Chat: Connect with support agents in real-time for urgent help."
        ]
      }
    ]
  },

  {
    id: '2',
    title: 'Project Pathway : Basic to Advanced JavaScript Projects',
    description: 'A collection of 35 JavaScript projects ranging from basic to advanced levels. This project collection is perfect for beginners and intermediate developers looking to deepen their JavaScript skills. Each project covers key JavaScript concepts, from DOM manipulation and event handling to working with APIs and asynchronous programming.',
    technologies: ['Html', 'Css', 'Javascript'],
    imageUrl: 'https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'web',
    githubUrl: 'https://github.com/artichaudhary0/Project-Pathway-Js',
     features : [
      {
        title: "Project Overview",
        features: [
          "A collection of 35 JavaScript projects ranging from basic to advanced levels.",
          "Perfect for beginners and intermediate developers looking to deepen their JavaScript skills.",
          "Projects cover key JavaScript concepts including DOM manipulation, event handling, APIs, and asynchronous programming.",
          "Goal: Build a strong foundation in JavaScript and create a portfolio-worthy project collection."
        ]
      },
      {
        title: "Project Highlights",
        features: [
          "Skill Level: Beginner to Intermediate",
          "Topics Covered: DOM Manipulation, Event Handling, APIs, Local Storage, Asynchronous Programming, and more.",
          "Goal: Gain confidence with basic JavaScript operations and progressively build your skills with advanced projects."
        ]
      },
      {
        title: "Featured Projects",
        features: [
          "Start with simpler projects like a Calculator, To-Do List, and Quiz App.",
          "Progress to advanced projects like a Weather App, Expense Tracker, and E-commerce Cart.",
          "Gain experience with both basic and complex functionalities as you work through the projects."
        ]
      },
      {
        title: "Basic Projects",
        features: [
          "Random Color Generator: Generates random colors from a predefined array and random hex codes.",
          "Simple Counter: A counter that increases, decreases, and resets.",
          "User Reviews Carousel: Displays user reviews with Next, Previous, and Random buttons.",
          "Responsive Navbar: A navigation bar responsive to mobile and web screens.",
          "Slide-in Sidebar: Sidebar with slide-in and close functionality on hamburger icon click.",
          "Modal Popup: Opens and closes a modal window.",
          "FAQ Accordion: Reveals answers to questions with toggling icons for show/hide.",
          "Expand and Collapse Button: Toggles visibility of multiple options with a single button click.",
          "Static Restaurant Menu: Static menu with filters for Breakfast, Lunch, Shakes, and Dinner.",
          "Scroll Effect: Adds smooth scrolling to a webpage.",
          "Countdown Timer: A countdown timer with start, pause, and reset functionality.",
          "Paragraph Generator: A generator that creates multiple paragraphs on click.",
          "To-Do List with Local Storage: A To-Do list app that stores tasks in the browser's local storage.",
          "Image Slider: A slider that allows the user to navigate through images using next and previous buttons.",
          "Two Counters: Two counters that are synchronized with each other.",
          "Happy Diwali Wishes: A simple interactive webpage wishing users Happy Diwali."
        ]
      },
      {
        title: "Intermediate Projects",
        features: [
          "Filter Menu: A menu filter that allows users to filter items based on categories.",
          "Toggle Light/Dark Mode: A webpage that toggles between light and dark modes.",
          "API Data Fetcher: A project that fetches data from a public API and displays it on the page.",
          "API with Multiple Data: A project that fetches and displays different types of data from an API.",
          "Fetch Random User: Fetches random user data from an API and displays it.",
          "Tab Bar with Content: A project that allows switching between different content using a tab bar.",
          "Password Strength Meter: A meter that checks the strength of a password based on its complexity.",
          "Tooltip Display: A project that shows descriptions of elements using tooltips when hovered.",
          "Animation Counter: A counter that animates as it counts to a specific number.",
          "Custom Video Player: A simple video player with custom controls for play, pause, volume, etc.",
          "Pagination: A pagination system to divide a large list of items into smaller, more manageable chunks.",
          "Fetch API: A simple project that fetches data from a public API and displays it dynamically.",
          "Student Records Management: A project for managing student records with add, edit, and delete functionalities."
        ]
      },
      {
        title: "Advanced Projects",
        features: [
          "Expense Tracker: A personal expense tracker app that stores data using local storage.",
          "Weather App: A weather forecasting app that fetches data from an external API and displays it.",
          "E-commerce Shopping Cart: A fully functional e-commerce cart system with add, remove, and update products.",
          "Interactive Maps: A project showing interactive maps with zoom, scroll, and location view functionalities.",
          "Real-Time Chat App: A real-time chat application where users can send and receive messages instantly.",
          "Movie Finder: A movie finder app that fetches movie data from an API and lets users search for movies.",
          "Photo Gallery: A photo gallery with search and filter functionality that fetches images from an API or local storage.",
          "Online Quiz App: A quiz application where users answer questions and get a score at the end.",
          "Note Taking App: A note-taking application with features like adding, editing, and deleting notes.",
          "Blog App: A simple blog application where users can create, edit, and delete blog posts.",
          "Interactive Dashboard: A dashboard displaying various statistics and data visualizations."
        ]
      },
    ],
  },
  
  {
    id: '3',
    title: 'Digital Card Application',
    description: 'The Digital Card Application is a versatile mobile tool designed to streamline personal and professional networking. With a user-friendly interface, it allows individuals to create and share digital business cards containing essential contact details, professional information, and personal branding elements. Users can customize their profiles, including adding profile pictures and brief descriptions.',
    technologies: ['Java', 'Glide', 'Piccaso'],
    imageUrl: 'https://plus.unsplash.com/premium_photo-1729036163578-f80877183448?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'android',
    githubUrl: 'https://github.com/artichaudhary0/DigitalCardApplication',
    features : [
      {
        title: "Application Overview",
        features: [
          "The Digital Card Application is a versatile mobile tool for personal and professional networking.",
          "It modernizes the traditional business card, allowing users to create and share digital cards containing their contact information, professional details, and personal branding elements.",
          "This app is designed to be user-friendly, making networking at events efficient and dynamic.",
          "Ideal for entrepreneurs, professionals, and creatives who want to share contact information digitally and environmentally friendly."
        ]
      },
      {
        title: "Core Features",
        features: [
          "Relative Layout for flexible and adaptive user interface design that adjusts to different screen sizes.",
          "Splash screen that appears upon app launch, offering a smooth entry into the app.",
          "Customizable status bar color, allowing users to match the app’s theme with their branding.",
          "Library Integrations such as ImagePicker, CircleImageView, Glide, and external fonts for enhanced UI and experience.",
          "ImagePicker lets users select photos from the gallery or directly from the camera to customize their digital card.",
          "CircleImageView for rounded profile pictures, ensuring a clean and polished visual aesthetic.",
          "Glide image loading library for efficient and optimized image loading, reducing memory usage and improving performance.",
          "Use of external fonts for a more customized and branded user experience that is visually appealing.",
          "Material Design components like Material TextInputEditText for easy form handling and validation.",
          "Material Divider for visually separating sections within forms or content to enhance readability.",
          "ScrollView support for scrolling through the content effortlessly.",
          "Radio Buttons to allow easy selection between options, with a material design approach for consistency.",
          "Custom dialog creation for enhanced user interaction, supporting flexible and interactive pop-up windows."
        ]
      },
      {
        title: "Form and Input Features",
        features: [
          "Form Creation with Material TextInputEditText to collect essential user data like name, contact details, company info, etc.",
          "Text input validation ensures users provide the required information before proceeding.",
          "Dynamic form interaction where users can add or remove contact details as needed.",
          "Material design elements like Radio Buttons and checkboxes for selecting card preferences, themes, or sharing options.",
          "Input fields are designed for easy accessibility, making the app easy to navigate for all users."
        ]
      },
      {
        title: "User Interaction Features",
        features: [
          "Profile customization allowing users to add a profile picture, a short description, and contact information, making the digital card unique to each user.",
          "Ability to share digital cards with others via QR code or direct sharing links, streamlining the networking process.",
          "Instant access to the user's networking card, allowing quick sharing during networking events or meetings.",
          "Interactive design ensuring users can edit their card details in real-time with a smooth experience."
        ]
      },
      {
        title: "User Interface Design",
        features: [
          "The application boasts a minimalist yet functional user interface that highlights simplicity and ease of use.",
          "Responsive layouts ensure that the application looks great on various screen sizes, from small phones to large tablets.",
          "Visual elements like cards, buttons, and inputs are carefully designed to give users a smooth, intuitive experience.",
          "Profile cards are displayed in a sleek, visually-appealing manner that prioritizes the user's information without distractions."
        ]
      },
    ]
    
  },
 
  {
    id: '4',
    title: 'JavaScript : Comprehensive Learning and Practical Implementation',
    description: 'Created a comprehensive repository demonstrating in-depth understanding of JavaScript concepts and practices. Showcased practical implementations learned throughout the module.',
    technologies: ['Html', 'Css', 'Javascript'],
    imageUrl: 'https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'web',
    githubUrl: 'https://github.com/artichaudhary0/Js-Code',
     features : [
      {
        title: "Week 1: Introduction to JavaScript",
        features: [
          "Introduction to JavaScript programming language and its importance in web development.",
          "Explaining the differences between ES5 and ES6, focusing on syntax changes and new features like arrow functions and template literals."
        ]
      },
      {
        title: "Week 2: Output Methods",
        features: [
          "Explore different output methods in JavaScript for displaying data:",
          "document.write(), alert(), innerHTML",
        ]
      },
      {
        title: "Week 3: Data Types & Variables",
        features: [
          "Understand what a variable is, the different types of data in JavaScript (String, Number, Boolean, Object, etc.).",
          "Learn how to declare and initialize variables, and understand the significance of variable scopes."
        ]
      },
      {
        title: "Week 4: Operators",
        features: [
          "Introduction to various operators in JavaScript:",
          "Arithmetic Operators, Assignment Operators, Comparison Operators, Logical Operators.",
          "Projects focused on practical applications of operators like calculating grades, bills, interest, and employee salaries."
        ]
      },
      {
        title: "Week 5: Basic Calculation Project",
        features: [
          "Build a simple calculator to apply the knowledge of operators and arithmetic operations in a real-world project."
        ]
      },
      {
        title: "Week 6: Conditional Statements",
        features: [
          "Learn about various conditional statements in JavaScript, such as:",
          "If statements, Nested if statements, If-else ladders, Switch case statements."
        ]
      },
      {
        title: "Week 7: Loops",
        features: [
          "Explore the various loop types in JavaScript:",
          "while, do…while, For loops, Pattern generation, continue statement, goto statement."
        ]
      },
      {
        title: "Week 8: Functions",
        features: [
          "Learn the concept of functions and how they help in code reusability.",
          "Explore different types of functions like normal functions, arrow functions, recursive functions, closures, and IIFE.",
          "Understand the concept of hoisting and how function declarations work in JavaScript."
        ]
      },
      {
        title: "Week 9: Array & String",
        features: [
          "Understanding arrays and how to loop through them.",
          "Explore array methods such as push, pop, shift, unshift, splice.",
          "Introduction to built-in array functions like map, filter, forEach, and indexOf."
        ]
      },
      {
        title: "Week 10: Objects",
        features: [
          "Understanding objects in JavaScript, their properties, and methods.",
          "Learn how to work with arrays of objects, loop through objects, and access properties dynamically."
        ]
      },
      {
        title: "Week 11: Events",
        features: [
          "Learn about the HTML DOM (Document Object Model) and how JavaScript interacts with it.",
          "Event handling with `addEventListener` to manage user interactions like clicks and keypresses."
        ]
      },
      {
        title: "Week 12: OOP Concepts",
        features: [
          "Introduction to Object-Oriented Programming (OOP) concepts.",
          "Learn about Classes, Objects, and the four pillars of OOP: Encapsulation, Inheritance, Polymorphism, and Abstraction.",
          "Hands-on project on an e-commerce application using classes and objects."
        ]
      },
      {
        title: "Week 13: Timing Functions",
        features: [
          "Learn about JavaScript timing functions like `setTimeout` and `setInterval` to control code execution timing.",
          "Build a simple counter using these timing functions."
        ]
      },
      {
        title: "Week 14: Working with DOM & JSON",
        features: [
          "Learn how to manipulate the DOM (Document Object Model) using JavaScript to dynamically change HTML content.",
          "Introduction to JSON (JavaScript Object Notation), and how to store and retrieve data using it."
        ]
      },
      {
        title: "Week 15: AJAX & API",
        features: [
          "Introduction to AJAX (Asynchronous JavaScript and XML), which allows for asynchronous data exchange.",
          "Learn about the Fetch API and how to make API calls to fetch data from servers or external resources."
        ]
      },
      {
        title: "Week 16: Projects",
        features: [
          "Hands-on projects to integrate all learned concepts:",
          "Weather API, Corona API"
        ]
      },
      {
        title: "Week 17: Import, Export & Callbacks",
        features: [
          "Learn how to use import and export to modularize JavaScript code.",
          "Understand Spread Operators, Callbacks, and Promises for handling asynchronous operations."
        ]
      },
      {
        title: "Week 18: Async & Await",
        features: [
          "Dive deep into Promises and the Async/Await syntax for handling asynchronous operations more efficiently in JavaScript."
        ]
      },
      {
        title: "Conclusion",
        features: [
          "This repository provides a strong foundation in JavaScript programming.",
          "Equips students with practical knowledge and the skills necessary to build interactive web applications."
        ]
      }
    ]
  },
  {
    id: '5',
    title: 'Crypto Currencies Tracking',
    description: 'Developed a Crypto-Currencies Tracking App for real-time monitoring of cryptocurrency prices and market trends. The app integrates APIs to fetch live price updates, historical data, and provides advanced filtering options for users. Focused on delivering an intuitive UI/UX to ensure a seamless experience and efficient data visualization.',
    technologies: ['Flutter', 'Povider', 'Shared Preferences'],
    imageUrl: 'https://images.unsplash.com/photo-1643488072086-9d7318c0a04b?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'flutter',
    githubUrl: 'https://github.com/artichaudhary0/Crypto-Currency-Tracking-App',
    
       features: [
        {
          title: "Track Your Favorite Cryptocurrencies",
          features: ["Easily track and monitor the real-time prices of your favorite cryptocurrencies. Whether it’s Bitcoin, Ethereum, or a lesser-known altcoin, this feature allows you to add your selected cryptocurrencies to a personalized list for quick access.",
           "Save time by focusing on the cryptocurrencies that matter most to you. No need to search for the same currencies repeatedly, keeping your focus on the markets you're interested in."
        ] },
        {
          title: "Real-time Data",
          features:[ "This feature fetches the latest market data for all cryptocurrencies at any given moment. Real-time updates include data on price changes, market capitalization, trading volume, and percentage change in the last 24 hours.",
           "Stay ahead of market trends with up-to-the-minute data. Perfect for active traders or crypto enthusiasts who want to monitor fluctuations in the crypto market as they happen."
        ] },
        {
          title: "User-friendly Interface",
          features : ["The app provides an intuitive, easy-to-navigate interface that ensures users of all levels can interact with it effortlessly. From displaying cryptocurrency data to searching for coins, everything is designed for a seamless experience.",
          "A simple design makes it accessible to both beginners and advanced users. No need for complex navigation, reducing friction when accessing real-time market data."
        ] },
        {
          title: "Search Cryptocurrencies",
          features:[ "Search for cryptocurrencies by their name, ticker symbol, or market position. This feature allows users to easily find and access data for over 1,000 different cryptocurrencies from Bitcoin to the latest altcoins.",
           "Quickly access any cryptocurrency you wish to track, without sifting through a list. The search functionality ensures you can find any crypto instantly, saving valuable time."
       ] },
        {
          title: "Price Alerts",
          features:[ "Set personalized alerts for specific cryptocurrencies. Users can configure price thresholds for their selected coins, and receive notifications via in-app alerts or push notifications when the price crosses the set value.",
           "Be notified of significant market movements without needing to constantly check the app. This is particularly useful for traders who want to act quickly when a price hits a critical level."
        ] },
       
        {
          title: "Historical Data",
          features:[ "Access detailed historical data for any cryptocurrency over various timeframes. Users can explore past price changes, historical highs and lows, and other essential data points to analyze trends and market behavior over time.",
           "Having historical data allows users to conduct technical analysis, identify long-term trends, and make informed decisions based on past performance. It is essential for users planning their crypto investments over longer periods."
        ] },
        {
          title: "Favorites List",
          features:[ "Create a personalized list of cryptocurrencies that you want to track. Users can add or remove cryptocurrencies from the favorites list to maintain a quick-access collection of their most important coins.",
           "This feature helps organize the user experience by grouping their preferred coins in one easy-to-find list. Whether it's for quick monitoring or portfolio management, users get quick access to their important assets."
         ]  }
    ],
  },

  {
    id: '6',
    title: 'Master Calculator App',
    description: 'The Master Calculator Android App is a versatile and user-friendly mobile application designed to provide a comprehensive set of essential calculators and tools to assist users with various financial, educational, and mathematical calculations.',
    technologies: ['Kotlin', 'Java', 'State Management'],
    imageUrl: 'https://plus.unsplash.com/premium_photo-1677822252733-1e1aa38e90df?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'android', 
    githubUrl: 'https://github.com/artichaudhary0/MasterCalculatorAndroid',
   features: [
        {
          title: "Multiple Calculators in One App",
          features: [
            "Single app to access all essential calculators, improving user convenience.",
            "Easy-to-navigate home screen with quick access to various calculators.",
            "No need for multiple downloads for different calculator purposes."
          ],
        },
        {
          title: "Form and Data Validation",
          features: [
            "Prevents incorrect data entry, ensuring calculations are based on accurate inputs.",
            "Guides users by showing error messages when invalid data is entered.",
            "Helps prevent common mistakes like entering a negative amount or missing required fields."
          ],
        },
        {
          title: "User-Friendly Interface",
          features: [
            "Attractive and intuitive interface that reduces learning time.",
            "Clear layout and navigation make the app accessible to users of all ages.",
            "A well-organized design that minimizes the need for instructions."
          ],
         },
        {
          title: "Finance-Specific Calculators",
           features: [
            "Provides tools for critical financial tasks, making it easier to plan and manage finances.",
            "Helps users make informed decisions regarding loans, investments, and expenses.",
            "Customizable input fields to fit different financial scenarios."
          ],
        },
        {
          title: "Comprehensive Tools for Academic and Financial Management",
          features: [
            "Supports students and educators by providing tools for academic performance tracking.",
            "Helps students calculate their grades and better understand their performance.",
            "Useful for a range of educational purposes, from school projects to personal learning."
          ],
        }
    ]
  },
];

export const skills: Skill[] = [
  { name: 'Flutter', level: 90, category: 'flutter' },
  { name: 'Dart', level: 85, category: 'flutter' },
  { name: 'Android', level: 88, category: 'android' },
  { name: 'Kotlin', level: 85, category: 'android' },
  { name: 'Java', level: 80, category: 'android' },
  { name: 'React', level: 82, category: 'web' },
  { name: 'TypeScript', level: 78, category: 'web' },
  { name: 'Firebase', level: 85, category: 'other' },
  { name: 'Git', level: 88, category: 'other' }
];

export const experiences: Experience[] = [
  {
    company: 'Red & White Multimedia Education Official ',
    position: 'Android / Flutter Faculty',
    duration: 'July-2023 - Present',
    description: [
      'Trained over +50 students in Flutter, Android, and associated technologies, fostering expertise in modern mobile app development.',
      'Developed comprehensive curricula covering Dart, Kotlin, API Integration, and state management using Provider, Getx, and Bloc.',
      'Guided students in building real-world projects with Firebase and Hive for robust backend integration and data persistence.'
    ]
  },
  {
    company: 'iCreditSpace',
    position: 'Flutter Developer',
    duration: 'Feb 2023 - May 2023',
    description: [
      'Implemented robust user authentication and security measures, including features like password recovery, profile upload, and document upload.',
      'Integrated and managed multiple APIs simultaneously, enabling functionalities such as report downloads, document search, and data synchronization.',
      'Developed applications using the MVVM architecture, leveraging Getx and Bloc for efficient state management and seamless user experience.'
    ]
  },
  {
    company: 'Across The Globe (ATG)',
    position: 'Developer Intern',
    duration: 'Sep 2022 - May 2023',
    description: [
      'Built mobile applications leveraging Firebase services, including real-time database, cloud storage, authentication, and push notifications via FCM.',
      'Developed shopping apps with API integration for product information, search functionality, and cart management, enhancing user experience.',
      'Collaborated with cross-functional teams to implement server-side tasks using Firebase Cloud Functions and update websites with new features.'
    ]
  }
];