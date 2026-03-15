export type Locale = "en" | "ar";

const en = {
  // ─── Navigation ───────────────────────────────────────────────────────────
  nav: {
    home: "Home",
    aboutUs: "About Us",
    products: "Products",
    services: "Services",
    ourProjects: "Our Projects",
    contact: "Contact",
    // Products sub-menu
    padelCourt: "Padel Court",
    billiards: "Billiards",
    squashCourts: "Squash Courts",
    spaPool: "SPA & Pool",
    bowling: "Bowling",
    climbingWall: "Climbing Wall",
    wallInsulation: "Wall Insulation",
    sportEquipment: "Sport Equipment",
    urbanFurniture: "Urban Furniture",
    fitnessGym: "Fitness & Gym",
    cardioMachines: "Cardio Machines",
    strengthMachines: "Strength Machines",
    flexibilityMachine: "Flexibility Machine",
    fullscreenMode: "Fullscreen Mode",
    shootingRange: "Supply and Installation of Shooting Range Equipment",
    playground: "Playground",
    bleachersSeating: "Bleachers & Seating",
    // Services sub-menu
    maintenance: "Maintenance",
    spareParts: "Spare Parts",
    projectManagement: "Project Management",
    supply: "Supply",
    projectFacilityPlanning: "Project / Facility Planning",
    construction: "Construction",
    sportsFacilityOperation: "Sports Facility Operation",
  },

  // ─── Common ───────────────────────────────────────────────────────────────
  common: {
    readMore: "Read More",
    learnMore: "Learn More",
    viewAll: "View All",
    viewAllProducts: "View All Products",
    viewAllServices: "View All Services",
    viewAllProjects: "View All Projects",
    contactUs: "Contact Us",
    getQuote: "Get a Quote",
    sendMessage: "Send Message",
    sending: "Sending...",
    home: "Home",
    yearsExperience: "Years of Experience",
    projectsCompleted: "Projects Completed",
    countries: "Countries",
    clients: "Clients",
    ourWork: "Our Work",
    projects: "Projects",
  },

  // ─── Footer ───────────────────────────────────────────────────────────────
  footer: {
    description:
      "With over 20 years of experience, Faris Group is the leading supplier of superior quality sports and entertainment equipment in the Middle East.",
    workingHours: "Saturday – Thursday: 08:00 AM – 05:00 PM",
    quickLinks: "Quick Links",
    ourProducts: "Our Products",
    contactDetails: "Contact Details",
    copyright: "© Copyright 2023 - FarisGroup | All Rights Reserved. Powered By Eclipse",
    privacyPolicy: "Privacy policy",
    // Product links
    bowlingAlley: "Bowling Alley",
    padelCourt: "Padel Court",
    fitnessGym: "Fitness & Gym",
    playground: "Playground",
    climbingWall: "Climbing Wall",
    shootingRange: "Shooting Range",
    // Address
    addressJeddah: "Jeddah - Riyadh - Saudi Arabia",
    addressAbuDhabi: "Abu Dhabi - United Arab Emirates",
    addressMilano: "Milano - Italy",
    addressCairo: "Cairo - Egypt",
    addressManila: "Metro Manila, Philippines",
  },

  // ─── CTA / Contact Form ───────────────────────────────────────────────────
  cta: {
    badge: "Get a Quote",
    title: "Contact",
    titleHighlight: "Faris Group",
    namePlaceholder: "Your full name",
    nameLabel: "Full Name",
    emailLabel: "Email Address",
    emailPlaceholder: "your@email.com",
    phoneLabel: "Phone Number",
    phonePlaceholder: "+966 / +971",
    subjectLabel: "Subject",
    subjectPlaceholder: "Select a subject",
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your project or inquiry...",
    sendButton: "Send Message",
    sending: "Sending...",
    successTitle: "Message Sent!",
    successMessage:
      "Thank you for contacting Faris Group. Our team will respond within 24 hours.",
    sendAnother: "Send Another Message",
    subjects: {
      select: "Select a subject",
      sportsEquipment: "Sports Equipment",
      fitnessGym: "Fitness & Gym",
      padelCourt: "Padel Court",
      bleachersSeating: "Bleachers & Seating",
      shootingRange: "Shooting Range",
      construction: "Construction",
      supply: "Supply",
      maintenance: "Maintenance",
      general: "General Inquiry",
    },
  },

  // ─── Shared Quote Section ─────────────────────────────────────────────────
  quote: {
    badge: "QUOTE",
    title: "REQUEST A QUOTE",
    subtitle: "Let's get in touch",
    description: "We're open for any suggestion or just to have a chat",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    phonePlaceholder: "Phone Number",
    companyPlaceholder: "Company Name",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Message",
    sendButton: "Send a message",
  },

  // ─── Page Content (product & service pages) ───────────────────────────────
  pageContent: {
    bowling: {
      heroTitle: "Bowling Lanes",
      title: "Bowling Lanes",
      p1: "Step into the world of entertainment with Faris Group's exceptional Bowling solutions. We specialize in creating captivating experiences that delight bowlers of all ages and skill levels. With our comprehensive range of offerings, we ensure a memorable time filled with strikes, spares, and laughter.",
      p2: "Our modern bowling lanes are designed to deliver a thrilling and immersive experience. Whether you're a seasoned bowler or a beginner, our lanes provide a perfect platform to showcase your skills and enjoy friendly competition with family and friends.",
      p3: "Equipped with state-of-the-art technology and smooth surfaces, our lanes offer a seamless and enjoyable bowling experience.",
      p4: "At Faris Group, we understand that creating a striking entertainment experience goes beyond just the equipment. That's why our team of experts is dedicated to providing comprehensive services, including design, installation, and maintenance.",
      p5: "We work closely with our clients to customize bowling solutions that meet their specific needs and preferences, ensuring that every detail is tailored to perfection.",
      everythingTitle: "Everything Bowling!",
      p6: "In addition to our top-quality lanes, we provide a wide selection of bowling equipment to enhance your gameplay. From premium bowling balls and shoes to scoring systems and pinsetters, our offerings are designed to meet the highest standards of performance and durability.",
      p7: "Whether you're planning to set up a bowling center, upgrade an existing facility, or add a bowling alley to your entertainment complex, Faris Group is your trusted partner. Let us transform your space into a vibrant bowling destination, where bowlers of all ages can gather, compete, and create lasting memories.",
      p8: "Choose Faris Group for comprehensive Bowling solutions that exceed expectations and deliver an exceptional entertainment experience.",
    },
    padelCourt: {
      heroTitle: "Set up your padel court",
      title: "Set up your padel court",
      p1: "Padel, the fastest-growing fitness trend, is taking the sports world by storm. With its exciting gameplay, accessibility, and social appeal, Padel is capturing the hearts of fitness enthusiasts and athletes of all ages.",
      p2: "At Faris Group, we recognize the immense potential of Padel and are proud to offer comprehensive Padel Court solutions. Our state-of-the-art Padel Courts are designed to deliver an unparalleled playing experience, combining elements of tennis and squash to create a dynamic and engaging sport.",
      p3: "Whether you're a sports facility owner, a fitness club manager, or an individual looking to bring Padel to your community, our expertise in Padel court design, construction, and equipment supply ensures a seamless and exceptional experience from start to finish.",
      p4: "Experience the thrill of Padel with Faris Group, and be a part of the fitness trend that is sweeping the globe. Join us in revolutionizing the way people stay active, have fun, and connect through the power of Padel.",
      whyUsTitle: "Why Us",
      whyUs: [
        { title: "Expertise", description: "With a track record of excellence spanning over 25 years, FarisGroup has become a leader in the padel court industry. Our team of professionals brings extensive knowledge and experience to every project, ensuring that you receive the finest quality courts." },
        { title: "Tailored Solutions", description: "At FarisGroup, we believe in personalized experiences. Our configurator allows you to bring your vision to life, customizing your padel court according to your preferences. Choose from our diverse range of court models - VISION, PANORAMIC, and FORTE - to suit your specific needs." },
        { title: "Quality Assurance", description: "We are committed to delivering unparalleled quality in every aspect. From the construction systems to the materials used, each element of our padel courts is carefully selected and designed to provide durability, safety, and optimal performance." },
        { title: "Global Reach", description: "Our success has reached over 50 countries, and we continue to serve clients across the globe. Whether you're in Europe, America, Africa, or Asia, our efficient logistics and distribution network ensure timely delivery and hassle-free installation." },
        { title: "Comprehensive Services", description: "FarisGroup offers a range of services to support your padel court journey. From planning and purchase to installation and maintenance, we are with you every step of the way. Count on us for success, automation, roofing, and complementary services for your club." },
      ],
    },
    billiards: {
      heroTitle: "Billiards",
      title: "Billiards",
      p1: "At Faris Group, we are your ultimate destination for all your game table needs. Whether you're a seasoned billiards player, a fan of air hockey or table tennis, or enjoy friendly competitions on the football table, we have you covered.",
      p2: "Our extensive selection of billiard tables, cues, and accessories ensures an immersive and enjoyable gaming experience. Additionally, we offer a variety of game table accessories to enhance your gameplay and keep your equipment in top condition.",
      p3: "Elevate your entertainment space with our premium Billiards tables. Crafted with precision and style, our tables provide an authentic playing experience, perfect for leisurely games or professional tournaments.",
      p4: "Trust Faris Group to provide you with the highest quality game tables and accessories that will elevate your recreational space to new levels of fun and entertainment.",
    },
    squashCourts: {
      heroTitle: "Squash Courts",
      title: "Squash Courts",
      p1: "When it comes to Squash Courts, Faris Group is dedicated to delivering excellence. We understand the importance of creating top-notch facilities that meet international standards and cater to players of all levels.",
      p2: "With our expertise in squash court design, construction, and installation, we go above and beyond to build the best and most serviceable courts for a wide range of facilities.",
      p3: "Our commitment to quality extends beyond the construction phase. At Faris Group, we pride ourselves on providing exceptional customer service throughout the entire process. From initial consultation to final installation, our knowledgeable team works closely with our clients to ensure their specific requirements are met.",
      p4: "We take great care in selecting premium materials and employing skilled craftsmen to create squash courts that are not only visually stunning but also offer optimal playing conditions.",
    },
    spaPool: {
      heroTitle: "SPA & Pool",
      title: "SPA & Pool",
      p1: "Offering you a wide range of spa system products, we have the most complete line of traditional and infrared saunas, steam generators, and hot tubs. From entry level portable saunas, custom-cut saunas, to deluxe saunas with custom lighting, custom benching, multiple wood choices, and styles.",
      p2: "We have the solution for every space, taste, and budget.",
      p3: "Indulge in relaxation and rejuvenation with our luxurious SPA Systems. Designed for ultimate comfort and serenity, our systems include hot tubs, saunas, and wellness equipment, providing a tranquil escape for your guests.",
      p4: "We provide a range of wellness equipment that allows guests to enhance their self-care routines and create their own personal oasis. With Faris Group's SPA Systems, you can offer your guests a haven of tranquility where they can unwind, recharge, and indulge in the ultimate pampering experience.",
    },
    climbingWall: {
      heroTitle: "Climbing Wall",
      title: "Climbing Wall",
      p1: "Indoor and Outdoor Wall Climbing Facilities made from high quality wall climbing panels from reinforced fiberglass, organic resin and wood. We offer custom made designs according to your specifications.",
      p2: "We have a complete line of climbing accessories from safety helmets, carabiners, ropes, climbing holds, to safety landing mats and more.",
      p3: "Our climbing walls are not just structures; they are gateways to adventure and personal growth. With varying levels of difficulty, from beginner-friendly walls to challenging routes, climbers are encouraged to step out of their comfort zones, overcome obstacles, and build confidence. The thrill of scaling a climbing wall fosters a sense of achievement and empowerment while promoting physical fitness, coordination, and mental focus.",
    },
    sportEquipment: {
      heroTitle: "Sport Equipment",
      title: "Sport Equipment",
      p1: "Equip your sports facility with our wide range of high-quality sports equipment. From basketball hoops and soccer goals to volleyball nets and tennis rackets, we offer reliable and durable solutions for various sporting activities.",
    },
    shootingRange: {
      heroTitle: "Shooting Range",
      title: "Shooting Range",
      p1: "When it comes to shooting sports, precision and safety are of utmost importance. At Faris Group, we offer advanced Shooting Range solutions designed to meet the needs of shooting enthusiasts and professionals alike. Our comprehensive range includes cutting-edge target systems, bullet traps, and a wide selection of shooting accessories, all crafted with precision and built to the highest safety standards.",
      p2: "Our shooting ranges provide a controlled environment that allows shooters to hone their skills and enjoy their passion with confidence. The target systems we provide are designed for accuracy, reliability, and versatility, catering to various shooting disciplines and training requirements. From electronic target systems with precise scoring capabilities to reactive targets that add an element of excitement, we have the perfect solution to suit your shooting range needs.",
    },
    playground: {
      heroTitle: "Playground",
      title: "Playground",
      p1: "At Faris Group, we understand the importance of creating engaging and safe playgrounds for children. Our product range encompasses a wide variety of equipment that is suitable for playgrounds in schools, public parks, private homes, and compounds. With a focus on safety, all our products hold necessary safety certificates, providing you with peace of mind knowing that your children can play with confidence.",
      p2: "With Faris Group's product range, you can transform ordinary spaces into vibrant and engaging playgrounds, where children can unleash their creativity, develop essential motor skills, and experience the pure joy of play. Let us help you to bring smiles... while ensuring their safety and well-being.",
    },
    bleachersSeating: {
      heroTitle: "Bleachers & Seating",
      title: "Bleachers & Seating",
      p1: "At Faris Group, we understand the importance of comfortable and functional seating in any venue. That's why we offer a comprehensive range of Bleachers and Seating solutions to meet your specific requirements. Whether you're outfitting a stadium, sports arena, concert hall, or any other venue, we have the perfect seating solution for you.",
      p2: "Whether you're hosting sporting events, concerts, or other large gatherings, Faris Group's Bleachers and Seating solutions provide comfort, functionality, and style for your audience. Trust us to deliver seating solutions that enhance the overall experience and leave a lasting impression.",
    },
    fitnessGym: {
      heroTitle: "Fitness & Gym",
      heroSubtitle: "THE FUTURE IS HUMAN",
      title: "FITNESS & GYM",
      p1: "Set up a world-class fitness facility with our cutting-edge Fitness & Gym equipment. Our range includes treadmills, weight machines, cardio equipment, and more, designed to support diverse fitness goals.",
      p2: "Whether you are setting up a commercial gym, a hotel fitness center, or a private home gym, we provide comprehensive solutions from equipment selection to installation and after-sales support.",
    },
    cardioMachines: {
      heroTitle: "Cardio Machines",
      title: "Cardio Machines",
      p1: "Elevate your fitness experience with our top-of-the-line Cardio Machines. Designed for performance, durability, and user comfort, our range covers treadmills, ellipticals, stationary bikes, rowing machines, and more.",
      p2: "Whether for a commercial gym or a home setup, our cardio equipment supports all fitness levels and training goals, helping your clients achieve results efficiently.",
    },
    strengthMachines: {
      heroTitle: "Strength Machines",
      title: "Strength Machines",
      p1: "Build power, endurance, and muscle with our professional-grade Strength Machines. From cable machines and plate-loaded equipment to selectorized machines and free weights, we offer a complete strength training solution.",
      p2: "All our strength equipment is engineered to the highest standards, ensuring safety, biomechanical efficiency, and long-term durability for both commercial and private facilities.",
    },
    wallInsulation: {
      heroTitle: "Wall Insulation",
      title: "Wall Insulation",
      p1: "At Faris Group, we understand the importance of a well-insulated space. Our state-of-the-art wall insulation solutions are designed to provide superior thermal and acoustic insulation, ensuring comfort, energy efficiency, and tranquility in your home, office, or any other space.",
      p2: "Our expert team installs high-performance insulation materials that reduce energy consumption, enhance acoustic privacy, and improve overall building comfort.",
      whyChooseTitle: "Why Choose Our Wall Insulation?",
      whyChoose: [
        { title: "Thermal Comfort", description: "Our insulation materials help maintain a consistent indoor temperature, reducing the need for excessive heating or cooling and leading to significant energy savings." },
        { title: "Soundproofing", description: "Enjoy a peaceful environment free from external noise. Our insulation solutions effectively reduce noise transmission, creating a quieter and more serene space." },
        { title: "Energy Efficiency", description: "By minimizing heat loss in the winter and heat gain in the summer, our wall insulation contributes to lower energy bills and a reduced carbon footprint." },
        { title: "Durability", description: "We use high-quality, durable materials that ensure long-lasting performance and require minimal maintenance." },
        { title: "Expert Installation", description: "Our team of skilled professionals ensures precise and efficient installation, adhering to the highest industry standards." },
      ],
      applicationsTitle: "Applications",
      applications: [
        { title: "Homes", description: "Create a comfortable and energy-efficient living environment." },
        { title: "Offices", description: "Enhance productivity and comfort with effective temperature and noise control." },
        { title: "Retail Spaces", description: "Improve customer experience with a pleasant indoor climate." },
        { title: "Industrial Facilities", description: "Maintain optimal working conditions and protect against temperature extremes." },
      ],
    },
    maintenance: {
      heroTitle: "Maintenance",
      title: "MAINTENANCE",
      p1: "Faris Group, along with our engineers and other professional staff, provide repairs and maintenance services to bowling centers, gymnasiums, running tracks, sports fields and other sports facilities. In accordance with our clients' needs, we offer one time, or yearly contracts.",
      p2: "Maintenance services for sports fields with synthetic turf/rubber flooring is also offered with our German specialized cleaning machine, Horger.",
    },
    construction: {
      heroTitle: "Construction",
      title: "CONSTRUCTION",
      p1: "From squash courts, to running tracks, swimming pools, tennis courts and bowling centers, Faris Group has the experience and expertise to build all types of sports and recreational facilities to the highest international standards.",
    },
    spareParts: {
      heroTitle: "Spare Parts",
      title: "SPARE PARTS",
      p1: "Available in our inventory are a number of spare parts for bowling equipment, fitness equipment, squash court components, padel accessories, and more. We supply genuine parts to keep your equipment running at peak performance.",
    },
    supply: {
      heroTitle: "Supply",
      title: "SUPPLY",
      p1: "A distributor of top quality international brands, Faris Group supplies a wide range of sports and entertainment equipment. We source products from leading global manufacturers to ensure our clients receive the best solutions available.",
    },
    projectManagement: {
      heroTitle: "Project Management",
      title: "PROJECT MANAGEMENT",
      p1: "With over 20 years of experience in delivering sports facility projects, Faris Group provides end-to-end project management services. From initial planning and design to procurement, installation, and handover, our team ensures every project is delivered on time and within budget.",
    },
    projectFacilityPlanning: {
      heroTitle: "Project / Facility Planning",
      title: "PROJECT / FACILITY PLANNING",
      p1: "Our team of professionals are ready to assist you in planning your sports facility from the ground up. We provide feasibility studies, space planning, concept design, and detailed project plans tailored to your vision and budget.",
    },
    sportsFacilityOperation: {
      heroTitle: "Sports Facility Operation",
      title: "SPORTS FACILITY OPERATION",
      p1: "Operating a sports facility can pose many challenges. Faris Group offers comprehensive facility operation services including staff training, maintenance scheduling, operational management, and performance monitoring to keep your facility running at its best.",
    },
  },

  // ─── Projects Page ────────────────────────────────────────────────────────
  projectsPage: {
    heroTitle: "Projects",
    breadcrumb: "OUR PROJECTS",
    badge: "PROJECTS",
    title: "OUR PROJECTS GALLERY",
    subtitle: "With 30 years of experience in the field, get acquainted with our most inspiring projects.",
    filterAll: "All",
    categories: {
      bowling: "Bowling",
      climbingWall: "Climbing Wall",
      fitnessGym: "Fitness & Gym",
      others: "Others",
      padelCourt: "Padel Court",
      playground: "Playground",
      shootingRange: "Shooting Range",
      sportEquipment: "Sport Equipment",
      squashPadel: "Squash & Padel",
    },
  },

  // ─── Hero Section ─────────────────────────────────────────────────────────
  hero: {
    badge: "Total Sports Solutions",
    title1: "YOUR TOTAL",
    title2: "SPORTS",
    title3: "SOLUTION",
    subtitle:
      "Faris Group — the leading supplier of superior quality sports and entertainment equipment across the Middle East, with over 20 years of excellence.",
    cta1: "Explore Products",
    cta2: "View Projects",
    scrollText: "Scroll to explore",
  },

  // ─── About Section (Homepage) ─────────────────────────────────────────────
  aboutSection: {
    badge: "About FARIS GROUP",
    title1: "20+ Years of",
    title2: "Sports Excellence",
    description1:
      "Faris Group is an established name in the Sports and Leisure industry. Recognized as the leading supplier of superior quality sports and entertainment equipment in the Middle East.",
    description2:
      "Official distributor of top international brands, delivering turnkey projects from concept to completion — bowling centers, shooting ranges, climbing walls, fitness clubs and more.",
    highlights: [
      "Official distributor of top international brands",
      "Turnkey projects from concept to completion",
      "20+ years of industry excellence",
      "Operating across 5 countries",
    ],
    yearsLabel: "Years of Excellence",
    cta: "Learn More About Us",
  },

  // ─── Products Section ─────────────────────────────────────────────────────
  productsSection: {
    badge: "OUR PRODUCTS",
    title1: "OUR",
    title2: "PRODUCTS",
    subtitle: "World-class sports and entertainment solutions tailored to your vision.",
    exploreMore: "Explore More",
    items: [
      {
        title: "Bowling Alley",
        description:
          "Create a striking entertainment experience with our comprehensive Bowling solutions.",
        tag: "Entertainment",
      },
      {
        title: "Padel Court",
        description:
          "Experience the excitement of Padel with our top-quality Padel Courts.",
        tag: "Sports",
      },
      {
        title: "Fitness & Gym",
        description:
          "Set up a world-class fitness facility with our cutting-edge Fitness & Gym equipment.",
        tag: "Fitness",
      },
      {
        title: "Playground",
        description:
          "Creating engaging and safe playgrounds for children across schools, parks, and compounds.",
        tag: "Recreation",
      },
      {
        title: "Climbing Wall",
        description:
          "Inspire adventure and challenge with our innovative Climbing Walls built to the highest safety standards.",
        tag: "Adventure",
      },
      {
        title: "Shooting Range",
        description:
          "Ensure precision and safety in shooting sports with our advanced Shooting Range solutions.",
        tag: "Precision",
      },
    ],
  },

  // ─── Services Section ─────────────────────────────────────────────────────
  servicesSection: {
    badge: "SERVICES",
    title1: "OUR",
    title2: "SERVICES",
    viewAll: "View All Services",
    learnMore: "Learn More",
    desc1Title: "Sports Facility Design and Construction:",
    desc1: "We specialize in creating state-of-the-art sports facilities tailored to your unique needs. From concept to completion, we ensure every aspect of the design and construction process is meticulously executed.",
    desc2Title: "Equipment and Supply:",
    desc2: "Discover a wide range of top-quality sports equipment and supplies to enhance your facility. Whether you need fitness equipment, court accessories, or specialized gear, we offer reliable products that meet the highest industry standards.",
    items: [
      { title: "Maintenance", description: "Maintenance services for sports fields" },
      { title: "Project Management", description: "Management for sports projects" },
      { title: "Supply", description: "Sports and entertainment supplies" },
      { title: "Construction", description: "Faris Group delivers projects with distinction" },
    ],
  },

  // ─── Clients Section ──────────────────────────────────────────────────────
  clientsSection: {
    badge: "CLIENTS",
    title1: "OUR",
    title2: "CLIENTS",
  },

  // ─── About Page ───────────────────────────────────────────────────────────
  aboutPage: {
    heroTitle: "ABOUT US",
    badge: "About Us",
    title: "FARIS GROUP FOR",
    titleHighlight: "SPORTS SOLUTIONS",
    p1: "With over 20 years of experience, Faris Group is an established name in the Sports and Leisure industry. Recognized as the leading supplier of superior quality sports and entertainment equipment in the Middle East, Faris Group is an official distributor of top international brands.",
    p2: "Whether you require a private cinema or an Olympic sized football field, Faris Group is there from start to finish. Delivering turn-key projects such as bowling centers, shooting ranges, climbing walls, recreation centers, fitness clubs, playground parks, squash courts and running tracks to name a few.",
    p3: "Constantly abreast with new products and innovations, Faris Group is the Total Sports Solution.",
    missionTitle: "Our Mission",
    missionText:
      "To be the preferred sports solutions provider in the Middle East by offering innovative, high-quality products and services that exceed client expectations.",
    visionTitle: "Our Vision",
    visionText:
      "To be the most trusted name in sports infrastructure across the region, creating world-class facilities that inspire active, healthy communities.",
    testimonialsTitle: "What Our Clients Say",
    testimonialsBadge: "TESTIMONIALS",
    testimonials: [
      {
        quote: "Faris Group's innovative equipment transformed our fitness club, attracting more members and enhancing their experience. Highly recommended!",
        name: "Khalid Al-Rashid",
        role: "Owner of a Sports Complex",
      },
      {
        quote: "Faris Group played a pivotal role in transforming our school's sports facilities. Their expertise and dedication resulted in top-quality sports equipment and spaces that inspire our students to excel. We're grateful for their exceptional services.",
        name: "Saad Al-Muhanna",
        role: "Community Center Manager",
      },
      {
        quote: "I'm impressed by Faris Group's commitment to innovation. Their equipment and facilities have taken my sports experience to a whole new level. Thank you!",
        name: "Mohammed Al-Abdulaziz",
        role: "Sports Enthusiast",
      },
      {
        quote: "Faris Group exceeded our expectations with their exceptional sports solutions. Our facility has become a top-notch recreation center, thanks to their expertise and attention to detail.",
        name: "Fatima Al-Malik",
        role: "Director of a Fitness Club",
      },
    ],
    stats: [
      { value: "20+", label: "Years of Experience" },
      { value: "500+", label: "Projects Completed" },
      { value: "5", label: "Countries" },
      { value: "1000+", label: "Happy Clients" },
    ],
  },

  // ─── Contact Page ─────────────────────────────────────────────────────────
  contactPage: {
    heroTitle: "Contact Us",
    heroSubtitle: "Get in Touch",
    heroDescription:
      "Have a project in mind? Our expert team across KSA, UAE, and Italy is ready to help you find the perfect sports solution.",
    officesTitle: "Global",
    officesHighlight: "Offices",
    officesSub: "Our Locations",
    formSectionTitle: "Send Us a",
    formSectionHighlight: "Message",
    formSectionSub: "Reach Us",
    formSectionDesc:
      "Whether you need a quote, have questions about a product, or want to discuss a project, we're here to help.",
    hqAddress: "HQ Address",
    phone: "Phone",
    email: "Email",
    workingHours: "Working Hours",
    workingHoursValue: "Mon–Fri: 8AM–6PM | Sat: 9AM–1PM",
    offices: [
      { city: "Jeddah", country: "Saudi Arabia", label: "Headquarters" },
      { city: "Riyadh", country: "Saudi Arabia", label: "KSA – Riyadh" },
      { city: "Abu Dhabi", country: "UAE", label: "UAE Office" },
      { city: "Milano", country: "Italy", label: "Italy Office" },
    ],
  },

  // ─── Product Pages (shared) ───────────────────────────────────────────────
  productPage: {
    features: "Features",
    specifications: "Specifications",
    gallery: "Gallery",
    relatedProducts: "Related Products",
    requestInfo: "Request Information",
    contactForQuote: "Contact us for a custom quote",
  },

  // ─── Page Headers ─────────────────────────────────────────────────────────
  pages: {
    padelCourt: {
      title: "Padel Court",
      subtitle: "Sports Infrastructure",
      description:
        "Premium padel court construction and equipment supply across the Middle East.",
    },
    fitnessGym: {
      title: "Fitness & Gym",
      subtitle: "Fitness Solutions",
      description: "World-class fitness equipment and full gym setup solutions.",
    },
    bowling: {
      title: "Bowling",
      subtitle: "Entertainment",
      description: "Complete bowling alley setup and equipment supply.",
    },
    billiards: {
      title: "Billiards",
      subtitle: "Entertainment",
      description: "Premium billiards tables and accessories.",
    },
    squashCourts: {
      title: "Squash Courts",
      subtitle: "Sports Infrastructure",
      description: "Professional squash court construction and equipment.",
    },
    spaPool: {
      title: "SPA & Pool",
      subtitle: "Wellness",
      description: "Complete SPA and swimming pool solutions.",
    },
    climbingWall: {
      title: "Climbing Wall",
      subtitle: "Adventure Sports",
      description: "Indoor and outdoor climbing wall construction.",
    },
    shootingRange: {
      title: "Shooting Range",
      subtitle: "Precision Sports",
      description: "Full shooting range setup and equipment supply.",
    },
    playground: {
      title: "Playground",
      subtitle: "Recreation",
      description: "Safe and engaging playground equipment for all ages.",
    },
    bleachersSeating: {
      title: "Bleachers & Seating",
      subtitle: "Stadium Seating",
      description: "Professional bleachers and stadium seating solutions.",
    },
    wallInsulation: {
      title: "Wall Insulation",
      subtitle: "Construction",
      description: "High-quality wall insulation solutions for sports facilities.",
    },
    sportEquipment: {
      title: "Sport Equipment",
      subtitle: "Equipment Supply",
      description: "Premium sports equipment for all disciplines.",
    },
    cardioMachines: {
      title: "Cardio Machines",
      subtitle: "Fitness Equipment",
      description: "Top-quality cardio machines for commercial and residential gyms.",
    },
    strengthMachines: {
      title: "Strength Machines",
      subtitle: "Fitness Equipment",
      description: "Professional strength training equipment.",
    },
    // Services
    maintenance: {
      title: "Maintenance",
      subtitle: "After-Sales Service",
      description: "Comprehensive maintenance services for sports facilities.",
    },
    construction: {
      title: "Construction",
      subtitle: "Sports Infrastructure",
      description: "Full sports facility construction from concept to completion.",
    },
    supply: {
      title: "Supply",
      subtitle: "Equipment Supply",
      description: "Reliable supply of sports and entertainment equipment.",
    },
    projectManagement: {
      title: "Project Management",
      subtitle: "Management",
      description: "Professional project management for sports infrastructure.",
    },
    spareParts: {
      title: "Spare Parts",
      subtitle: "After-Sales",
      description: "Genuine spare parts for all equipment.",
    },
    projectFacilityPlanning: {
      title: "Project / Facility Planning",
      subtitle: "Planning",
      description: "Expert planning services for sports facilities.",
    },
    sportsFacilityOperation: {
      title: "Sports Facility Operation",
      subtitle: "Operations",
      description: "Full sports facility operation and management services.",
    },
    products: {
      title: "Our Products",
      subtitle: "Product Catalog",
      description: "Explore our comprehensive range of sports and entertainment solutions.",
    },
    services: {
      title: "Our Services",
      subtitle: "Services",
      description: "Comprehensive sports facility services from supply to construction.",
    },
    projects: {
      title: "Our Projects",
      subtitle: "Portfolio",
      description: "Explore our portfolio of sports facility projects across the region.",
    },
  },

  // ─── Products Page ────────────────────────────────────────────────────────
  productsPage: {
    badge: "OUR SPECIALIZATIONS",
    heading1: "OUR",
    heading2: "PRODUCTS",
    sectionSubtitle: "Learn about Faris Group products.",
    seeMore: "See more",
    categories: [
      { title: "Wall Insulation", description: "At Faris Group, we understand the importance of a well-insulated space. Our state-of-the-art wall insulation solutions are designed to provide superior thermal and acoustic insulation, ensuring comfort, energy efficiency, and tranquility in your home, office, or any other space." },
      { title: "Bowling Alley", description: "Create a striking entertainment experience with our comprehensive Bowling solutions. From modern bowling lanes to top-quality equipment, our offerings ensure a memorable time for bowlers of all ages and skill levels." },
      { title: "Padel Court", description: "Experience the excitement of Padel with our top-quality Padel Courts. Designed for both recreational and competitive play, our courts offer excellent durability and performance, ensuring a thrilling game every time." },
      { title: "Fitness & Gym", description: "Set up a world-class fitness facility with our cutting-edge Fitness & Gym equipment. Our range includes treadmills, weight machines, cardio equipment, and more, designed to support diverse fitness goals." },
      { title: "Playground", description: "At Faris Group, we understand the importance of creating engaging and safe playgrounds for children. Our product range encompasses a wide variety of equipment that is suitable for playgrounds in schools, public parks, private homes, and compounds." },
      { title: "Climbing Wall", description: "Inspire adventure and challenge with our innovative Climbing Walls. Built to the highest safety standards and quality, our walls offer varying levels of difficulty, providing a thrilling experience for climbers while promoting physical fitness and skill development." },
      { title: "Shooting Range", description: "Ensure precision and safety in shooting sports with our advanced Shooting Range solutions. Our range includes target systems, bullet traps, and shooting accessories, providing a controlled and safe environment for enthusiasts and professionals." },
      { title: "Billiards", description: "Elevate your entertainment space with our premium Billiard tables. Crafted with precision and style, our tables provide an authentic playing experience, perfect for leisurely games or professional tournaments." },
      { title: "Sport Equipment", description: "Equip your sports facility with our wide range of high-quality sports equipment. From basketball hoops and soccer goals to volleyball nets and tennis rackets, we offer reliable and durable solutions for various sporting activities." },
      { title: "Spa & Pool", description: "Creating luxurious and rejuvenating experiences through our exceptional SPA and Pool solutions. Whether you're looking to create a tranquil oasis for relaxation or a refreshing aquatic environment." },
      { title: "Squash", description: "Enhance your fitness facility or sports complex with our state-of-the-art Squash Courts. Built to international standards, our courts offer excellent ball rebound and optimal playing conditions, catering to players of all levels." },
      { title: "Bleachers & Seating", description: "Maximize spectator comfort and viewing experience with our durable and ergonomic Bleachers & Seating solutions. Whether it's for stadiums, arenas, or outdoor events, our seating options offer excellent sightlines and superior comfort." },
      { title: "Urban Furniture", description: "Enhance public spaces and recreational areas with our stylish and functional Urban Furniture. From benches and picnic tables to bike racks and waste management systems, our designs blend aesthetics with durability, creating inviting environments for communities." },
    ],
  },
};

