import {
    inforox,
    ProNetizens,
    dotnet,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    wordpress,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";


  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "e-Commerce",
      icon: mobile,
    },
    {
      title: "Wordpress Developer",
      icon: backend,
    },
    {
      title: "Content Creator (Web3)",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },

    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Shopify",
      icon: shopify,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "wordpress",
      icon: wordpress,
    },
    
   
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Shah Global Motor",
      icon: dotnet,
      iconBg: "#E6DEDD",
      date: "Sep 2019 - Oct 2020",
      points: [
        "Developed a desktop application using C# and .NET technology for a corporate site, providing a user-friendly interface for system interactions.",
        "Designed and implemented key features, including ledgers, banking installment management, and cheque ledgers, enhancing financial tracking and reporting capabilities.",
        "Created a robust data access layer utilizing Entity Framework to facilitate seamless communication with the underlying database.",
        "Applied various optimization techniques to improve system performance, resulting in faster response times and enhanced user experience.",
      ],
    },
    {
      title: "e - Commerce Developer",
      company_name: "MindsBehind",
      icon: shopify,
      iconBg: "#383E56",
      date: "Oct 2020 - Nov 2021",
      points: [
        "Managing and maintaining e-commerce platforms, ensuring smooth operations, and addressing any challenges that arise.",
        "Collaborating with cross-functional teams to troubleshoot and debug websites by identifying and resolving bugs.",
        "Running and monitoring tests to identify areas for improvement and ensure the optimal performance of the platforms.",
        "Providing support during the debugging process and devising solutions to fix issues in collaboration with designers and developers.",
      ],
    }, 
    {
      title: "Internship (Jr. Software Developer)",
      company_name: "Pronetiziens",
      icon: ProNetizens,
      iconBg: "#383E56",
      date: "May 2023 - July 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Jr. Software Developer",
      company_name: "Inforox",
      icon: inforox,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects,  };
 

