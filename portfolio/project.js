// Each project key matches its HTML filename.
// Sections accept a string or an ordered array of text/image blocks.
const projects = {
    "meshalyzer": {
        "title": "MeshAlyzer",
        "category": "Biomedical research / Lake Lab",
        "summary": "Improving a dynamic tissue testing platform for studying hernia mesh under realistic loading conditions.",
        "tags": [
            "Mechanical design",
            "Instrumentation",
            "Python"
        ],
        "image": "meshalyzer.jpg",
        "imageAlt": "MeshAlyzer tissue testing platform on a laboratory bench",
        "caption": "The MeshAlyzer laboratory testing platform.",
        "facts": {
            "Organization": "WashU Musculoskeletal Soft Tissue Lab",
            "Focus": "Mechanical systems and sensing"
        },
        "overview": "MeshAlyzer is a tissue-testing platform in WashU's Musculoskeletal Soft Tissue Lab that studies hernia mesh under loading similar to breathing and coughing. Originally developed by an earlier team, the system combines a pressure-driven balloon, tissue fixtures, pressure sensing, and Raspberry Pi control. My work focuses on improving the existing platform and preparing it for further tissue testing.",
        "contribution": "I work on mechanical and electronic integration, including reviewing the Raspberry Pi setup, troubleshooting pressure-sensor code, and organizing project files. I have also worked on camera mounting and clamp improvements. My current priorities are addressing a balloon leak, improving the electronics layout, and making the system easier to maintain and operate.",
        "process": "I began by reviewing the existing hardware, wiring, and software to understand how the pressure system and data acquisition fit together. After bringing the platform back up, I identified a balloon leak that needed attention before testing could resume. Current development includes troubleshooting the Python pressure-reading script and planning a handled polycarbonate plate to support the electronics and improve wiring organization.",
        "learning": "The platform has been brought back up and its architecture reviewed, but the balloon leak and sensor troubleshooting remain important steps before the next round of tissue testing. This work has taught me how to take over an existing research system, trace problems across hardware and software, and prioritize improvements that make experiments more repeatable. It has also shown me why documentation and maintenance access matter in a research prototype."
    },
    "fulfil": {
    "title": "Fulfil Solutions",
    "category": "Industry experience / Fulfil Solutions",
    "summary": "Mechanical design and analysis for automated grocery fulfillment, with a focus on compliance, tolerance variation, and reliable material handling.",
    "tags": [
        "SolidWorks",
        "Mechanism design",
        "Tolerance analysis",
        "Prototyping",
        "Design for manufacturing"
    ],
    "facts": {
        "Organization": "Fulfil Solutions",
        "Role": "Mechanical Engineering Intern",
        "Dates": "May–August 2025"
    },
    "overview": "Much of my work is confidential, so I cannot share specific designs, prototype photos, calculations, or internal results. Fulfil builds automation for online grocery fulfillment. My internship focused on mechanical analysis and hardware supporting bag handling and tote positioning.",
    "contribution": "I developed CAD models, compared concepts, built calculation tools, evaluated prototypes, and prepared a technical handoff. My work included spring sizing, force and bending-stress analysis, tolerance stackups, and coordination on electrical requirements and test planning.",
    "process": "I connected dimensional variation to required motion and spring response, evaluated material stress and packaging, and used prototype behavior to guide revisions. Manufacturing, assembly, sourcing, and cost were part of the comparison.",
    "learning": "Delivered concept comparisons, CAD, calculation work, prototype evaluations, and handoff documentation. Further system testing and production-readiness work remained open."
},
    "rover-claw": {
        "title": "Mars Rover End Effector",
        "category": "Robotics / WashU Robotics",
        "summary": "Designing a durable claw for the WashU Mars Rover Team's competition rover.",
        "tags": [
            "Mechanisms",
            "CAD",
            "Prototyping"
        ],
        "image": "rover.jpg",
        "imageAlt": "Prototype of the WashU Mars rover claw",
        "caption": "A prototype of the rover's end effector.",
        "facts": {
            "Organization": "WashU Robotics",
            "Focus": "End effector design"
        },
        "overview": "As part of WashU's Mars Rover Team, I worked on the robotic arm and claw used to manipulate objects during competition tasks. The end effector needs to work within the arm's reach, load, and packaging constraints while interfacing with the rover's other subsystems. The project combines mechanism design, machining, and electromechanical integration.",
        "contribution": "I led arm and claw design work, developing mechanical components in SolidWorks and helping move designs from CAD into physical prototypes. I machined precision aluminum parts using the mill and lathe and worked with teammates to integrate mechanical hardware with actuators, sensors, vision, and control systems.",
        "process": "Development involved translating manipulation tasks into mechanism geometry, building prototypes, and revising parts as integration issues became clear. CAD supported component placement and interface design, while machining and assembly informed revisions to the physical hardware. Collaboration with the electrical, vision, and science subteams helped keep the claw compatible with the rest of the rover.",
        "learning": "The project gave me experience carrying a robotic mechanism from CAD through fabrication and subsystem integration. Machining parts myself made me more aware of tool access, assembly order, and design tolerances. I also learned that an effective end effector depends on coordination with the arm and control system, so mechanical decisions need to account for the complete robot."
    },
    "senior-design": {
        "title": "Thrust Vector Control",
        "category": "Senior design / Science center demonstration",
        "summary": "A fan-powered rocket demonstration that makes feedback control visible, interactive, and approachable.",
        "tags": [
            "Controls",
            "Mechanical design",
            "Arduino",
            "Sensors"
        ],
        "image": "senior-design.jpg",
        "imageAlt": "Thrust vector control rocket demonstration",
        "caption": "Our senior design thrust vector control demonstration.",
        "facts": {
            "Organization": "WashU Mechanical Engineering",
            "Audience": "Science center visitors",
            "Team": "Nate Sapp, Warren Schindler, Kailash Gupta-Verma, Alec Garcia",
            "Focus": "One-axis balancing demonstration"
        },
        "overview": "Our four-person senior design team is developing a fan-powered rocket demonstration for science center visitors. The rocket pivots below its center of gravity, creating an unstable system that must redirect thrust to stay upright along one axis. The goal is to make feedback control visible and engaging for children and families within the exhibit's space, enclosure, and noise constraints.",
        "contribution": "My work has focused on early sensing and actuation tests, including reading a GY-521 inertial sensor with an Arduino Nano and programming a servo to respond to motion. I have also worked through component selection and integration questions involving the fan, ESC, servo, power supply, wiring, and branch protection. These tasks support our team's shared mechanical design and control-system development.",
        "process": "I started with separate sensor and servo tests, then connected sensor readings to corrective servo motion. When the response was slow, I worked on loop timing, reduced serial output, and used millis-based scheduling to avoid blocking delays. In parallel, we have been evaluating thrust requirements, moving mass, gimbal actuation, and power distribution before integrating the full demonstration.",
        "learning": "Early bench testing verified sensor readings and servo response while revealing timing and latency issues that need attention before full-system testing. Stable closed-loop balancing remains a development goal. So far, the project has reinforced the importance of testing components separately and distinguishing a responsive sensor-to-servo demonstration from a controller that can stabilize the physical rocket."
    },
    "jnj": {
        "title": "Johnson & Johnson Internship",
        "category": "Industry experience / Summer internship",
        "summary": "My summer internship experience at Johnson & Johnson.",
        "tags": [
            "Internship",
            "Engineering"
        ],
        "image": "jnj.jpg",
        "imageAlt": "My summer internship at Johnson & Johnson",
        "caption": "My summer internship at Johnson & Johnson.",
        "facts": {
            "Organization": "Johnson & Johnson MedTech",
            "Role": "Robotics Hardware Intern",
            "Location": "Mountain View, CA",
            "Dates": "May-August 2026"
        },
        "overview": "I worked as a Robotics Hardware Intern at Johnson & Johnson MedTech in Mountain View during summer 2026. The internship connected my interests in mechanical engineering, robotics, and healthcare and gave me experience working within a medical technology engineering organization.",
        "contribution": "My role was in robotics hardware engineering, building on my background in mechanical design and electromechanical integration. This section is an initial draft; I will add the specific hardware responsibilities and deliverables from my internship as I refine this page.",
        "process": "The final project description will connect the engineering problem to the design decisions, analysis, prototypes, and evaluation methods used during development. I will add specific examples here to explain how the work progressed and how design choices were evaluated.",
        "learning": "The internship gave me an opportunity to connect my engineering coursework and robotics experience with work in medical technology. I will expand this reflection with the technical lessons, feedback, and project outcomes that best represent my experience."
    },
    "lawn-mower": {
        "title": "Autonomous Lawn Mower",
        "category": "Independent project / Mobile robotics",
        "summary": "Exploring how to turn a conventional mower into an autonomous system through mechanical design, sensing, and navigation.",
        "tags": [
            "Mobile robotics",
            "System design",
            "Navigation"
        ],
        "image": "lawn-mower.jpeg",
        "imageAlt": "Autonomous lawn mower project",
        "caption": "The platform for my autonomous lawn mower project.",
        "facts": {
            "Type": "Independent project",
            "Focus": "Feasibility and system architecture",
            "Platform": "Conventional mower conversion"
        },
        "overview": "This independent feasibility study explores converting a conventional LawnMaster mower into an autonomous mobile platform. The proposed system combines powered wheel drive, outdoor localization, obstacle detection, and navigation. The work focuses on understanding the mechanical and system requirements before committing to a complete build.",
        "contribution": "I investigated the platform's mass, wheel size, and drive requirements and compared approaches for computing, sensing, and navigation. I explored how a Raspberry Pi or Jetson could handle higher-level navigation while a microcontroller manages lower-level hardware. My work also considered emergency stopping and how the added systems would fit around the existing mower.",
        "process": "The study began with estimates of wheel torque and the loads involved in moving the mower. I then explored an architecture using ROS 2 and Nav2, with RTK GPS, an IMU, and wheel encoders for localization. Depth cameras and 2D LiDAR were considered for obstacle detection. These components remain proposed options rather than a fully installed or validated system.",
        "learning": "The main outcome so far is a clearer set of requirements and a candidate system architecture. The analysis highlighted that navigation software depends on reliable traction, localization, obstacle sensing, and hardware stopping behavior. The next step is to validate the drive system and sensing on a controlled prototype before attempting autonomous mowing."
    },
    "cse330": {
        "title": "CSE 3300: Building for the Browser",
        "category": "Coursework / Rapid Prototype Development",
        "summary": "Nine projects and exercises tracing my progress from HTML and CSS to PHP, relational databases, and interactive AJAX applications.",
        "tags": [
            "HTML / CSS",
            "JavaScript",
            "PHP",
            "MySQL",
            "AWS EC2"
        ],
        "image": "cse330.jpg",
        "imageAlt": "Screenshot of my CSE 330 web development work",
        "caption": "A look at my web development coursework.",
        "facts": {
            "Course": "CSE 3300",
            "Institution": "Washington University in St. Louis",
            "Term": "Fall 2026",
            "Scope": "Modules 1–4",
            "Format": "Individual assignments and group projects"
        },
        "overview": "My CSE 3300 coursework explores how browser interfaces, server-side programs, databases, and cloud hosting work together. Across Modules 1–4, the work progresses from a static birthday page to applications with user accounts, persistent content, and asynchronous updates. This collection includes nine projects and exercises, with both individual work and collaborative applications.",
        "contribution": "I completed the individual HTML/CSS, calculator, SQL, weather-widget, and Connect Four debugging exercises, and collaborated on the file-sharing, news, and calendar applications. My work across the collection involved interface development, PHP request handling, database queries, authentication flows, styling, troubleshooting, and EC2 deployment. Group-project summaries describe the applications our team built rather than attributing every feature to me individually.",
    "process": [
        {
            "type": "heading",
            "text": "Birthday Card & Search Portal"
        },
        {
            "type": "text",
            "text": "01 / Module 1 / Individual | HTML · CSS · DOM events"
        },
        {
            "type": "text",
            "text": "Created a birthday page for my dog, Baloo, with a photo gallery, a compliment form, and animated messages. A separate DuckDuckGo search portal introduced browser form submission. This project connected semantic HTML, external stylesheets, simple JavaScript interactions, Git, and early AWS setup."
        },
        {
            "type": "link",
            "text": "View birthday card ↗",
            "href": "http://18.117.250.39/~kailashgv/balooSite/main.html"
        },
        {
            "type": "heading",
            "text": "Server-Side Calculator"
        },
        {
            "type": "text",
            "text": "02 / Module 2 / Individual | PHP · GET forms · PHPUnit"
        },
        {
            "type": "text",
            "text": "Built a four-operation calculator using an HTML form and a reusable PHP calculation function. The implementation handles division by zero and invalid operations. The repository also includes PHPUnit test cases for arithmetic and error paths, giving the calculation logic a way to be checked separately from the page."
        },
        {
            "type": "link",
            "text": "Try PHP calculator ↗",
            "href": "http://18.117.250.39/~kailashgv/calculator.php"
        },
        {
            "type": "heading",
            "text": "File-Sharing Website"
        },
        {
            "type": "text",
            "text": "03 / Module 2 / Group | PHP · Sessions · File handling · Apache"
        },
        {
            "type": "text",
            "text": "Collaborated on a login-based file-sharing site with upload, open, delete, and logout workflows. Case-insensitive search and natural alphabetical sorting help users find their files. The project involved coordinating PHP endpoints, session state, upload checks, per-user storage, and deployment on an AWS EC2 instance."
        },
        {
            "type": "link",
            "text": "Explore file-sharing site ↗",
            "href": "http://ec2-3-12-196-7.us-east-2.compute.amazonaws.com/~karishma/fileshare/index.php"
        },
        {
            "type": "heading",
            "text": "Community News Website"
        },
        {
            "type": "text",
            "text": "05 / Module 3 / Group | PHP · MySQL · Authentication · Voting"
        },
        {
            "type": "text",
            "text": "Collaborated on a database-backed news site with registration, login, articles, comments, and voting. Users can edit or delete their own content, and vote totals drive score-based sorting and a top-three trending section. Prepared statements, password hashing, CSRF checks, and ownership checks are used across the application."
        },
        {
            "type": "link",
            "text": "Explore news website ↗",
            "href": "http://18.117.250.39/~kailashgv/news_site/"
        },
        {
            "type": "heading",
            "text": "Live JavaScript Calculator"
        },
        {
            "type": "text",
            "text": "06 / Module 4 / Individual | JavaScript · Event listeners · DOM updates"
        },
        {
            "type": "text",
            "text": "Recreated the calculator in the browser so results update when either number or the selected operation changes. The exercise focused on converting input strings into numbers, reading radio-button state, handling arithmetic edge cases, and updating an existing result element without a page refresh."
        },
        {
            "type": "link",
            "text": "Try JavaScript calculator ↗",
            "href": "http://18.117.250.39/~kailashgv/js_calc/js_calculator.html"
        },
        {
            "type": "heading",
            "text": "AJAX Weather Widget"
        },
        {
            "type": "text",
            "text": "07 / Module 4 / Individual | Fetch · JSON · Asynchronous JavaScript"
        },
        {
            "type": "text",
            "text": "Built a weather widget that requests JSON from the course weather endpoint and fills existing page elements with weather information and an image. Debugging focused on promise return values, nested JSON properties, and matching DOM lookups to the actual HTML structure."
        },
        {
            "type": "link",
            "text": "View weather widget ↗",
            "href": "http://18.117.250.39/~kailashgv/weather/weather.html"
        },
        {
            "type": "heading",
            "text": "Connect Four Debugging"
        },
        {
            "type": "text",
            "text": "08 / Module 4 / Individual exercise | JavaScript · Game state · Boundary checks"
        },
        {
            "type": "text",
            "text": "Diagnosed and corrected a supplied Connect Four implementation. The work addressed turn switching, piece placement, initialization, and win and draw logic. Reviewing horizontal, vertical, and diagonal checks made array bounds and the order of state updates especially important."
        },
        {
            "type": "link",
            "text": "Play Connect Four ↗",
            "href": "http://18.117.250.39/~kailashgv/connect4/connect4.html"
        },
        {
            "type": "heading",
            "text": "Personal AJAX Calendar"
        },
        {
            "type": "text",
            "text": "09 / Module 4 / Group | JavaScript · PHP · MySQL · JSON endpoints"
        },
        {
            "type": "text",
            "text": "Collaborated on a monthly calendar with account-based events that can be added, edited, and deleted without refreshing the page. Additional features include category filters, completion tracking, and an upcoming-events list. PHP endpoints handle stored events and ownership checks, while request counters help prevent older asynchronous responses from replacing newer results."
        },
        {
            "type": "link",
            "text": "Try personal calendar ↗",
            "href": "http://18.117.250.39/~kailashgv/calendar/"
        }
    ],
        "learning": [
            {
                "type": "heading",
                "text": "Connecting the full stack"
            },
            {
                "type": "text",
                "text": "The biggest change across these projects was learning to trace a feature through the entire system: a browser event, a request, server-side validation, a database or filesystem operation, and the response shown to the user. Debugging mismatched form methods, session checks, file paths, and database parameters made those connections much clearer."
            },
            {
                "type": "heading",
                "text": "Testing and debugging"
            },
            {
                "type": "text",
                "text": "The repositories include calculator test cases, saved SQL query outputs, and reflections documenting browser Console and Network checks. Other useful debugging work involved identifying stale cached files, returning data through promise chains, and checking game logic at array boundaries. These are examples of development checks; they are not a claim that every application has been independently validated."
            },
            {
                "type": "heading",
                "text": "Calendar security review"
            },
            {
                "type": "text",
                "text": "Our calendar documentation records a review of authentication, session handling, event ownership, SQL queries, and browser rendering. It reports additional hardening on a separate security-audit branch, including authentication CSRF checks and session/token rotation. I distinguish that reported branch work from the exported application snapshot, and do not treat a source review as proof that a deployed application is secure."
            },
            {
                "type": "heading",
                "text": "What I would carry forward"
            },
            {
                "type": "text",
                "text": "I would continue building and checking one feature at a time, document request formats early, and verify behavior after switching accounts or changing views. The coursework reinforced that responsive interfaces, clear error handling, and server-side authorization all need attention as an application grows."
            }
        ]
    },
    "frc": {
        "title": "FRC Championship Robotics",
        "category": "Competition robotics / Team 254",
        "summary": "Mechanical design, wiring, and integration across the 2022 and 2023 competition seasons.",
        "tags": [
            "Robotics",
            "Mechanical design",
            "Integration"
        ],
        "image": "frc.jpeg",
        "imageAlt": "2022 FRC Robot hanging at endgame",
        "caption": "A live look at the world-champion winning FRC 2022 robot",
        "facts": {
            "Organization": "FRC Team 254",
            "Seasons": "2022 and 2023",
            "Focus": "Competition robot development"
        },
        "overview": "My experience with FRC Team 254 introduced me to designing and building competition robots under tight schedules. Across the 2022 and 2023 seasons, I worked on mechanical design and integration within a large student team. The experience combined technical work with the coordination needed to turn separate mechanisms into a complete robot.",
        "contribution": "As Technical Director, I helped lead more than 50 students through the design and build process. My work combined mechanical contributions with coordinating students and supporting integration across the robot. This role required keeping individual design decisions connected to the team's larger performance goals and build schedule.",
        "process": "The development process moved from game requirements and mechanism concepts into prototyping, detailed design, fabrication, and integration. Working within a competition schedule meant deciding which ideas to test, responding to issues as systems came together, and helping teammates coordinate their work. Each iteration needed to consider both mechanism performance and its effect on the rest of the robot.",
        "learning": "Being part of a world-championship team showed me how much robot performance depends on preparation, communication, and reliable integration. Technical leadership taught me to explain design decisions clearly and help teammates work toward shared priorities. The experience continues to shape how I approach prototyping, teamwork, and building systems that need to perform outside the workshop."
    },
    "arduino-car": {
        "title": "Circuit Car",
        "category": "Group project / Embedded systems",
        "summary": "A team-built Arduino RC car integrating motor control, signal lights, an audio horn, and ultrasonic distance sensing.",
        "tags": [
            "Arduino",
            "Electronics",
            "Controls"
        ],
        "facts": {
            "Type": "Circuits course group project",
            "Platform": "Arduino",
            "Focus": "Vehicle control and sensing",
            "Role": "Chief Engineer",
            "Team": "Four students"
        },
        "overview": "For my MEMS 2000 Circuits course at WashU, our four-person team built a custom Arduino RC car that combined motor control, flashing signal lights, a custom audio horn, and ultrasonic distance sensing. The project gave us a chance to apply circuit concepts to a working system and connect electrical hardware with embedded programming.",
        "contribution": "As the team's Chief Engineer, I helped plan the system architecture and worked on assembly, programming, and troubleshooting. I programmed the car's functions in C++ using the Arduino IDE, soldered the connections to a central PCB, and crimped a modular wiring harness to connect the components.",
        "process": "The design centered on integrating the motors, lights, horn, and ultrasonic sensor with the Arduino through a central circuit board. Development involved working through both the physical connections and the code needed to operate these components together. A major part of my work was troubleshooting the interfaces between the circuitry and software as we assembled the car.",
        "learning": "Our team brought motor control, lighting, sound, and distance sensing together in a custom Arduino car. The project gave me practical experience with soldering, wiring, embedded programming, and system integration. It also helped me understand how much a working design depends on the connections between components. Looking back, I would put more emphasis on documenting the wiring and testing individual functions before combining the full system."
    }
};