// ─── Arabic Translations ────────────────────────────────────────────────────

const ar = {
  nav: {
    home: "الرئيسية",
    aboutUs: "من نحن",
    products: "المنتجات",
    services: "الخدمات",
    ourProjects: "مشاريعنا",
    contact: "اتصل بنا",
    padelCourt: "ملعب بادل",
    billiards: "البلياردو",
    squashCourts: "ملاعب الإسكواش",
    spaPool: "السبا والمسبح",
    bowling: "البولينج",
    climbingWall: "جدار التسلق",
    wallInsulation: "عزل الجدران",
    sportEquipment: "المعدات الرياضية",
    urbanFurniture: "الأثاث الحضري",
    fitnessGym: "اللياقة والصالات",
    cardioMachines: "أجهزة الكارديو",
    strengthMachines: "أجهزة القوة",
    flexibilityMachine: "جهاز المرونة",
    fullscreenMode: "وضع ملء الشاشة",
    shootingRange: "توريد وتركيب معدات ميدان الرماية",
    playground: "الملاعب",
    bleachersSeating: "المدرجات والمقاعد",
    maintenance: "الصيانة",
    spareParts: "قطع الغيار",
    projectManagement: "إدارة المشاريع",
    supply: "التوريد",
    projectFacilityPlanning: "تخطيط المشاريع والمنشآت",
    construction: "الإنشاء",
    sportsFacilityOperation: "تشغيل المنشآت الرياضية",
  },

  common: {
    readMore: "اقرأ المزيد",
    learnMore: "اعرف المزيد",
    viewAll: "عرض الكل",
    viewAllProducts: "عرض جميع المنتجات",
    viewAllServices: "عرض جميع الخدمات",
    viewAllProjects: "عرض جميع المشاريع",
    contactUs: "اتصل بنا",
    getQuote: "احصل على عرض سعر",
    sendMessage: "إرسال الرسالة",
    sending: "جاري الإرسال...",
    home: "الرئيسية",
    yearsExperience: "سنوات خبرة",
    projectsCompleted: "مشروع منجز",
    countries: "دول",
    clients: "عميل",
    ourWork: "أعمالنا",
    projects: "مشاريعنا",
  },

  footer: {
    description:
      "بخبرة تزيد على 20 عامًا، تُعدّ مجموعة فارس المورد الرائد لمعدات رياضية وترفيهية عالية الجودة في منطقة الشرق الأوسط.",
    workingHours: "السبت – الخميس: 08:00 صباحًا – 05:00 مساءً",
    quickLinks: "روابط سريعة",
    ourProducts: "منتجاتنا",
    contactDetails: "بيانات التواصل",
    copyright: "© حقوق النشر 2023 - مجموعة فارس | جميع الحقوق محفوظة. تصميم Eclipse",
    privacyPolicy: "سياسة الخصوصية",
    bowlingAlley: "صالة البولينج",
    padelCourt: "ملعب البادل",
    fitnessGym: "اللياقة والصالات",
    playground: "الملاعب",
    climbingWall: "جدار التسلق",
    shootingRange: "ميدان الرماية",
    addressJeddah: "جدة - الرياض - المملكة العربية السعودية",
    addressAbuDhabi: "أبوظبي - الإمارات العربية المتحدة",
    addressMilano: "ميلانو - إيطاليا",
    addressCairo: "القاهرة - مصر",
    addressManila: "مترو مانيلا - الفلبين",
  },

  cta: {
    badge: "احصل على عرض سعر",
    title: "تواصل مع",
    titleHighlight: "مجموعة فارس",
    namePlaceholder: "اسمك الكامل",
    nameLabel: "الاسم الكامل",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "بريدك@example.com",
    phoneLabel: "رقم الهاتف",
    phonePlaceholder: "+966 / +971",
    subjectLabel: "الموضوع",
    subjectPlaceholder: "اختر موضوعًا",
    messageLabel: "الرسالة",
    messagePlaceholder: "أخبرنا عن مشروعك أو استفسارك...",
    sendButton: "إرسال الرسالة",
    sending: "جاري الإرسال...",
    successTitle: "تم إرسال رسالتك!",
    successMessage:
      "شكرًا لتواصلك مع مجموعة فارس. سيرد فريقنا خلال 24 ساعة.",
    sendAnother: "إرسال رسالة أخرى",
    subjects: {
      select: "اختر موضوعًا",
      sportsEquipment: "المعدات الرياضية",
      fitnessGym: "اللياقة والصالات",
      padelCourt: "ملعب البادل",
      bleachersSeating: "المدرجات والمقاعد",
      shootingRange: "ميدان الرماية",
      construction: "الإنشاء",
      supply: "التوريد",
      maintenance: "الصيانة",
      general: "استفسار عام",
    },
  },

  // ─── Shared Quote Section ─────────────────────────────────────────────────
  quote: {
    badge: "عرض سعر",
    title: "طلب عرض سعر",
    subtitle: "تواصل معنا",
    description: "نحن متاحون لأي اقتراح أو مجرد للتحدث",
    namePlaceholder: "اسمك",
    emailPlaceholder: "بريدك الإلكتروني",
    phonePlaceholder: "رقم الهاتف",
    companyPlaceholder: "اسم الشركة",
    subjectPlaceholder: "الموضوع",
    messagePlaceholder: "الرسالة",
    sendButton: "إرسال رسالة",
  },

  // ─── Page Content ─────────────────────────────────────────────────────────
  pageContent: {
    bowling: {
      heroTitle: "صالات البولينج",
      title: "صالات البولينج",
      p1: "ادخل إلى عالم الترفيه مع حلول البولينج الاستثنائية من مجموعة فارس. نتخصص في ابتكار تجارب رائعة تُسعد جميع الأعمار والمستويات. مع مجموعتنا الشاملة، نضمن وقتًا لا يُنسى مليئاً بالضربات الرائعة والمتعة.",
      p2: "مسارات البولينج الحديثة لدينا مصممة لتقديم تجربة مثيرة وغامرة. سواء كنت لاعباً محترفاً أو مبتدئاً، توفر مساراتنا منصة مثالية لإظهار مهاراتك والاستمتاع بالمنافسة الودية.",
      p3: "مجهزة بأحدث التقنيات وأسطح سلسة، تتيح مساراتنا تجربة بولينج ممتعة وانسيابية.",
      p4: "في مجموعة فارس، ندرك أن خلق تجربة ترفيهية متميزة يتجاوز مجرد المعدات. لذا يلتزم فريق خبرائنا بتقديم خدمات شاملة تشمل التصميم والتركيب والصيانة.",
      p5: "نعمل عن كثب مع عملائنا لتخصيص حلول البولينج وفق احتياجاتهم وتفضيلاتهم، لضمان أن كل تفصيل مُنفَّذ بإتقان.",
      everythingTitle: "كل شيء عن البولينج!",
      p6: "إضافة إلى مساراتنا عالية الجودة، نوفر مجموعة واسعة من معدات البولينج. من كرات وأحذية البولينج المتميزة إلى أنظمة التسجيل والـ pinsetters، صُممت عروضنا لتلبية أعلى معايير الأداء والمتانة.",
      p7: "سواء كنت تخطط لإنشاء مركز بولينج أو تطوير منشأة قائمة أو إضافة صالة بولينج إلى مجمعك الترفيهي، فمجموعة فارس شريكك الموثوق. دعنا نحوّل مساحتك إلى وجهة بولينج نابضة بالحياة.",
      p8: "اختر مجموعة فارس لحلول بولينج شاملة تفوق التوقعات وتقدم تجربة ترفيهية استثنائية.",
    },
    padelCourt: {
      heroTitle: "أنشئ ملعب البادل الخاص بك",
      title: "أنشئ ملعب البادل الخاص بك",
      p1: "البادل، أسرع اتجاهات اللياقة البدنية نمواً، يجتاح عالم الرياضة. بأسلوبه الممتع وسهولة ممارسته وجاذبيته الاجتماعية، يستحوذ البادل على قلوب محبي اللياقة والرياضيين من جميع الأعمار.",
      p2: "في مجموعة فارس، ندرك الإمكانات الهائلة للبادل ونفخر بتقديم حلول شاملة لملاعب البادل. ملاعبنا المتطورة مصممة لتقديم تجربة لعب لا مثيل لها، تجمع بين عناصر التنس والإسكواش لخلق رياضة ديناميكية وجذابة.",
      p3: "سواء كنت مالك منشأة رياضية أو مدير نادي لياقة أو فرداً يسعى لإدخال البادل إلى مجتمعه، فإن خبرتنا في تصميم ملاعب البادل وإنشائها وتوريد معداتها تضمن تجربة سلسة واستثنائية من البداية إلى النهاية.",
      p4: "اختبر إثارة البادل مع مجموعة فارس، وكن جزءاً من الاتجاه الرياضي الذي يجتاح العالم. انضم إلينا في ثورة طريقة النشاط البدني والمتعة والتواصل من خلال قوة البادل.",
      whyUsTitle: "لماذا نحن؟",
      whyUs: [
        { title: "الخبرة", description: "بسجل حافل من التميز يمتد لأكثر من 25 عاماً، أصبحت مجموعة فارس رائدة في صناعة ملاعب البادل. يجلب فريقنا من المحترفين معرفة وخبرة واسعة لكل مشروع، لضمان حصولك على أجود ملاعب." },
        { title: "حلول مخصصة", description: "في مجموعة فارس، نؤمن بالتجارب الشخصية. يتيح لك منشئ الملاعب لدينا تجسيد رؤيتك وتخصيص ملعب البادل وفق تفضيلاتك. اختر من بين نماذج ملاعبنا VISION وPANORAMIC وFORTE لتناسب احتياجاتك." },
        { title: "ضمان الجودة", description: "نلتزم بتقديم جودة لا مثيل لها في كل جانب. من أنظمة البناء إلى المواد المستخدمة، كل عنصر في ملاعبنا مختار ومصمم بعناية لضمان المتانة والسلامة والأداء الأمثل." },
        { title: "انتشار عالمي", description: "نجاحنا امتد إلى أكثر من 50 دولة، ونواصل خدمة العملاء حول العالم. شبكة الخدمات اللوجستية والتوزيع الفعالة لدينا تضمن التسليم في الوقت المناسب والتركيب دون متاعب." },
        { title: "خدمات شاملة", description: "تقدم مجموعة فارس مجموعة من الخدمات لدعم رحلة ملعب البادل الخاص بك. من التخطيط والشراء إلى التركيب والصيانة، نحن معك في كل خطوة." },
      ],
    },
    billiards: {
      heroTitle: "البلياردو",
      title: "البلياردو",
      p1: "في مجموعة فارس، نحن وجهتك الأولى لجميع احتياجات طاولات الألعاب. سواء كنت لاعب بلياردو محترفاً أو محباً لهوكي الهواء أو تنس الطاولة أو كرة القدم الصغيرة، لدينا ما تحتاج.",
      p2: "يضمن تشكيلتنا الواسعة من طاولات البلياردو والعصي والإكسسوارات تجربة لعب غامرة وممتعة. كما نقدم مجموعة متنوعة من إكسسوارات الطاولات لتعزيز لعبتك والحفاظ على معداتك في أفضل حالة.",
      p3: "ارفع مستوى مساحتك الترفيهية مع طاولات البلياردو المتميزة لدينا. مصنوعة بدقة وأناقة، توفر طاولاتنا تجربة لعب أصيلة، مثالية للألعاب الترفيهية أو البطولات الاحترافية.",
      p4: "ثق بمجموعة فارس لتزويدك بأعلى جودة من طاولات الألعاب والإكسسوارات التي ترفع مساحتك الترفيهية إلى مستويات جديدة من المتعة.",
    },
    squashCourts: {
      heroTitle: "ملاعب الإسكواش",
      title: "ملاعب الإسكواش",
      p1: "عندما يتعلق الأمر بملاعب الإسكواش، تلتزم مجموعة فارس بتقديم التميز. ندرك أهمية إنشاء منشآت من الدرجة الأولى تلبي المعايير الدولية وتلائم لاعبي جميع المستويات.",
      p2: "بخبرتنا في تصميم ملاعب الإسكواش وإنشائها وتركيبها، نسعى إلى بناء أفضل الملاعب وأكثرها خدمةً لمجموعة واسعة من المنشآت.",
      p3: "التزامنا بالجودة يمتد إلى ما هو أبعد من مرحلة الإنشاء. نفخر بتقديم خدمة عملاء استثنائية طوال العملية بأكملها، من الاستشارة الأولية إلى التركيب النهائي.",
      p4: "نولي عناية فائقة في اختيار المواد المتميزة وتوظيف حرفيين مهرة لإنشاء ملاعب إسكواش لا تتميز بالجمال البصري فحسب، بل توفر أيضاً ظروف لعب مثالية.",
    },
    spaPool: {
      heroTitle: "السبا والمسبح",
      title: "السبا والمسبح",
      p1: "نقدم لك مجموعة واسعة من منتجات أنظمة السبا، وتضم المجموعة الأكثر اكتمالاً من الساونات التقليدية والأشعة تحت الحمراء ومولدات البخار وأحواض الاسترخاء. من الساونات المحمولة الأولية إلى الساونات المخصصة وصولاً إلى الساونات الفاخرة مع إضاءة مخصصة وتصاميم متعددة.",
      p2: "لدينا الحل المناسب لكل مساحة وذوق وميزانية.",
      p3: "انغمس في الاسترخاء والتجديد مع أنظمة السبا الفاخرة لدينا. مصممة لأقصى درجات الراحة والهدوء، تشمل أنظمتنا أحواض الاسترخاء والساونات ومعدات العافية.",
      p4: "نقدم مجموعة من معدات العافية تتيح للضيوف تعزيز روتين العناية بالنفس وخلق واحتهم الشخصية. مع أنظمة سبا مجموعة فارس، يمكنك تقديم ملاذ من الهدوء لضيوفك.",
    },
    climbingWall: {
      heroTitle: "جدار التسلق",
      title: "جدار التسلق",
      p1: "منشآت تسلق الجدران الداخلية والخارجية مصنوعة من ألواح تسلق عالية الجودة من الفايبرغلاس المقوى والراتنج العضوي والخشب. نقدم تصاميم مخصصة وفق مواصفاتك.",
      p2: "لدينا مجموعة كاملة من إكسسوارات التسلق من خوذات السلامة والكاربينرات والحبال ومقابض التسلق إلى حصائر الهبوط الآمن والمزيد.",
      p3: "جدران التسلق لدينا ليست مجرد هياكل؛ بل هي بوابات للمغامرة والنمو الشخصي. بمستويات متفاوتة من الصعوبة، تشجع المتسلقين على الخروج من مناطق راحتهم وبناء الثقة. تعزز إثارة التسلق الإحساس بالإنجاز مع تطوير اللياقة البدنية والتنسيق والتركيز.",
    },
    sportEquipment: {
      heroTitle: "المعدات الرياضية",
      title: "المعدات الرياضية",
      p1: "جهز منشأتك الرياضية بمجموعتنا الواسعة من المعدات الرياضية عالية الجودة. من أطواق كرة السلة وأهداف كرة القدم إلى شبكات الكرة الطائرة ومضارب التنس، نقدم حلولاً موثوقة ومتينة لمختلف الأنشطة الرياضية.",
    },
    shootingRange: {
      heroTitle: "ميدان الرماية",
      title: "ميدان الرماية",
      p1: "عندما يتعلق الأمر برياضة الرماية، فإن الدقة والسلامة هما الأهم. في مجموعة فارس، نقدم حلولاً متقدمة لميادين الرماية مصممة لتلبية احتياجات هواة الرماية والمحترفين. تشمل مجموعتنا الشاملة أنظمة أهداف متطورة ومصائد رصاص ومجموعة واسعة من إكسسوارات الرماية، كلها مصنوعة بدقة وتلبي أعلى معايير السلامة.",
      p2: "توفر ميادين الرماية لدينا بيئة منضبطة تتيح للرماة صقل مهاراتهم والاستمتاع بشغفهم بثقة. أنظمة الأهداف التي نوفرها مصممة للدقة والموثوقية والتنوع، لتلبية مختلف تخصصات الرماية ومتطلبات التدريب.",
    },
    playground: {
      heroTitle: "الملاعب",
      title: "الملاعب",
      p1: "في مجموعة فارس، ندرك أهمية إنشاء ملاعب جذابة وآمنة للأطفال. تشمل مجموعة منتجاتنا مجموعة واسعة من المعدات المناسبة للملاعب في المدارس والحدائق العامة والمنازل الخاصة والمجمعات السكنية. مع التركيز على السلامة، تحمل جميع منتجاتنا شهادات السلامة اللازمة.",
      p2: "مع مجموعة منتجات مجموعة فارس، يمكنك تحويل المساحات العادية إلى ملاعب نابضة بالحياة حيث يطلق الأطفال العنان لإبداعهم وتطوير مهاراتهم الحركية الأساسية.",
    },
    bleachersSeating: {
      heroTitle: "المدرجات والمقاعد",
      title: "المدرجات والمقاعد",
      p1: "في مجموعة فارس، ندرك أهمية المقاعد المريحة والعملية في أي مكان. لذلك نقدم مجموعة شاملة من حلول المدرجات والمقاعد لتلبية متطلباتك المحددة. سواء كنت تجهز ملعباً أو صالة رياضية أو قاعة حفلات أو أي مكان آخر، لدينا حل المقاعد المثالي لك.",
      p2: "سواء كنت تستضيف فعاليات رياضية أو حفلات موسيقية أو تجمعات كبيرة، توفر حلول المدرجات والمقاعد من مجموعة فارس الراحة والوظيفية والأناقة لجمهورك.",
    },
    fitnessGym: {
      heroTitle: "اللياقة والصالات",
      heroSubtitle: "المستقبل إنساني",
      title: "اللياقة والصالات",
      p1: "أنشئ منشأة لياقة عالمية المستوى مع معداتنا المتطورة. تشمل مجموعتنا أجهزة المشي وآلات الأثقال ومعدات الكارديو والمزيد، مصممة لدعم أهداف اللياقة المتنوعة.",
      p2: "سواء كنت تنشئ صالة رياضية تجارية أو مركز لياقة فندقياً أو صالة رياضية منزلية خاصة، نقدم حلولاً شاملة من اختيار المعدات إلى التركيب ودعم ما بعد البيع.",
    },
    cardioMachines: {
      heroTitle: "أجهزة الكارديو",
      title: "أجهزة الكارديو",
      p1: "ارفع تجربة اللياقة البدنية مع أجهزة الكارديو الرفيعة لدينا. مصممة للأداء والمتانة وراحة المستخدم، تشمل مجموعتنا أجهزة المشي والإليبتيكال والدراجات الثابتة وأجهزة التجديف والمزيد.",
      p2: "سواء للصالات التجارية أو الاستخدام المنزلي، تدعم معدات الكارديو لدينا جميع مستويات اللياقة وأهداف التدريب.",
    },
    strengthMachines: {
      heroTitle: "أجهزة القوة",
      title: "أجهزة القوة",
      p1: "ابنِ القوة والتحمل والعضلات مع أجهزة القوة الاحترافية لدينا. من أجهزة الكابل والأجهزة ذات الأثقال الحرة إلى أجهزة الاختيار والأوزان الحرة، نقدم حلاً متكاملاً لتدريب القوة.",
      p2: "جميع معدات القوة لدينا مصنوعة وفق أعلى المعايير، مما يضمن السلامة والكفاءة البيوميكانيكية والمتانة طويلة الأمد للمنشآت التجارية والخاصة.",
    },
    wallInsulation: {
      heroTitle: "عزل الجدران",
      title: "عزل الجدران",
      p1: "في مجموعة فارس، ندرك أهمية المساحة المعزولة جيداً. حلول عزل الجدران المتطورة لدينا مصممة لتوفير عزل حراري وصوتي متميز، مما يضمن الراحة وكفاءة الطاقة والهدوء في منزلك أو مكتبك أو أي مكان آخر.",
      p2: "يضمن فريقنا المتخصص تركيب مواد عزل عالية الأداء تقلل من استهلاك الطاقة وتعزز الخصوصية الصوتية وتحسين الراحة العامة للمبنى.",
      whyChooseTitle: "لماذا تختار عزل جدراننا؟",
      whyChoose: [
        { title: "الراحة الحرارية", description: "تساعد مواد العزل لدينا في الحفاظ على درجة حرارة داخلية ثابتة، مما يقلل الحاجة إلى التدفئة أو التبريد المفرط ويؤدي إلى توفير كبير في الطاقة." },
        { title: "العزل الصوتي", description: "استمتع ببيئة هادئة خالية من الضوضاء الخارجية. تقلل حلول العزل لدينا فعلياً من انتقال الصوت." },
        { title: "كفاءة الطاقة", description: "من خلال تقليل فقد الحرارة في الشتاء واكتسابها في الصيف، تسهم جدراننا المعزولة في خفض فواتير الطاقة." },
        { title: "المتانة", description: "نستخدم مواد عالية الجودة ومتينة تضمن أداءً طويل الأمد يتطلب صيانة ضئيلة." },
        { title: "تركيب متخصص", description: "يضمن فريقنا من المحترفين المهرة تركيباً دقيقاً وفعالاً وفق أعلى المعايير." },
      ],
      applicationsTitle: "التطبيقات",
      applications: [
        { title: "المنازل", description: "أنشئ بيئة معيشية مريحة وموفرة للطاقة." },
        { title: "المكاتب", description: "عزز الإنتاجية والراحة مع التحكم الفعال في درجة الحرارة والضوضاء." },
        { title: "مساحات التجزئة", description: "حسّن تجربة العملاء بمناخ داخلي مريح." },
        { title: "المنشآت الصناعية", description: "حافظ على ظروف عمل مثالية وحماية من درجات الحرارة القصوى." },
      ],
    },
    maintenance: {
      heroTitle: "الصيانة",
      title: "الصيانة",
      p1: "مجموعة فارس، بمشاركة مهندسينا وكوادرها المتخصصة، تقدم خدمات إصلاح وصيانة لصالات البولينج والصالات الرياضية ومسارات الجري والملاعب الرياضية والمنشآت الرياضية الأخرى. وفقاً لاحتياجات عملائنا، نقدم عقوداً لمرة واحدة أو سنوية.",
      p2: "تُقدَّم أيضاً خدمات صيانة الملاعب الرياضية ذات العشب الصناعي أو الأرضيات المطاطية مع آلة التنظيف الألمانية المتخصصة Horger.",
    },
    construction: {
      heroTitle: "الإنشاء",
      title: "الإنشاء",
      p1: "من ملاعب الإسكواش ومسارات الجري وحمامات السباحة وملاعب التنس وصالات البولينج، تمتلك مجموعة فارس الخبرة والكفاءة لبناء جميع أنواع المنشآت الرياضية والترفيهية وفق أعلى المعايير الدولية.",
    },
    spareParts: {
      heroTitle: "قطع الغيار",
      title: "قطع الغيار",
      p1: "يتوفر في مخزوننا عدد من قطع الغيار لمعدات البولينج ومعدات اللياقة ومكونات ملاعب الإسكواش وإكسسوارات البادل وغيرها. نورد قطعاً أصلية للحفاظ على تشغيل معداتك بأعلى كفاءة.",
    },
    supply: {
      heroTitle: "التوريد",
      title: "التوريد",
      p1: "بوصفنا موزعاً للعلامات التجارية العالمية المتميزة، توفر مجموعة فارس مجموعة واسعة من معدات الرياضة والترفيه. نستورد المنتجات من كبار المصنعين العالميين لضمان حصول عملائنا على أفضل الحلول المتاحة.",
    },
    projectManagement: {
      heroTitle: "إدارة المشاريع",
      title: "إدارة المشاريع",
      p1: "بخبرة تتجاوز 20 عاماً في تنفيذ مشاريع المنشآت الرياضية، تقدم مجموعة فارس خدمات إدارة المشاريع المتكاملة. من التخطيط الأولي والتصميم إلى الشراء والتركيب والتسليم، يضمن فريقنا إنجاز كل مشروع في الوقت المحدد وضمن الميزانية.",
    },
    projectFacilityPlanning: {
      heroTitle: "تخطيط المشاريع والمنشآت",
      title: "تخطيط المشاريع والمنشآت",
      p1: "فريقنا من المتخصصين جاهز لمساعدتك في تخطيط منشأتك الرياضية من الصفر. نقدم دراسات الجدوى وتخطيط المساحات والتصميم المفاهيمي وخطط المشاريع التفصيلية المصممة وفق رؤيتك وميزانيتك.",
    },
    sportsFacilityOperation: {
      heroTitle: "تشغيل المنشآت الرياضية",
      title: "تشغيل المنشآت الرياضية",
      p1: "قد تطرح إدارة المنشأة الرياضية تحديات عديدة. تقدم مجموعة فارس خدمات تشغيل متكاملة للمنشآت تشمل تدريب الموظفين وجدولة الصيانة والإدارة التشغيلية ومتابعة الأداء للحفاظ على منشأتك في أفضل حالاتها.",
    },
  },

  // ─── Projects Page ────────────────────────────────────────────────────────
  projectsPage: {
    heroTitle: "مشاريعنا",
    breadcrumb: "مشاريعنا",
    badge: "المشاريع",
    title: "معرض مشاريعنا",
    subtitle: "بخبرة 30 عاماً في المجال، تعرف على أكثر مشاريعنا إلهاماً.",
    filterAll: "الكل",
    categories: {
      bowling: "البولينج",
      climbingWall: "جدار التسلق",
      fitnessGym: "اللياقة والصالات",
      others: "أخرى",
      padelCourt: "ملعب البادل",
      playground: "الملاعب",
      shootingRange: "ميدان الرماية",
      sportEquipment: "المعدات الرياضية",
      squashPadel: "الإسكواش والبادل",
    },
  },

  hero: {
    badge: "الحلول الرياضية الشاملة",
    title1: "شريكك",
    title2: "الرياضي",
    title3: "الشامل",
    subtitle:
      "مجموعة فارس — المورد الرائد لمعدات رياضية وترفيهية عالية الجودة في الشرق الأوسط، بخبرة تجاوزت 20 عامًا.",
    cta1: "استعرض المنتجات",
    cta2: "مشاريعنا",
    scrollText: "استعرض المزيد",
  },

  aboutSection: {
    badge: "عن مجموعة فارس",
    title1: "+20 عامًا من",
    title2: "التميز الرياضي",
    description1:
      "مجموعة فارس اسمٌ راسخ في صناعة الرياضة والترفيه، ومورد رائد لمعدات رياضية وترفيهية عالية الجودة في منطقة الشرق الأوسط.",
    description2:
      "وكيل رسمي لكبرى الماركات العالمية، نُنفّذ مشاريع متكاملة من الفكرة حتى التسليم — صالات البولينج، ميادين الرماية، جدران التسلق، نوادي اللياقة، وأكثر.",
    highlights: [
      "وكيل رسمي لكبرى الماركات العالمية",
      "مشاريع متكاملة من الفكرة حتى التسليم",
      "أكثر من 20 عامًا من التميز",
      "نعمل في 5 دول",
    ],
    yearsLabel: "سنوات من التميز",
    cta: "تعرف علينا أكثر",
  },

  productsSection: {
    badge: "منتجاتنا",
    title1: "منتجاتنا",
    title2: "",
    subtitle: "حلول رياضية وترفيهية عالمية المستوى مصمّمة وفق رؤيتك.",
    exploreMore: "استعرض المزيد",
    items: [
      {
        title: "صالة البولينج",
        description: "أنشئ تجربة ترفيهية استثنائية مع حلول البولينج الشاملة لدينا.",
        tag: "ترفيه",
      },
      {
        title: "ملعب البادل",
        description: "استمتع بإثارة البادل مع ملاعبنا عالية الجودة للاستخدام الترفيهي والاحترافي.",
        tag: "رياضة",
      },
      {
        title: "اللياقة والصالات",
        description: "أنشئ منشأة لياقة بدنية عالمية المستوى مع معداتنا المتطورة.",
        tag: "لياقة",
      },
      {
        title: "الملاعب",
        description: "ملاعب آمنة وجذابة للأطفال في المدارس والحدائق والمجمعات السكنية.",
        tag: "ترفيه",
      },
      {
        title: "جدار التسلق",
        description: "ألهم المغامرة والتحدي مع جدران التسلق المبتكرة وفق أعلى معايير السلامة.",
        tag: "مغامرة",
      },
      {
        title: "ميدان الرماية",
        description: "ضمان الدقة والسلامة في رياضة الرماية مع حلولنا المتقدمة لميادين الرماية.",
        tag: "دقة",
      },
    ],
  },

  servicesSection: {
    badge: "الخدمات",
    title1: "خدماتنا",
    title2: "",
    viewAll: "عرض جميع الخدمات",
    learnMore: "اعرف المزيد",
    desc1Title: "تصميم وإنشاء المنشآت الرياضية:",
    desc1: "نتخصص في إنشاء منشآت رياضية متطورة مصمّمة خصيصًا لاحتياجاتك. من الفكرة حتى الاكتمال، نضمن تنفيذ كل جانب من جوانب التصميم والبناء بدقة متناهية.",
    desc2Title: "المعدات والتوريد:",
    desc2: "اكتشف مجموعة واسعة من معدات ومستلزمات رياضية عالية الجودة لتعزيز منشأتك. سواء احتجت إلى معدات لياقة أو إكسسوارات ملاعب أو تجهيزات متخصصة، نقدم لك منتجات موثوقة تلبي أعلى المعايير.",
    items: [
      { title: "الصيانة", description: "خدمات صيانة للملاعب والمنشآت الرياضية" },
      { title: "إدارة المشاريع", description: "إدارة احترافية للمشاريع الرياضية" },
      { title: "التوريد", description: "توريد معدات رياضية وترفيهية" },
      { title: "الإنشاء", description: "تنفيذ مشاريع بامتياز" },
    ],
  },

  clientsSection: {
    badge: "عملاؤنا",
    title1: "عملاؤنا",
    title2: "",
  },

  aboutPage: {
    heroTitle: "من نحن",
    badge: "من نحن",
    title: "مجموعة فارس للـ",
    titleHighlight: "حلول رياضية",
    p1: "بخبرة تجاوزت 20 عامًا، تُعدّ مجموعة فارس اسمًا راسخًا في صناعة الرياضة والترفيه، ومورد رائد ومعترف به لمعدات رياضية وترفيهية عالية الجودة في منطقة الشرق الأوسط، فضلًا عن كونها وكيلًا رسميًا لكبرى الماركات العالمية.",
    p2: "سواء احتجت إلى سينما خاصة أو ملعب كرة قدم أولمبي، تُرافقك مجموعة فارس من البداية حتى النهاية. ننفذ مشاريع متكاملة كصالات البولينج وميادين الرماية وجدران التسلق ومراكز الترفيه والأندية الرياضية وملاعب الأطفال وملاعب الإسكواش ومسارات الجري وغيرها.",
    p3: "بتطلعنا الدائم نحو المنتجات والابتكارات الجديدة، تظل مجموعة فارس الحل الرياضي الشامل.",
    missionTitle: "رسالتنا",
    missionText:
      "أن نكون المزود المفضل للحلول الرياضية في الشرق الأوسط، من خلال تقديم منتجات وخدمات مبتكرة وعالية الجودة تتجاوز توقعات عملائنا.",
    visionTitle: "رؤيتنا",
    visionText:
      "أن نكون الاسم الأكثر ثقةً في البنية التحتية الرياضية بالمنطقة، عبر إنشاء منشآت عالمية المستوى تُلهم مجتمعات نشطة وصحية.",
    testimonialsTitle: "ماذا يقول عملاؤنا",
    testimonialsBadge: "آراء العملاء",
    testimonials: [
      {
        quote: "معدات مجموعة فارس المبتكرة حوّلت ناديينا الرياضي، وجذبت أعضاء جدد وعزّزت تجربتهم. أنصح بهم بشدة!",
        name: "خالد الراشد",
        role: "مالك مجمع رياضي",
      },
      {
        quote: "أدّت مجموعة فارس دورًا محوريًا في تطوير المرافق الرياضية بمدرستنا. أسفرت خبرتهم وتفانيهم عن معدات ومساحات رياضية عالية الجودة تُلهم طلابنا للتميز. نحن ممتنون لخدماتهم الاستثنائية.",
        name: "سعد المهنا",
        role: "مدير مركز مجتمعي",
      },
      {
        quote: "أنا معجب بالتزام مجموعة فارس بالابتكار. لقد ارتقت معداتهم ومرافقهم بتجربتي الرياضية إلى مستوى جديد كليًا. شكرًا لكم!",
        name: "محمد العبدالعزيز",
        role: "مهتم بالرياضة",
      },
      {
        quote: "تجاوزت مجموعة فارس توقعاتنا بحلولها الرياضية الاستثنائية. أصبحت منشأتنا مركزًا ترفيهيًا من الدرجة الأولى بفضل خبرتهم واهتمامهم بالتفاصيل.",
        name: "فاطمة المالك",
        role: "مديرة نادي لياقة",
      },
    ],
    stats: [
      { value: "+20", label: "سنة خبرة" },
      { value: "+500", label: "مشروع منجز" },
      { value: "5", label: "دول" },
      { value: "+1000", label: "عميل سعيد" },
    ],
  },

  contactPage: {
    heroTitle: "اتصل بنا",
    heroSubtitle: "تواصل معنا",
    heroDescription:
      "هل لديك مشروع في ذهنك؟ فريقنا المتخصص في السعودية والإمارات وإيطاليا جاهز لمساعدتك في إيجاد الحل الرياضي المثالي.",
    officesTitle: "مكاتبنا",
    officesHighlight: "حول العالم",
    officesSub: "مواقعنا",
    formSectionTitle: "أرسل لنا",
    formSectionHighlight: "رسالة",
    formSectionSub: "تواصل معنا",
    formSectionDesc:
      "سواء احتجت إلى عرض سعر أو لديك استفسار عن منتج أو تريد مناقشة مشروع، نحن هنا لمساعدتك.",
    hqAddress: "عنوان المقر الرئيسي",
    phone: "هاتف",
    email: "البريد الإلكتروني",
    workingHours: "ساعات العمل",
    workingHoursValue: "الاثنين–الجمعة: 8ص–6م | السبت: 9ص–1م",
    offices: [
      { city: "جدة", country: "المملكة العربية السعودية", label: "المقر الرئيسي" },
      { city: "الرياض", country: "المملكة العربية السعودية", label: "الرياض - السعودية" },
      { city: "أبوظبي", country: "الإمارات", label: "مكتب الإمارات" },
      { city: "ميلانو", country: "إيطاليا", label: "مكتب إيطاليا" },
    ],
  },

  productPage: {
    features: "المميزات",
    specifications: "المواصفات",
    gallery: "معرض الصور",
    relatedProducts: "منتجات ذات صلة",
    requestInfo: "طلب معلومات",
    contactForQuote: "تواصل معنا للحصول على عرض سعر مخصص",
  },

  pages: {
    padelCourt: {
      title: "ملعب البادل",
      subtitle: "البنية التحتية الرياضية",
      description: "إنشاء وتوريد ملاعب البادل الاحترافية في الشرق الأوسط.",
    },
    fitnessGym: {
      title: "اللياقة والصالات",
      subtitle: "حلول اللياقة",
      description: "معدات لياقة بدنية عالمية وحلول إنشاء الصالات الرياضية.",
    },
    bowling: {
      title: "البولينج",
      subtitle: "ترفيه",
      description: "إنشاء صالات بولينج وتوريد المعدات الكاملة.",
    },
    billiards: {
      title: "البلياردو",
      subtitle: "ترفيه",
      description: "طاولات بلياردو احترافية وإكسسوارات متميزة.",
    },
    squashCourts: {
      title: "ملاعب الإسكواش",
      subtitle: "البنية التحتية الرياضية",
      description: "إنشاء ملاعب إسكواش احترافية وتوريد المعدات.",
    },
    spaPool: {
      title: "السبا والمسبح",
      subtitle: "الصحة والعافية",
      description: "حلول متكاملة للسبا وحمامات السباحة.",
    },
    climbingWall: {
      title: "جدار التسلق",
      subtitle: "رياضة المغامرة",
      description: "إنشاء جدران التسلق الداخلية والخارجية.",
    },
    shootingRange: {
      title: "ميدان الرماية",
      subtitle: "رياضة الدقة",
      description: "إنشاء ميادين رماية وتوريد المعدات الكاملة.",
    },
    playground: {
      title: "الملاعب",
      subtitle: "الترفيه",
      description: "معدات ملاعب آمنة وجذابة لجميع الأعمار.",
    },
    bleachersSeating: {
      title: "المدرجات والمقاعد",
      subtitle: "مقاعد الملاعب",
      description: "حلول احترافية للمدرجات ومقاعد الملاعب.",
    },
    wallInsulation: {
      title: "عزل الجدران",
      subtitle: "الإنشاء",
      description: "حلول عزل جدران عالية الجودة للمنشآت الرياضية.",
    },
    sportEquipment: {
      title: "المعدات الرياضية",
      subtitle: "توريد المعدات",
      description: "معدات رياضية متميزة لجميع التخصصات.",
    },
    cardioMachines: {
      title: "أجهزة الكارديو",
      subtitle: "معدات اللياقة",
      description: "أجهزة كارديو عالية الجودة للصالات التجارية والسكنية.",
    },
    strengthMachines: {
      title: "أجهزة القوة",
      subtitle: "معدات اللياقة",
      description: "معدات تدريب القوة الاحترافية.",
    },
    maintenance: {
      title: "الصيانة",
      subtitle: "خدمة ما بعد البيع",
      description: "خدمات صيانة شاملة للمنشآت الرياضية.",
    },
    construction: {
      title: "الإنشاء",
      subtitle: "البنية التحتية الرياضية",
      description: "إنشاء منشآت رياضية متكاملة من الفكرة حتى التسليم.",
    },
    supply: {
      title: "التوريد",
      subtitle: "توريد المعدات",
      description: "توريد موثوق للمعدات الرياضية والترفيهية.",
    },
    projectManagement: {
      title: "إدارة المشاريع",
      subtitle: "إدارة",
      description: "إدارة احترافية للمشاريع في البنية التحتية الرياضية.",
    },
    spareParts: {
      title: "قطع الغيار",
      subtitle: "ما بعد البيع",
      description: "قطع غيار أصلية لجميع المعدات.",
    },
    projectFacilityPlanning: {
      title: "تخطيط المشاريع والمنشآت",
      subtitle: "تخطيط",
      description: "خدمات تخطيط متخصصة للمنشآت الرياضية.",
    },
    sportsFacilityOperation: {
      title: "تشغيل المنشآت الرياضية",
      subtitle: "التشغيل",
      description: "خدمات تشغيل وإدارة متكاملة للمنشآت الرياضية.",
    },
    products: {
      title: "منتجاتنا",
      subtitle: "كتالوج المنتجات",
      description: "استعرض مجموعتنا الشاملة من الحلول الرياضية والترفيهية.",
    },
    services: {
      title: "خدماتنا",
      subtitle: "الخدمات",
      description: "خدمات شاملة للمنشآت الرياضية من التوريد حتى الإنشاء.",
    },
    projects: {
      title: "مشاريعنا",
      subtitle: "معرض الأعمال",
      description: "استعرض محفظة مشاريعنا في المنشآت الرياضية بالمنطقة.",
    },
  },

  // ─── Products Page ────────────────────────────────────────────────────────
  productsPage: {
    badge: "تخصصاتنا",
    heading1: "منتجاتنا",
    heading2: "",
    sectionSubtitle: "تعرف على منتجات مجموعة فارس.",
    seeMore: "عرض المزيد",
    categories: [
      { title: "عزل الجدران", description: "في مجموعة فارس، ندرك أهمية المساحة المعزولة جيدًا. حلول عزل الجدران المتطورة لدينا مصممة لتوفير عزل حراري وصوتي متميز، مما يضمن الراحة وكفاءة الطاقة والهدوء في منزلك أو مكتبك أو أي مكان آخر." },
      { title: "صالة البولينج", description: "أنشئ تجربة ترفيهية لافتة مع حلول البولينج الشاملة لدينا. من مسارات البولينج الحديثة إلى المعدات عالية الجودة، تضمن عروضنا وقتًا لا يُنسى لجميع الأعمار ومستويات المهارة." },
      { title: "ملعب البادل", description: "استمتع بإثارة البادل مع ملاعبنا عالية الجودة. مصممة للاستخدام الترفيهي والتنافسي، تتميز ملاعبنا بمتانة وأداء ممتازين لتجربة لعب مثيرة في كل مرة." },
      { title: "اللياقة والصالات", description: "أنشئ منشأة لياقة عالمية المستوى مع معداتنا المتطورة. تشمل مجموعتنا أجهزة المشي وآلات الأثقال ومعدات الكارديو والمزيد، مصممة لدعم أهداف اللياقة المتنوعة." },
      { title: "الملاعب", description: "في مجموعة فارس، ندرك أهمية إنشاء ملاعب جذابة وآمنة للأطفال. تشمل مجموعة منتجاتنا مجموعة واسعة من المعدات المناسبة للملاعب في المدارس والحدائق العامة والمنازل الخاصة والمجمعات السكنية." },
      { title: "جدار التسلق", description: "ألهم روح المغامرة والتحدي مع جدران التسلق المبتكرة لدينا. مبنية وفق أعلى معايير السلامة والجودة، توفر جدراننا مستويات متفاوتة من الصعوبة لتجربة مثيرة تعزز اللياقة البدنية." },
      { title: "ميدان الرماية", description: "ضمان الدقة والسلامة في رياضة الرماية مع حلول ميادين الرماية المتقدمة لدينا. تشمل مجموعتنا أنظمة الأهداف ومصائد الرصاص وإكسسوارات الرماية، لتوفير بيئة آمنة ومنضبطة للهواة والمحترفين." },
      { title: "البلياردو", description: "ارفع مستوى مساحتك الترفيهية مع طاولات البلياردو المتميزة لدينا. مصنوعة بدقة وأناقة، توفر طاولاتنا تجربة لعب أصيلة، مثالية للألعاب الترفيهية أو البطولات الاحترافية." },
      { title: "المعدات الرياضية", description: "جهز منشأتك الرياضية بمجموعتنا الواسعة من المعدات الرياضية عالية الجودة. من أطواق كرة السلة وأهداف كرة القدم إلى شبكات الكرة الطائرة ومضارب التنس، نقدم حلولاً موثوقة ومتينة لمختلف الأنشطة الرياضية." },
      { title: "السبا والمسبح", description: "إنشاء تجارب فاخرة ومنعشة من خلال حلول السبا والمسبح الاستثنائية لدينا. سواء كنت تسعى لإنشاء واحة هادئة للاسترخاء أو بيئة مائية منعشة، لدينا الحل المناسب." },
      { title: "الإسكواش", description: "عزز منشأتك الرياضية مع ملاعب الإسكواش المتطورة لدينا. مبنية وفق المعايير الدولية، توفر ملاعبنا ارتداد كرة ممتاز وظروف لعب مثالية تلبي احتياجات اللاعبين من جميع المستويات." },
      { title: "المدرجات والمقاعد", description: "حقق أقصى درجات الراحة وجودة المشاهدة للجماهير مع حلول المدرجات والمقاعد المتينة والمريحة لدينا. سواء كان ذلك للملاعب أو الصالات أو الفعاليات الخارجية، توفر خيارات مقاعدنا مشهدية ممتازة وراحة فائقة." },
      { title: "الأثاث الحضري", description: "عزز المساحات العامة والمناطق الترفيهية مع الأثاث الحضري الأنيق والوظيفي لدينا. من المقاعد وطاولات النزهة إلى حوامل الدراجات وأنظمة إدارة النفايات، تجمع تصاميمنا بين الجمالية والمتانة." },
    ],
  },
};

export const translations: Record<Locale, typeof en> = { en, ar };
