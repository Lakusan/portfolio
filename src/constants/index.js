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
import mrIcon from "../assets/projects/MR.png";


export const HERO_CONTENT = `Innovative Solution Developer with a passion for digitalization and modern technologies. Extensive experience in agile software product development within multi-cloud environments. Skilled in building and leading teams, as well as in process development and optimization. Specialized in requirements analysis, solution development, automation, and data migrations. Proficient in software configuration management, onboarding process coordination, DevOps and Continuous Integration & Deployment (CI/CD).`;

export const ABOUT_TEXT_INTRO = [`I am a dedicated and experienced IT professional with a strong background in system administration, project management, and software development.`,` I thrive in collaborative environments and enjoy solving complex problems.`,` My journey in the tech industry spans over a decade, during which I have honed my skills in various domains, including cloud computing, DevOps, and Extended Realities.`,` My career has spanned roles in both public and private sectors, where I have led various projects and Teams, optimized and automated processes and developed innovative long lasting solutions.`];
export const ABOUT_TEXT_WE = [`From 2020 to 2024, I worked as an Administrative Case Officer at the Federal Information Technology Centre. I established and led a Community of Practice Marketing, developed processes, designed communication strategies, and provided consulting services for federal ministries. My efforts led to an expansion of the customer base and the migration of many development projects to a cloud-based development platform. I worked with technologies like Jenkins, Git, Nexus Artefact Repository, Jira, and Confluence, and coded in Groovy, Python, Bash, and Perl.`,
  `Previously, I was a System Administrator at the Special Operation Forces Command from 2014 to 2018, where I developed an operational experience database and contributed to high availability failover clustering. I used technologies like Windows Server 2012 R2 and Lotus Notes, and coded in PowerShell and C#.`,
  `From 2010 to 2014, I served as a System Administrator at the NBC Defence Command, leading a service desk team and implementing a ticket management system. I also contributed to the HERKULES project and developed a training concept for a distributed command system. I worked with SAP, Lotus Notes, Command and Control Systems, Distributed Systems, and coded in PowerShell, HTML, and CSS.`];

export const ABOUT_TEXT_EDU = [`I hold an M.Sc. in Applied Computer Science with a specialization in Mobile Computing from SRH University Heidelberg, where I graduated with distinction and received awards for outstanding scientific performance.`,
  `I also hold a B.Sc. in Virtual Realities with a specialization in Game Development from SRH University Heidelberg, where I graduated with and received innovation awards.`, ` Additionally, I am a certified IT Specialist in Systems Integration from IHK Northrhein Westfalia.`];

export const ABOUT_TEXT_PERS = [`Beyond the Desk, I have a variety of interests that keep me active and engaged.`,`I love mountain biking, which allows me to explore nature and stay fit. I also enjoy discovering new restaurants and experimenting with cooking for friends and family, always on the lookout for exciting flavors and recipes. Traveling is another passion of mine, as it gives me the opportunity to experience different cultures and meet new people.`,`When Iam not on the move, I enjoy spending time with friends playing board games, which is always a fun and competitive way to bond. Additionally, I play the guitar, which is a great way for me to relax and express my creativity.`];

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
    href: "https://www.itzbund.de/"
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
    href: "https://www.bundeswehr.de/"
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
    href: "https://www.bundeswehr.de/"
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
    hrefThesis: "https://github.com/Lakusan/invisnav/blob/main/MA_Thesis_Andreas_Lakus.pdf",
    hrefProgram: "https://www.srh-university.de/de/master/applied-computer-science/i/"
  },
  {
    institude: "SRH University Heidelberg",
    period: "Oct. 18 - Sep. 21",
    degree: "B.Sc. Virtual Realities",
    spec: "Game Development",
    grade: "1.8",
    awards: ["Innovation Awards of SRH Holding and Stadtwerke Heidelberg", "Best Graduate Award"],
    technologies: ["Unity Engine", "Unreal Engine", "Virtual Box", ".NET", "Trello"],
    code: ["C++", "C#", "JavaScript", "Python"],
    skills: ["Game Development", "Computer Vision", "Extended Reality", "SLAM", "IoT",],
    icon: SRHIcon,
    hrefThesis: "https://github.com/Lakusan/MR_without_HoloLens/blob/main/11012049_Kolloquium_Bachelor_Thesis.pdf",
    hrefProgram: "https://www.srh-university.de/de/bachelor/virtual-reality-game-development-game-programming/"
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
    hrefThesis: undefined,
    hrefProgram: "https://www.ihk.de/nordwestfalen/bildung/Ausbildung/Ausbildungsberufe-A-Z/Fachinformatiker-Systemintegration/"
  }
];

