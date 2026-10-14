// Edit project descriptions here.
// Each key matches the filename in the projects folder.
const projects = {
    "meshalyzer": {
        title: "MeshAlyzer",
        category: "Biomedical research / Lake Lab",
        summary: "Improving a dynamic tissue testing platform for studying hernia mesh under realistic loading conditions.",
        tags: ["Mechanical design", "Instrumentation", "Python"],
        image: "meshalyzer.jpg",
        imageAlt: "MeshAlyzer tissue testing platform on a laboratory bench",
        caption: "The MeshAlyzer laboratory testing platform.",
        facts: {
            Organization: "WashU Musculoskeletal Soft Tissue Lab",
            Focus: "Mechanical systems and sensing"
        },
        overview: "MeshAlyzer is a biomedical testing platform developed to simulate dynamic abdominal loading. The system brings together a pressure-driven balloon, tissue clamps, sensors, and a Raspberry Pi interface.",
        contribution: "[Describe the mechanical, sensing, and interface improvements you personally worked on. Separate your work from the original team's development.]",
        process: "[Add your troubleshooting process, CAD changes, sensor work, and prototype photographs. Explain what prompted each change.]",
        learning: "[Add verified test results, current limitations, and what you learned about integrating a biomedical testing system.]"
    },

    "fulfil": {
        title: "Tote Clip Compliance",
        category: "Product design / Fulfil Solutions",
        summary: "Developing a compliant spring mechanism to improve grocery bag retention in automated systems.",
        tags: ["CAD", "Tolerance analysis", "Prototyping"],
        image: "fulfil.jpg",
        imageAlt: "Fulfil's automated grocery fulfillment equipment",
        caption: "Automated grocery fulfillment at Fulfil Solutions.",
        facts: {
            Organization: "Fulfil Solutions",
            Focus: "Compliant mechanism design"
        },
        overview: "This project focused on improving the way grocery bags are secured within an automated fulfillment system. The design needed to accommodate variation while providing reliable retention.",
        contribution: "[Describe your design responsibilities, prototypes, testing, and manufacturing involvement.]",
        process: "[Show the original problem, design alternatives, tolerance considerations, and iterations of the spring mechanism.]",
        learning: "[Add measured results and explain what you learned about designing mechanisms for repeated use.]"
    },

    "rover-claw": {
        title: "Mars Rover End Effector",
        category: "Robotics / WashU Robotics",
        summary: "Designing a durable claw for the WashU Mars Rover Team's competition rover.",
        tags: ["Mechanisms", "CAD", "Prototyping"],
        image: "rover.jpg",
        imageAlt: "Prototype of the WashU Mars rover claw",
        caption: "A prototype of the rover's end effector.",
        facts: {
            Organization: "WashU Robotics",
            Focus: "End effector design"
        },
        overview: "The rover's end effector needs to manipulate objects and perform tasks while working within the constraints of a robotic arm. This project explores grip, torque, geometry, and integration.",
        contribution: "[Describe your claw design work and arm subteam responsibilities.]",
        process: "[Add CAD images, actuation choices, torque calculations, and prototype tests.]",
        learning: "[Explain what worked, which designs needed revision, and the current state of the end effector.]"
    },

    "senior-design": {
        title: "Thrust Vector Control",
        category: "Senior design / Science center demonstration",
        summary: "A fan-powered rocket demonstration that makes feedback control visible, interactive, and approachable.",
        tags: ["Controls", "Mechanical design", "Arduino", "Sensors"],
        image: "senior-design.jpg",
        imageAlt: "Thrust vector control rocket demonstration",
        caption: "Our senior design thrust vector control demonstration.",
        facts: {
            Organization: "WashU Mechanical Engineering",
            Audience: "Science center visitors",
            Team: "Nate Sapp, Warren Schindler, Kailash Gupta-Verma, Alec Garcia",
            Focus: "One-axis balancing demonstration"
        },
        overview: "Our team is developing a fan-powered rocket demonstration for children and families. The rocket pivots below its center of gravity, creating an unstable system that must use thrust vectoring to stay upright.",
        contribution: "[Add your individual responsibilities and distinguish them from the team's shared work.]",
        process: "The development process brings together mechanical layout, thrust requirements, inertial sensing, servo actuation, and feedback control. Early bench testing explores how sensor readings can drive corrective servo motion. [Add your prototype photos, control diagrams, and current hardware configuration.]",
        learning: "[Add the latest test results, remaining integration work, and what you learned about balancing response speed, stability, and visitor experience.]"
    },

    "jnj": {
        title: "Johnson & Johnson Internship",
        category: "Industry experience / Summer internship",
        summary: "My summer internship experience at Johnson & Johnson.",
        tags: ["Internship", "Engineering"],
        image: "jnj.jpg",
        imageAlt: "My summer internship at Johnson & Johnson",
        caption: "My summer internship at Johnson & Johnson.",
        facts: {
            Organization: "Johnson & Johnson",
            Role: "[Add your job title]",
            Team: "[Add your team or business unit]",
            Dates: "[Add summer and year]"
        },
        overview: "[Introduce your team, its work, and the engineering problems you helped address.]",
        contribution: "[Describe your own responsibilities and deliverables. Include only information you can share publicly.]",
        process: "[Explain your approach, tools, collaboration, and how you evaluated your work.]",
        learning: "[Add outcomes you can share and reflect on what the internship taught you.]"
    },

    "lawn-mower": {
        title: "Autonomous Lawn Mower",
        category: "Independent project / Mobile robotics",
        summary: "Exploring how to turn a conventional mower into an autonomous system through mechanical design, sensing, and navigation.",
        tags: ["Mobile robotics", "System design", "Navigation"],
        image: "lawn-mower.jpg",
        imageAlt: "Autonomous lawn mower project",
        caption: "The platform for my autonomous lawn mower project.",
        facts: {
            Type: "Independent project",
            Focus: "Feasibility and system architecture",
            Platform: "Conventional mower conversion"
        },
        overview: "This project examines the requirements for converting a conventional lawn mower into an autonomous platform. The design considers wheel drive, localization, obstacle detection, computing, and system safety.",
        contribution: "[Describe the feasibility analysis, component selection, calculations, and hardware work you have completed.]",
        process: "The system study considers wheel torque requirements and the roles of positioning, inertial sensing, encoders, and obstacle detection. [Add your selected architecture and clearly distinguish proposed components from installed hardware.]",
        learning: "[Add the current project stage, feasibility findings, prototype results if available, and next steps.]"
    },

    "cse330": {
        title: "Building for the Browser",
        category: "Coursework / CSE 330",
        summary: "Web development projects connecting browser interfaces, server-side logic, databases, and AWS deployment.",
        tags: ["JavaScript", "PHP", "MySQL", "AWS"],
        image: "cse330.jpg",
        imageAlt: "Screenshot of my CSE 330 web development work",
        caption: "A look at my web development coursework.",
        facts: {
            Course: "CSE 330",
            Institution: "Washington University in St. Louis",
            Focus: "Full-stack web development"
        },
        overview: "My CSE 330 coursework includes a calculator, file-sharing site, news website, and calendar application. These projects explore the connection between user interfaces, server requests, stored data, and authentication.",
        contribution: "[Identify individual assignments and your responsibilities in group projects. Add screenshots and working demo links where available.]",
        process: "The projects use HTML and CSS for presentation, JavaScript for browser interactions, and PHP with MySQL for server-side functionality. Development also involves debugging, input validation, prepared statements, session handling, and deployment to an AWS EC2 instance.",
        learning: "[Discuss specific bugs you resolved, how you tested your applications, and what you learned about asynchronous requests and web security.]"
    },

    "frc": {
        title: "FRC Championship Robotics",
        category: "Competition robotics / Team 254",
        summary: "Mechanical design, wiring, and integration across the 2022 and 2023 competition seasons.",
        tags: ["Robotics", "Mechanical design", "Integration"],
        facts: {
            Organization: "FRC Team 254",
            Seasons: "2022 and 2023",
            Focus: "Competition robot development"
        },
        overview: "FRC introduced me to building electromechanical systems under competition constraints. My experience includes contributing to the team's 2022 world championship season and leading scoring mechanism design and integration in 2023.",
        contribution: "[Describe your specific work in each season, including your technical director responsibilities.]",
        process: "[Add the mechanism requirements, CAD, prototypes, integration challenges, and competition photographs.]",
        learning: "[Explain the lessons you carried forward in teamwork, reliability, and rapid iteration.]"
    },

    "arduino-car": {
        title: "Circuit Car",
        category: "Independent project / Embedded systems",
        summary: "A microcontroller-based vehicle exploring Bluetooth control, ultrasonic sensing, and motor circuitry.",
        tags: ["Arduino", "Electronics", "Controls"],
        facts: {
            Type: "Independent project",
            Platform: "Arduino",
            Focus: "Vehicle control and sensing"
        },
        overview: "Circuit Car explores how a microcontroller, sensors, and motor circuitry can work together in a small vehicle.",
        contribution: "[Describe the circuitry, programming, assembly, and troubleshooting you completed.]",
        process: "[Add a wiring diagram, control logic, build photos, and the changes made during testing.]",
        learning: "[Describe the demonstrated functions, limitations, and what you learned about hardware and software integration.]"
    }
};

