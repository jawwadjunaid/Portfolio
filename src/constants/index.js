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
    CollectionCars,
    jobit,
    tripguide,
    threejs,
    pesSolution,
    babyLand,
    Jbsaeed,
    lululemon,
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
      date: "Oct 2020 - Nov 2022",
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
      date: "Aug 2023 - June 2024",
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
      designation: "CEO",
      company: "Lululemon",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Umair Arif",
      designation: "CEO",
      company: "BabyLand",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Oren Tabib",
      designation: "CEO",
      company: "Plastices",
      image: "https://media.licdn.com/dms/image/v2/C5603AQHHZwd6V6FUBA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1656537190651?e=2147483647&v=beta&t=25VEnYY8zAtyojeDXl9kbAx3zmSRuBiNFZLFc3XFHfE",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "Manager",
      company: "CollectionCars",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Collection Cars",
      description:
        "Collection Cars is a web-based platform enabling users to search, book, and manage car rentals from various providers, offering a convenient and efficient transportation solution.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: CollectionCars,
      source_code_link: "https://collectioncars.com/",
    },
    {
      name: "Plastic  Solution",
      description:
        "Plastics Environmental Solutions is a Shopify-based platform for bulk orders. I developed its custom features, streamlining product listings and checkout for large-scale eco-friendly transactions.",
      tags: [
        {
          name: "Shopify",
          color: "blue-text-gradient",
        },
        {
          name: "Liquid.js",
          color: "green-text-gradient",
        },
        {
          name: "Theme",
          color: "pink-text-gradient",
        },
      ],
      image: pesSolution,
      source_code_link: "https://plasticses.com/",
    },
    {
      name: "Baby Land",
      description:
        "Babyland is a Shopify store that I worked on, specializing in baby clothes, toys, and essentials. My role involved designing and developing an intuitive and user-friendly interface for the customers ",
      tags: [
        {
          name: "Shopify",
          color: "blue-text-gradient",
        },
        {
          name: "Liquid.js",
          color: "green-text-gradient",
        },
        {
          name: "Theme",
          color: "pink-text-gradient",
        },
      ],
      image: babyLand,
      source_code_link: "https://babyland.com.pk/",
    },
    {
      name: "Jb Saeed Studio",
      description:
        "Jb Saaeed Studio is a one-stop Shopify solution offering a wide range of products for diverse needs. I contributed by managing product listings and performing data analysis to optimize sales and inventory management.",
      tags: [
        {
          name: "Shopify",
          color: "blue-text-gradient",
        },
        {
          name: "Liquid.js",
          color: "green-text-gradient",
        },
        {
          name: "Theme",
          color: "pink-text-gradient",
        },
      ],
      image: Jbsaeed,
      source_code_link: "https://www.jbsaeedstudio.com/",
    },
    {
      name: "Lululemon",
      description:
        "Lululemon's Shopify store is a e-commerce platform. I contributed to its development by enhancing the user experience, optimizing performance, and integrating seamless shopping features, ensuring a smooth and engaging customer journey.",
      tags: [
        {
          name: "Shopify",
          color: "blue-text-gradient",
        },
        {
          name: "Liquidjs",
          color: "green-text-gradient",
        },
        {
          name: "Theme",
          color: "pink-text-gradient",
        },
      ],
      image: lululemon,
      source_code_link: "https://shop.lululemon.com/en-ca/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects,  };
 