export const PROJECTS = [
  {
    title: "My Portfolio Website",
    url: "https://lakusan.github.io/portfolio/",
    description: "Responsive React WebApp to introduce myself and my skillset to potential Employers and Clients.",
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
      "Mobile Application for Scanning Environments as Digital Twin as Map with Navigation capabillities.",
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
    description: "The Data Protection Training app (DaProTa) is an Cross-Plattform-Application designed to educate users on the fundamental aspects of data privacy in Germany. The goal is to transform learning into an immersive journey, breaking down complex concepts into manageable parts, and leaving users not only informed but also enthusiastic about applying DSGVO principles in their daily lives.",
    technologies: [".NET MAUI", "Crossplattform", "Android", "Visual Studio"],
    coding: ["C#", "XML"]
  },
  {
    title: "Realtime Motion Capturing",
    url: "https://github.com/Lakusan/rt_motion_cap_unity",
    demoURL: undefined,
    githubURL: "https://github.com/Lakusan/rt_motion_cap_unity",
    detailsURL: "https://github.com/Lakusan/rt_motion_cap_unity/blob/main/aai_presentation.pdf",
    image: rtmcIcon,
    description:
      "This application was developed during the Module Applied Artificial Intelligence as part of my Master Degree in Applied Computer Science at SRH University Heidelberg, in July 2023. Python scripts are used to process live video stream from webcam. Mediapipe is used to process the images and extract a humans pose. NamedPipeServerStream is used on the server in unity to get data from python scripts. MediaPipes Pose data is then translated to unity coords. Representation of the joints is then shown with primitives in unity.",
    technologies: ["AI", "Computer Vision", "Unity Engine", "Mediapipe", "Real Time Computing", "Convolutional Neuronal Networks"],
    coding: ["C#", "Python"],
  },
  {
    title: "Mixed Reality without HoloLens?",
    url: "https://github.com/Lakusan/MR_without_HoloLens/blob/main/11012049_Kolloquium_Bachelor_Thesis.pdf",
    demoURL: undefined,
    githubURL: "https://github.com/Lakusan/MR_without_HoloLens",
    detailsURL: "https://github.com/Lakusan/MR_without_HoloLens/blob/main/11012049_Bachelor_Thesis.pdf",
    image: mrIcon,
    description:
      "Developed a research system based on the Robot Operating System (ROS) with an implementation of ORB SLAM 2, seamlessly integrated with the Unity Engine. Utilizing ORB SLAM 2 for environment understanding, this system enables the development of mixed reality applications using affordable webcams instead of the costly Microsoft HoloLens.",
    technologies: ["ROS", "Unity Engine", "Linux", "TCP/IP", "Computer Vision", "SLAM", "CMake"],
    coding: ["C#", "Python", "C++"],
  },
  {
    title: "Alpha Onslaught - Virtual Reality Game with real Haptics",
    url: "https://youtu.be/MOSGOFGztz4",
    demoURL: undefined,
    githubURL: undefined,
    detailsURL: "https://youtu.be/MOSGOFGztz4",
    image: aoIcon,
    description: "Immerse yourself in a unique Virtual Reality game developed with Unreal Engine, featuring real haptic input experiences. Step into the role of a Commander, coordinating your troops from within a bunker through a holographic battlefield. Activate abilities like missile strikes using a digital twin of a real input console, crafted with Arduino and Raspberry Pi. The game includes RFID inputs and functions as a Human Interface Device, providing a controller-like experience.",
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
    description: "Developed as part of the AI for Game Developers module at SRH University Heidelberg in the B.Sc. Virtual Realities - Game Development program, this project showcases the training and classification process of a k-nearest neighbor algorithm. It includes hands-on experience with transfer learning using teachable machines, creation of custom datasets, and training for image classification. Additionally, the project features Memetings, a pre-trained model for hand gesture recognition to overlay images during virtual meetings via a virtual camera. It also incorporates a hand tracking feature with universal hand gesture recognition for image overlay.",
    technologies: ["AI", "Image Analysis", "Web Development", "Tensorflow", "Convolutional Neuronal Networks", "Computer Vision"],
    coding: ["JavaScript", "HTML", "CSS"],
  }
];

export const CONTACT = {
  address: "Friedrichstraße 15, 76669 Bad Schönborn",
  phoneNo: "+49 173 578 749 5",
  email: "Andreas.Lakus@googlemail.com",
};