// Strings remain supported. Arrays render text and image blocks in order.
function renderProjectSection(id, content) {
    let container = document.getElementById(id);
    if (!container) return;
    // Older project pages use a paragraph; upgrade it before inserting blocks.
    if (container.tagName === "P") {
        const replacement = document.createElement("div");
        for (const attribute of container.attributes) {
            replacement.setAttribute(attribute.name, attribute.value);
        }
        container.replaceWith(replacement);
        container = replacement;
    }
    container.classList.add("project-rich-content");
    container.replaceChildren();
    const blocks = Array.isArray(content) ? content : [{ type: "text", text: content }];
    for (const block of blocks) {
        if (block.type === "text") {
            const paragraph = document.createElement("p");
            paragraph.textContent = block.text || "";
            container.append(paragraph);
        } else if (block.type === "link" && block.href) {
            const paragraph = document.createElement("p");
            const link = document.createElement("a");

            link.href = block.href;
            link.textContent = block.text || "View project ↗";
            link.className = "text-link";
            link.target = "_blank";
            link.rel = "noopener noreferrer";

            paragraph.append(link);
            container.append(paragraph);
        } else if (block.type === "heading") {
            const heading = document.createElement("h3");
            heading.textContent = block.text || "";
            container.append(heading);
        } else if (block.type === "image" && block.src) {
            const figure = document.createElement("figure");
            figure.className = "project-inline-figure";
            const photo = document.createElement("img");
            photo.src = "../images/" + block.src;
            photo.alt = block.alt || "";
            photo.loading = "lazy";
            photo.decoding = "async";
            figure.append(photo);
            if (block.caption) {
                const caption = document.createElement("figcaption");
                caption.textContent = block.caption;
                figure.append(caption);
            }
            container.append(figure);
        }
    }
}

