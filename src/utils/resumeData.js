import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import StorageIcon from "@material-ui/icons/Storage";
import SpeedIcon from "@material-ui/icons/Speed";

export default {
  name: "Raven Auriesh Reyes",
  title: "Front-End Developer | BS Chemical Engineering",
  email: "raven.reyes250@gmail.com",
  birthday: "January 25, 1999",
  socials: {
    Linkedin: {
      link: "https://www.linkedin.com/in/raven-auriesh-r-108b93172/",
      text: "Linkedin",
      icon: <LinkedInIcon />,
    },
    Instagram: {
      link: "https://www.instagram.com/ravecorpuz/",
      text: "Instagram",
      icon: <InstagramIcon />,
    },
    Github: {
      link: "https://github.com/rave-25",
      text: "Github",
      icon: <GitHubIcon />,
    },
  },

  about:
    "I’m a graduating chemical engineering student at Adamson University with dreams of participating with progressive company that aims to build the future and solve current issues in our society. I consider myself a grounded technical member with a sense of social responsibility. \n\nMy internship experience has provided me with foundational design engineering principles with business analyst skills that work for companies of any size. I'm passionate about learning and hunger to be trained while doing my best to seek an immediate and long term impact in this position. I'm aiming to become part of your team because I believe in your vision in providing outstanding services for the people by integrating modern technology.",
  education: [
    {
      title: "Design Engineer Intern - Anthroserv Inc.",
      date: "June 2020 - August 2020",
      description:
        "Create an excel estimation sheet to calculate the design parameters of each type of equipment in waste water treatment facilities. Proposed 50 CMD wastewater treatment plant and prepared a market study for clients.",
    },
    {
      title: "Student Assistant - Adamson University",
      date: "June 2015 - May 2018",
      description:
        "Assisted computer technicians to facilitate student's data management.",
    },
    {
      title: "Factory Worker - East Cam Tech Corporation",
      date: "February 2015 - June 2015",
      description:
        "Carefully packaged finished products and prepared them for shipments.",
    },
  ],
  work: [
    {
      title: "BS Chemical Engineering - Adamson University",
      date: "June 2015 - Present",
      description:
        "Develops proficiency in the design, development, operation, and management of industrial processes.",
    },
    {
      title: "Theatre Arts Major - Mariveles National High School",
      date: "June 2012 - May 2015",
      description:
        "Emphasize skill development in design, stage management,  arts management, technical areas, and directing.",
    },
    {
      title: "Cabcaben Elementary School",
      date: "June 2006 - April 2012",
    },
  ],
  skills: [
    {
      title: "Programming Languages",
      description:
        "I code at C++ and MatLab. I also love to use Git/GitHub for collaboration and contributing to project.",
      icon: <LanguageIcon />,
    },
    {
      title: "Front-End Development",
      description:
        "I established my Front-End Development skills by using React JS and JavaScript.",
      icon: <DesktopWindowsIcon />,
    },
    {
      title: "Databases",
      description:
        "Using entity relationship diagram I can design user interfaces and data structures to implement it in MySQL",
      icon: <StorageIcon />,
    },
    {
      title: "Process Control",
      description:
        "Excellent skills at using process optimization platform to manipulate process variables and meet the desired set point.",
      icon: <SpeedIcon />,
    },
  ],
};
