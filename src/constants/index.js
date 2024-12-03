import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import bundeswehrIcon from "../assets/Bundeswehr.jpg";
import ITZIcon from "../assets/ITZBund.jpg";
import IHKIcon from "../assets/IHKIcon.jpeg";
import SRHIcon from "../assets/SRHIcon.png";

export const HERO_CONTENT = `Innovative Solution Developer with a passion for digitalization and modern technologies. Extensive experience in agile software product development within multi-cloud environments. Skilled in building and leading teams, as well as in process development and optimization. Specialized in requirements analysis, solution development, automation, and data migrations. Proficient in software configuration management, onboarding process coordination, DevOps and Continuous Integration & Deployment (CI/CD).`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2020 - 2024",
    role: "Administrative Case Officer",
    department: "Engineering processes, individual specialized procedures, development systems",
    company: "Federal Information Technology Centre ",
    description: ["Establishment and Technical Leadership of a Community of Practice Marketing. Responsible for Process Development and Optimization, Communication Design, Solution Development and Consulting Services for Federal Ministries.", "Contributed to the successful expansion of the customer base by 80% within three years through targeted marketing measures, strategic customer acquisition, particularly effective service management, and optimization.", "Product Management for Development Tools Solution Development for Migrations and Automation.", "Replacement of an on-premise Software Configuration Management solution and migration of 400 individual development projects to a cloud-based development platform within three years."],
    technologies: ["Jenkis", "git", "Nexus Artefact Repository", "Jira", "Confluence"],
    code: ["Groovy", "Python", "Bash", "Perl"],
    skills: ["Product Management", "Consulting", "Service Management", "Solution Development", "Automation", "Cloud Computing", "DevOps", "CI/CD"],
    logo: ITZIcon
  },
  {
    year: "2014 - 2018",
    role: "System Administrator",
    department: "",
    company: "Special Operation Forces Command: Department of further Development",
    description: ["Development of Operational Experience Database as fundation to Armament Projects. Contributed conceptually and operationally to the implementation of high availability failover clustering and geo-redundancy."],
    technologies: ["Windows Server 2012 R2", "Lotus Notes"],
    code: ["Powershell", "C#"],
    skills: ["Project Management", "Customer Product Management", "Armament Projects", "Solution Development", "IT Product Evaluation", "IT-Operations"],
    logo: bundeswehrIcon
  },
  {
    year: "2010 - 2014",
    role: "System Administrator",
    department: "Engineering processes, individual specialized procedures, development systems",
    company: "NBC Defence Command: Communications and Information Systems Group",
    description: ["Successfully led a Help Desk and incident management team of up to six members. Played a key role in the implementation and development of a ticket management system for team performance evaluation.", "Functioned as deputy head of IT, providing CxO-level consulting, contributing to strategic decision-making, and leading a team of up to ten people. Actively contributed to the HERKULES project, taking on sub-project leadership roles, including mass rollouts.", "As Command, Control and Information System Expert and Adminsitrator, I Developed a didactic concept for modular multiplier training for the association-wide introduction of a distrubuted Command, Control and Information System."],
    technologies: ["SAP", "Lotus Notes", "FueInfoSys", "Distibuted Systems"],
    code: ["Powershell", "HTML", "CSS"],
    skills: ["Project Management", "Consulting", "Leadership", "Solution Development"],
    logo: bundeswehrIcon
  },
];

export const EDUCATION = [
  {
    institude: "SRH University Heidelberg",
    period: "Oct. 22 - Sep. 24",
    degree: "M.Sc. Applied Computer Science",
    spec: "Mobile Computing",
    grade: "1.2",
    awards: ["Master Award for outstanding scientific performance", "Best Graduate Award"],
    technologies: ["Unity Engine", "Media Pipe", "GCP", "React", ".NET MAUI"],
    code: ["JavaScript", "Python", "C#"],
    skills: ["Project Management", "Service Engineering", "Full Stack Dev", "Computer Vision", "Extended Reality", "Digital Twins", "SLAM", "Cloud and Mobile Computing"],
    icon: SRHIcon,
    href :"https://www.srh-university.de/en/master/applied-computer-science/i/"
  },
  {
    institude: "SRH University Heidelberg",
    period: "Oct. 18 - Sep. 21",
    degree: "B.Sc. Virtual Realities",
    spec: "Game Development",
    grade: "1.8",
    awards: ["Innovation Awards of SRH Holding and Stadtwerke Heidelberg", "Best Graduate Award"],
    technologies: ["Unity Engine", "Unreal Engine", "Virtual Box", ".NET", "Trello" ],
    code: ["C++", "C#", "JavaScript", "Python"],
    skills: ["Game Development", "Computer Vision", "Extended Reality", "SLAM", "IoT", ],
    icon: SRHIcon,
    href :"https://www.srh-university.de/de/bachelor/virtual-reality-game-development-game-programming/d/"
  },
  {
    institude: "IHR Northrhein Wertfalia",
    period: "Oct. 10 - Jul. 12",
    degree: "Certified IT Specialist",
    spec: "Systems Integration",
    grade: "2.4",
    awards: [],
    technologies: ["Debian", "Microsoft Windows Server", "Ubuntu Server", "Virtual Box", "VMWare"],
    code: ["MS Batch Script", "Shell", "Java", "C++"],
    skills: ["Project Management", "IT-Operations", "System Administration", "IT-Security"],
    icon: IHKIcon,
    href :"https://www.ihk.de/nordwestfalen/bildung/Ausbildung/Ausbildungsberufe-A-Z/Fachinformatiker-Systemintegration/"
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    url: "www.google.com",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Friedrichstraße 15, 76669 Bad Schönborn ",
  phoneNo: "+49 173 578 749 5",
  email: "Andreas.Lakus@googlemail.com",
};