const filename = window.location.pathname.split("/").pop();
const projectKey = filename.replace(/\.html$/, "");
const project = projects[projectKey];
if (project) {
    document.title = project.title + " | Kailash Gupta-Verma";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", project.summary);
    for (const [id, text] of Object.entries({
        "project-title": project.title,
        "project-category": project.category,
        "project-summary": project.summary
    })) {
        const element = document.getElementById(id);
        if (element) element.textContent = text;
    }
    for (const [id, content] of Object.entries({
        "overview-text": project.overview,
        "contribution-text": project.contribution,
        "process-text": project.process,
        "learning-text": project.learning
    })) renderProjectSection(id, content);

    const tags = document.getElementById("project-tags");
    if (tags) {
        tags.replaceChildren();
        for (const tag of project.tags || []) {
            const element = document.createElement("span");
            element.textContent = tag;
            tags.append(element);
        }
    }
    const facts = document.getElementById("project-facts");
    if (facts) {
        facts.replaceChildren();
        for (const [label, value] of Object.entries(project.facts || {})) {
            const term = document.createElement("dt");
            const description = document.createElement("dd");
            term.textContent = label;
            description.textContent = value;
            facts.append(term, description);
        }
    }
    const cover = document.getElementById("project-cover");
    const photo = document.getElementById("project-photo");
    if (cover && photo && project.image) {
        photo.src = "../images/" + project.image;
        photo.alt = project.imageAlt || "";
        const caption = document.getElementById("project-caption");
        if (caption) caption.textContent = project.caption || "";
        cover.hidden = false;
    }
} else {
    const title = document.getElementById("project-title");
    const summary = document.getElementById("project-summary");
    if (title) title.textContent = "Project not found";
    if (summary) summary.textContent = "Return to the homepage to explore the available projects.";
}
