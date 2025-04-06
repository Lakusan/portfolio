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


export const HERO_CONTENT = [
  `I am a dedicated and experienced IT professional with a strong background in system administration, IT operations, project management, consulting, and software development.`,
  ` I thrive in collaborative environments and enjoy solving complex problems with sustainable and robust solutions.`,
  ` My journey in the tech industry spans over a decade, during which I have honed my skills in various domains, including cloud computing, DevOps, AI, and extended realities.`,
  ` My career has spanned roles in both public and private sectors, where I have led various projects and teams, optimized and automated processes, and developed innovative, long-lasting solutions.`
];

export const ABOUT_TEXT_WE = [
  `From 2020 to 2024, I worked as an Administrative Case Officer at the Federal Information Technology Centre. I established and led a Community of Practice for Marketing and Consulting, where I developed processes, designed communication strategies, and provided consulting services for federal ministries. I played a key-role in the expansion of the customer base and the migration of many development projects to a cloud-based development platform. I worked with technologies like Jenkins, Git, Nexus Artefact Repository, Jira, and Confluence, and coded in Groovy, Python, Bash, and Perl.`,
  `Previously, I was a System Administrator at the Special Operation Forces Command from 2014 to 2018, where I developed an operational experience database and contributed to high-availability failover clustering. I used technologies like Windows Server 2012 R2 and Lotus Notes, and coded in PowerShell and C#.`,
  `From 2010 to 2014, I served as a System Administrator at the NBC Defence Command, leading a service desk team and implementing a ticket management system. I also contributed to the HERKULES project and developed a training concept for a distributed command system. I worked with SAP, Lotus Notes, Command and Control Systems, Distributed Systems, and coded in PowerShell, HTML, and CSS.`
];

export const ABOUT_TEXT_EDU = [
  `I hold an M.Sc. in Applied Computer Science with a specialization in Mobile Computing from SRH University Heidelberg, where I graduated with distinction as top of the class and received the Masters Award for outstanding scientific performance.`,
  `I also hold a B.Sc. in Virtual Realities with a specialization in Game Development from SRH University Heidelberg, where I graduated with honors as top of the class and received innovation awards for my scientific work.`,
  ` Additionally, I am a certified Computer Science Expert Subject Area: System Integration from IHK North Rhine-Westphalia.`
];

export const ABOUT_TEXT_PERS = [
  `Beyond the Desk, I have a variety of interests that keep me active and engaged.`,
  `I love mountain biking, which allows me to explore nature and stay fit. I also enjoy discovering new restaurants and experimenting with cooking for friends and family, always on the lookout for exciting flavors and recipes. Traveling is another passion of mine, as it gives me the opportunity to experience different cultures and meet new people.`,
  `When Iam not on the move, I enjoy spending time with friends playing board games, which is always a fun and competitive way to bond. Additionally, I play the guitar, which is a great way for me to relax and express my creativity.`
];

export const EXPERIENCES = [
  {
    year: "2020 - 2024",
    role: "Administrative Case Officer",
    department: "Engineering processes, individual specialized procedures, development systems",
    company: "Federal Information Technology Centre ",
    description: ["Establishment and Technical Leadership of a Community of Practice Marketing. Responsible for Process Development and Optimization, Communication Design, Solution Development and Consulting Services for Federal Ministries.", "Contributed to the successful expansion of the customer base within three years through targeted marketing measures, strategic customer acquisition, particularly effective service management, and optimization.", "Managed product development tools, focusing on solutions for migration and automation.", "Modeled processes and actively contributed to the replacement of an on-premise Software Configuration Management system and successfully led the transformation of numerous development projects to a cloud-based development platform."],
    technologies: ["Jenkis", "git", "Nexus Artefact Repository", "Jira", "Confluence"],
    code: ["Groovy", "Python", "Bash", "Perl"],
    skills: ["Product Management", "Consulting", "Service Management", "Solution Development", "Automation", "Cloud Computing", "DevOps", "CI/CD", "IaaS"],
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
    period: "10/2022 - 09/2024",
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
    period: "10/2018 - 09/2021",
    degree: "B.Sc. Virtual Realities",
    spec: "Game Development",
    grade: "1.8",
    awards: ["Innovation Awards of SRH Holding and Stadtwerke Heidelberg", "Best Graduate Award"],
    technologies: ["Unity Engine", "Unreal Engine", "Virtual Box", ".NET", "Trello"],
    code: ["C++", "C#", "JavaScript", "Python"],
    skills: ["Game Development", "Computer Vision", "Extended Reality", "SLAM", "IoT", "AI", "Web Development"],
    icon: SRHIcon,
    hrefThesis: "https://github.com/Lakusan/MR_without_HoloLens/blob/main/11012049_Kolloquium_Bachelor_Thesis.pdf",
    hrefProgram: "https://www.srh-university.de/de/bachelor/virtual-reality-game-development-game-programming/"
  },
  {
    institude: "IHK North Rhine-Westphalia",
    period: "10/2010 - 07/2012",
    degree: "Certified Computer Science Expert",
    spec: "Subject Area: System Integration",
    grade: "2.4",
    awards: [],
    technologies: ["Debian", "Microsoft Windows Server", "Ubuntu Server", "Virtual Box", "VMWare"],
    code: ["MS Batch Script", "Shell", "Java", "C++"],
    skills: ["Project Management", "IT-Ops", "System Administration", "Cyber-Sec", "Networks", " Infrastructure"],
    icon: IHKIcon,
    hrefThesis: undefined,
    hrefProgram: "https://www.ihk.de/nordwestfalen/bildung/Ausbildung/Ausbildungsberufe-A-Z/Fachinformatiker-Systemintegration/"
  }
];