// Resolve the current page from its filename.
const filename = window.location.pathname.split("/").pop();
const projectKey = filename.replace(/\.html$/, "");
const project = projects[projectKey];

if (project) {
    document.title = `${project.title} | Kailash Gupta-Verma`;
    document.querySelector('meta[name="description"]')
        .setAttribute("content", project.summary);

    const fields = {
        "project-title": project.title,
        "project-category": project.category,
        "project-summary": project.summary,
        "overview-text": project.overview,
        "contribution-text": project.contribution,
        "process-text": project.process,
        "learning-text": project.learning
    };

    for (const [id, text] of Object.entries(fields)) {
        document.getElementById(id).textContent = text;
    }

    for (const tag of project.tags) {
        const element = document.createElement("span");
        element.textContent = tag;
        document.getElementById("project-tags").append(element);
    }

    for (const [label, value] of Object.entries(project.facts)) {
        const term = document.createElement("dt");
        const description = document.createElement("dd");

        term.textContent = label;
        description.textContent = value;

        document.getElementById("project-facts").append(term, description);
    }

    if (project.image) {
        const photo = document.getElementById("project-photo");

        photo.src = `../images/${project.image}`;
        photo.alt = project.imageAlt;
        document.getElementById("project-caption").textContent = project.caption;
        document.getElementById("project-cover").hidden = false;
    }
} else {
    document.getElementById("project-title").textContent = "Project not found";
    document.getElementById("project-summary").textContent =
        "Return to the homepage to explore the available projects.";
}