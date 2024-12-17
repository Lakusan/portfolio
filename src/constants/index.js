import project4 from "../assets/projects/project-4.jpg";
import heroIcon from "../assets/hero/hero.png";
import daprotaIcon from "../assets/projects/daprota_appicon.png";
import handtrackingImg from "../assets/projects/handtracking.png";
import bundeswehrIcon from "../assets/partners/Bundeswehr.jpg";
import ITZIcon from "../assets/partners/ITZBund.jpg";
import IHKIcon from "../assets/partners/IHKIcon.jpeg";
import SRHIcon from "../assets/partners/SRHIcon.png";
import invisnavIcon from "../assets/projects/invisnav_icon.png";
import rtmcIcon from "../assets/projects/rtmc.png";
import aoIcon from "../assets/projects/alpha_onslaught.png";


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
    logo: ITZIcon,
    href:"https://www.itzbund.de/"
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
    logo: bundeswehrIcon,
    href:"https://www.bundeswehr.de/"
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
    logo: bundeswehrIcon,
    href:"https://www.bundeswehr.de/"
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
    title: "My Portfolio Website",
    url: "https://lakusan.github.io/portfolio/",
    description:"Responsive React WebApp to introduce myself and my skillset to potential Employers and Clients.",
    demoURL: "https://lakusan.github.io/portfolio/",
    githubURL: "https://github.com/Lakusan/portfolio",
    detailsURL: undefined,
    image: heroIcon,
    technologies: ["AI", "Image Analysis", "WebDev", "Tensorflow"],
    coding: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "INVISNAV - Indoor Visual Positioning System for Mobile Devices",
    url: "https://github.com/Lakusan/invisnav",
    demoURL: undefined,
    githubURL: "https://github.com/Lakusan/invisnav",
    detailsURL: undefined,
    image: invisnavIcon,
    description:
      "Mobile Application for Scanning Environments as Digital Twin as Map with Navigation capabillities",
    technologies: ["Unity Engine", "Niantic Lightship", "ARCore", "Firebase Realtime", "SLAM", "Extended Reality"],
    coding: ["C#", "JSON"],
  },
  {
    title: "Daprota - Data Protection Training App (Win/Android/IOS) ",
    url: "https://github.com/Lakusan/daprota",
    demoURL: undefined,
    githubURL: "https://github.com/Lakusan/daprota",
    detailsURL: undefined,
    image: daprotaIcon,
    description:
      "The Data Protection Training app (DaProTa) is an Cross-Plattform-Application designed to educate users on the fundamental aspects of data privacy in Germany. The goal is to transform learning into an immersive journey, breaking down complex concepts into manageable parts, and leaving users not only informed but also enthusiastic about applying DSGVO principles in their daily lives.",
    technologies: [".NET MAUI", "Crossplattform", "Android", "Visual Studio"],
    coding: ["C#", "XML"]
  },
  {
    title: "Realtime Motion Capturing",
    url: undefined,
    demoURL: undefined,
    githubURL: undefined,
    detailsURL: undefined,
    image: rtmcIcon,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["AI", "Computer Vision", "Unity Engine", "Mediapipe", "Real Time Computing", "Convolutional Neuronal Networks"],
    coding: ["C#", "Python"],
  },
  {
    title: "Realtime Flight Tracker and Flight-Route-Planner",
    url: undefined,
    demoURL: undefined,
    githubURL: undefined,
    detailsURL: undefined,
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    coding: ["asd", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Mixed Reality without HoloLens?",
    url: undefined,
    demoURL: undefined,
    githubURL: undefined,
    detailsURL: undefined,
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    coding: ["asd", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Alpha Onslaught - Virtual Reality Game with real Haptics",
    url: "https://youtu.be/MOSGOFGztz4",
    demoURL: undefined,
    githubURL: undefined,
    detailsURL: "https://youtu.be/MOSGOFGztz4",
    image: aoIcon,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["Arduino", "Raspberry Pi", "Embedded Development", "Unreal Engine", "RFID", "Internet of Things", "Digital Twins", "Extended Realities"],
    coding: ["C++", "Python"]
  },
  {
    title: "Teachable Machines - Transfer Lerning with Images",
    url: "https://lakusan.github.io/KI-Projekt/",
    demoURL: "https://lakusan.github.io/KI-Projekt/",
    githubURL: "https://github.com/Lakusan/KI-Projekt",
    detailsURL: "https://github.com/Lakusan/KI-Projekt/blob/main/11012049_KI_Pr%C3%A4sentation.pdf",
    image: handtrackingImg,
    description:"This AI project was developed as part of the AI for Game Developers module at SRH University Heidelberg in the B.Sc. Virtual Realities - Game Development program as an examination performance. It features an illustrative representation of the training and classification process of a k-nearest neighbor algorithm. A hands on to Transfer Learning with teachable machines and the creation of own datasets including training for image classification. It also includes Memetings as example of a pre-trained model for hand gesture recognition to overlay images during virtual meetings in a virtual camera. Futhermore ther is a Hand Tracking feature with Universal hand gesture recognition for overlaying images.",
    technologies: ["AI", "Image Analysis", "Web Development", "Tensorflow", "Convolutional Neuronal Networks", "Computer Vision"],
    coding: ["JavaScript", "HTML", "CSS"],
  }
];

export const CONTACT = {
  address: "Friedrichstraße 15, 76669 Bad Schönborn",
  phoneNo: "+49 173 578 749 5",
  email: "Andreas.Lakus@googlemail.com",
};