export const PROJECTS = [
  {
    title: "My Portfolio Website",
    duration: "10/2024 - 12/2024",
    url: "https://lakusan.github.io/portfolio/",
    description: "Responsive React WebApp to introduce myself and my skillset to potential Employers and Clients.",
    demoURL: "https://lakusan.github.io/portfolio/",
    githubURL: "https://github.com/Lakusan/portfolio",
    detailsURL: undefined,
    image: heroIcon,
    technologies: ["Web Development" ,"React" ],
    coding: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "INVISNAV - Indoor Visual Positioning System for Mobile Devices",
    duration: "03/2024 - 09/2024",
    url: "https://github.com/Lakusan/invisnav",
    demoURL: undefined,
    githubURL: "https://github.com/Lakusan/invisnav",
    detailsURL: "https://lakusan.github.io/invisnav_speech/",
    image: invisnavIcon,
    description:
      "This project showcases the development of an advanced indoor navigation system using Simultaneous Localization and Mapping (SLAM) techniques. The prototype leverages Unity Engine and ARCore to create a visual positioning system that can navigate unknown environments. Key features include real-time environment mapping, which utilizes camera-generated images and computer vision to create digital maps during runtime. It also demonstrates ARCore's ability to scan and reconstruct spaces as digital twins for navigation. The system proves effective reconstruction with minimal data and ensures collaborative use by publishing map data to a cloud database for shared access.",
    technologies: ["Unity Engine", "Niantic Lightship", "ARCore", "Firebase Realtime", "SLAM", "Extended Reality", "AI", "Computer Vision", "Digital Twins", "Mobile App Development", "Real-time Databases", "Cloud Computing"],
    coding: ["C#", "JSON", "C++"],
  },
  {
    title: "Daprota - Data Protection Training App (Win/Android/IOS)",
    duration: "11/2023 - 12/2023",
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
    duration: "06/2023 - 07/2023",
    url: "https://github.com/Lakusan/rt_motion_cap_unity",
    demoURL: undefined,
    githubURL: "https://github.com/Lakusan/rt_motion_cap_unity",
    detailsURL: "https://github.com/Lakusan/rt_motion_cap_unity/blob/main/aai_presentation.pdf",
    image: rtmcIcon,
    description:
      "This real-time motion capture application was developed during the Module Applied Artificial Intelligence as part of my Master Degree in Applied Computer Science at SRH University Heidelberg, in July 2023. The purpose of this application is to enable animators and developers to create realistic animations for game characters or special effects by extracting and translating human pose data from a live video stream into a virtual coordinate system. To achieve this, Python scripts are used to process the live video stream from a webcam, leveraging the Mediapipe library for image processing and human pose estimation. The pre-trained MediaPipe model is utilized to extract 2D and 3D joint coordinates of the human skeleton, which are then transmitted to a Unity Engine server via NamedPipeServerStream. On the Unity Engine side, the received data is translated into virtual coordinate system coordinates using MediaPipes Pose data translation techniques. Finally, the joint positions are represented with primitives in Unity Engine, enabling real-time visualization and animation of game characters or special effects.",
    technologies: ["AI", "Computer Vision", "Unity Engine", "Mediapipe", "Real Time Computing", "Convolutional Neuronal Networks"],
    coding: ["C#", "Python"],
  },
  {
    title: "Mixed Reality without HoloLens?",
    duration: "06/2021 - 09/2021",
    url: "https://github.com/Lakusan/MR_without_HoloLens/blob/main/11012049_Kolloquium_Bachelor_Thesis.pdf",
    demoURL: undefined,
    githubURL: "https://github.com/Lakusan/MR_without_HoloLens",
    detailsURL: "https://github.com/Lakusan/MR_without_HoloLens/blob/main/11012049_Bachelor_Thesis.pdf",
    image: mrIcon,
    description:
      "A research system based on the Robot Operating System (ROS) was developed, incorporating an implementation of ORB SLAM 2 and integrated via TCP(IP-Bridge with the Unity Engine. Utilizing ORB SLAM 2 for environment understanding, this system enabled the development of mixed reality applications using affordable webcams instead of the costly Microsoft HoloLens. The solution leveraged a visual Simultaneous Localization and Mapping (SLAM) approach, allowing for marker-less, inside-out tracking with spatial geometry interpretation through optical sensors. By integrating ORB SLAM 2 into ROS, the system enabled the connection to the Unity Engine, facilitating the utilization of the SLAM process for the development of MR-capable applications. The successful integration of the SLAM process into the Unity Engine was demonstrated, showcasing the potential for mixed reality development without the need for specialized hardware such as the Microsoft HoloLens or Windows Mixed Reality.",
    technologies: ["ROS", "Unity Engine", "Linux", "TCP/IP", "Computer Vision", "SLAM", "CMake"],
    coding: ["C#", "Python", "C++", "Shell"],
  },
  {
    title: "Teachable Machines - Transfer Learning with Images",
    duration: "10/2020 - 11/2020",
    url: "https://lakusan.github.io/KI-Projekt/",
    demoURL: "https://lakusan.github.io/KI-Projekt/",
    githubURL: "https://github.com/Lakusan/KI-Projekt",
    detailsURL: "https://github.com/Lakusan/KI-Projekt/blob/main/11012049_KI_Pr%C3%A4sentation.pdf",
    image: handtrackingImg,
    description: "This project was developed as part of the AI for Game Developers module at SRH University Heidelberg in the B.Sc. Virtual Realities - Game Development program, and demonstrates a practical implementation of computer vision concepts using TensorFlow. Transfer learning with Teachable Machines was leveraged to enhance image classification capabilities, and custom datasets were created and trained for k-nearest neighbor algorithm tasks. A pre-trained model, MobileNet, was utilized for hand gesture recognition, enabling images to be overlaid during virtual meetings via a virtual camera, using a universal hand gesture recognition system with hand tracking functionality.",
    technologies: ["AI", "Image Analysis", "Web Development", "Tensorflow", "Convolutional Neuronal Networks", "Computer Vision"],
    coding: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Alpha Onslaught - Virtual Reality Game with real Haptics",
    duration: "12/2019 - 03/2020",
    url: "https://youtu.be/MOSGOFGztz4",
    demoURL: undefined,
    githubURL: undefined,
    detailsURL: "https://youtu.be/MOSGOFGztz4",
    image: aoIcon,
    description: "Immerse yourself in a unique Virtual Reality game developed with Unreal Engine, featuring real haptic input experiences. Step into the role of a Commander, coordinating your troops from within a bunker through a holographic battlefield. Activate abilities like missile strikes using a digital twin of a real input console, crafted with Arduino and Raspberry Pi. The game includes RFID inputs and functions as a Human Interface Device, providing a controller-like experience.",
    technologies: ["Arduino", "Raspberry Pi", "Embedded Development", "Unreal Engine", "RFID", "Internet of Things", "Digital Twins", "Extended Realities"],
    coding: ["C++", "Python"]
  }
];

export const CONTACT = {
  email: "Andreas.Lakus@googlemail.com",
};