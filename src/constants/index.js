import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
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

  import codeclause from "../assets/company/codeclause.png";
  import bootstrap from "..//assets/tech/bootstrap.png";
  import flask from "..//assets/tech/flask.png";
  import numpy from "..//assets/tech/numpy.png";
  import pandas from "..//assets/tech/pandas.png"
  import python from "..//assets/tech/python.png";
  import tensorflow from "..//assets/tech/tensorflow.png";

  import watchwise from "../assets/watchwise.png";
  
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Machine Learning Enthusiast",
      icon: backend,
    },
    {
      title: "Sketch Artist",
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
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "NumPy",
      icon: numpy,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Pandas",
      icon: pandas,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "TensorFlow",
      icon: tensorflow,
    },
  ];
  
  const experiences = [
    {
      title: "Data Science Intern",
      company_name: "CodeClause",
      icon: codeclause,
      iconBg: "#383E56",
      date: "October 2022",
      points: [
        "Developing and doing research on various machine learning projects.",
        "Building a chatbot for the employer organisation based on Chatterbot library and a custmoized YML file.",
        "Implementing responsive web interface for the machine learning models.",
        "Deploying the machine learning models using HTML/CSS and Flask.",
      ],
    }
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
      name: "WatchWise",
      description:
        "WatchWise is a dynamic movie recommendation website that allows users to search for movies and receive personalized recommendations based on their preferences. The website utilizes an API and cosine similarities to deliver accurate and relevant movie suggestions to enhance the user's movie-watching experience.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "orange-text-gradient",
        },
        {
          name: "Python",
          color: "black-text-gradient",
        },
      ],
      image: watchwise,
      source_code_link: "https://github.com/imadi-cyber/WatchWise",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };