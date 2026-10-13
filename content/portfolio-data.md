# Portfolio Data — Full Content Extraction
> **Source codebase:** `c:\Users\chandan\Desktop\Portfolio\sushil-kumar-portfolio`
> **Extracted:** 2026-10-11
> **Rule:** Verbatim only. No paraphrasing. Duplications flagged inline.

---

## Identity / Hero

**Full Name:** Sushil Kumar

**Role / Title (static prefix):** Hi, I am

**Rotating Typewriter Strings (Bio.roles — loops indefinitely):**
1. Software Developer
2. Web Developer
3. Problem Solver
4. Tech Enthusiast

**Hero subtitle prefix (hardcoded in Hero.jsx):** I am a [typewriter cycles here]

**Bio / Tagline (Bio.description — rendered as SubTitle in Hero):**
> "I'm an MCA student passionate about crafting clean and efficient code. I love building modern websites, exploring new technologies, and solving real-world problems through development."

**CTA Button — Label:** Check Resume
**CTA Button — Target URL (Bio.resume):** https://drive.google.com/file/d/1ig0GyweHe6hTy7paxnEy6XxpHezkAMiF/view?usp=drivesdk

**Hero Image (local):** `src/images/HeroImage.jpeg`
**Hero Image alt text (hardcoded):** "Sushil Kumar"

**Navbar Logo text (hardcoded in Navbar.jsx):** `<`Sushil`/`Kumar`>`

---

## About Section

No dedicated "About" section component exists. The bio/description from `Bio.description` in `src/data/constants.js` serves as the only about content, rendered in the Hero section as the subtitle:

> "I'm an MCA student passionate about crafting clean and efficient code. I love building modern websites, exploring new technologies, and solving real-world problems through development."

**Bullet lists / stats:** NONE FOUND
**Years of experience numbers:** NONE FOUND (only the skills subtitle mentions "past 3 years" — see Skills section)

---

## Skills / Tech Stack

**Section title (hardcoded in Skills.jsx):** Skills
**Section subtitle (hardcoded in Skills.jsx):** "Here are some of my skills on which I have been working on for the past 3 years."

**Source:** `src/data/constants.js` — `skills` array
**Proficiency levels (%, stars, bars):** NONE FOUND — icon + name display only

### Category: Frontend
| Skill | Logo URL |
|---|---|
| HTML | https://www.w3.org/html/logo/badge/html5-badge-h-solo.png |
| CSS | https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png |
| JavaScript | https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png |
| React Js | (base64 SVG inline) |
| Bootstrap | https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png |

### Category: Backend
| Skill | Logo URL |
|---|---|
| Node Js | https://nodejs.org/static/images/logo.svg |
| Python | https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg |
| MySQL | https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg |
| MongoDB | https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg |
| Firebase | https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg |

### Category: DevOps
| Skill | Logo URL |
|---|---|
| AWS | https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png |
| Google Cloud | https://static-00.iconduck.com/assets.00/google-cloud-platform-logo-icon-2048x1824-pg4wzspq.png |
| Docker | https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg |
| Kubernetes | https://upload.wikimedia.org/wikipedia/commons/0/00/Kubernetes_%28container_engine%29.png |

### Category: Android
| Skill | Logo URL |
|---|---|
| Java | https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg |
| Kotlin | https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg |
| XML | https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s |
| Android Studio | https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png |

### Category: Machine Learning
| Skill | Logo URL |
|---|---|
| Python | https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg |
| Tenserflow (sic — misspelling in source) | https://static-00.iconduck.com/assets.00/tensorflow-icon-1911x2048-1m2s54vn.png |
| Jupyter | https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png |
| Google Colab | https://assets.stickpng.com/images/63c2e4c9c4baad4ce22bf9ef.png |

### Category: Others
| Skill | Logo URL |
|---|---|
| Git | https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png |
| GitHub | https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png |
| Netlify | https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png |
| VS Code | https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png |
| Adobe XD | https://cdn.worldvectorlogo.com/logos/adobe-xd.svg (via camo proxy) |
| Figma | https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png |

---

## Projects

**Section title (hardcoded in Projects.jsx):** Projects
**Section subtitle (hardcoded):** "I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects."

**Source:** `src/data/constants.js` — `projects` array

**Filter categories (hardcoded toggle buttons):**
- ALL
- WEB APP"S (sic — typo in source, uses double-quote instead of apostrophe)
- ANDROID APP'S
- MACHINE LEARNING

**Modal button labels (hardcoded in ProjectDetails.jsx):**
- "View Code" (links to project.github)
- "View Live App" (links to project.webapp)

---

### Project 1 — DecisionHub
| Field | Value |
|---|---|
| id | 11 |
| title | DecisionHub |
| date | Jan 2024 - Dec 2023 (UNVERIFIED — end date before start date, likely a typo) |
| category | web app |
| github | https://github.com/rishavchanda/DecisionHub |
| webapp | https://decisionhub.netlify.app/ |
| image | https://github.com/rishavchanda/DecisionHub/raw/master/assets/testRule.jpg |
| tags | React Js, PostgressSQL (sic), Node Js, Express Js, Redux, React Flow |
| featured | Not flagged |
| member | NONE |

**Description (verbatim):**
"A Rule Builder application "Decision Hub" that empowers Business Analysts to create, save, and visualize decision strategies. Provide a no-code rule writing experience and visual representation to test these rules in real-time and observe the calculations at each step."

---

### Project 2 — Trackify
| Field | Value |
|---|---|
| id | 9 |
| title | Trackify |
| date | Jun 2023 - Jul 2023 |
| category | web app |
| github | https://github.com/rishavchanda/Trackify |
| webapp | https://trackify-management.netlify.app/ |
| image | https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png |
| tags | Docker, AWS, DuckDNS, Eslint, Husky, CI/CD, React Js, MongoDb, Node Js, Express Js, Redux |
| featured | Not flagged |
| member | NONE |

**Description (verbatim):**
"Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. Admin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials: #Email: testemployee@gmail.com #Password- 123@Testemployee"

---

### Project 3 — Podstream
| Field | Value |
|---|---|
| id | 0 |
| title | Podstream |
| date | Apr 2023 - May 2023 |
| category | web app |
| github | https://github.com/rishavchanda/Podstream |
| webapp | https://podstream.netlify.app/ |
| image | https://user-images.githubusercontent.com/64485885/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png |
| tags | React Js, MongoDb, Node Js, Express Js, Redux |
| featured | Not flagged |

**Description (verbatim):**
"Developed a full-stack web application that allows users to search for, play, and pause their favorite podcasts on demand and create podcasts. Implemented user authentication using Google Auth and Jwt Auth, made responsive user interface with React JS that provides users with a seamless experience across all devices. Practiced agile methodologies to optimize team efficiency and communication."

**Members:**
| Name | Avatar URL | LinkedIn | GitHub |
|---|---|---|---|
| Sushil Kumar | https://avatars.githubusercontent.com/u/64485885?v=4 | https://www.linkedin.com/in/rishav-chanda-b89a791b3/ | https://github.com/rishavchanda/ |
| Upasana Chaudhuri | https://avatars.githubusercontent.com/u/100614635?v=4 | https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/ | https://github.com/upasana0710 |

FLAG: Member listed as "Sushil Kumar" links to rishavchanda's GitHub/LinkedIn. Confirm if this is a template copy.

---

### Project 4 — Vexa
| Field | Value |
|---|---|
| id | 1 |
| title | Vexa |
| date | Oct 2022 - Jan 2023 |
| category | web app |
| github | https://github.com/rishavchanda/Project-Management-App |
| webapp | https://vexa-app.netlify.app/ |
| image | https://user-images.githubusercontent.com/64485885/234916413-96296f13-fe4b-4cc4-b215-e72bd7c27928.png |
| tags | React Js, MongoDb, Node Js, Express Js, Redux, NodeMailer |
| featured | Not flagged |
| member | NONE |

**Description (verbatim):**
"Designed and developed the Vexa project, a project management app that helps users and teams stay organized and on track. Implemented key features such as task tracking, team collaboration, and time tracking to improve productivity and project outcomes and also invite team/project members. The plan is to add a community of users where they can find developers and other team members and chat system implementation."

---

### Project 5 — Brain Tumor Detection
| Field | Value |
|---|---|
| id | 2 |
| title | Brain Tumor Detection |
| date | Jan 2023 - Mar 2023 |
| category | machine learning |
| github | https://github.com/rishavchanda/Brain-Tumor-Detection |
| webapp | https://brain-tumor.netlify.app/ |
| image | https://github.com/rishavchanda/Brain-Tumor-Detection/raw/main/Readme_resource/Image2.png |
| tags | Python, Keras, TensorFlow, VGG16, Pickle, React |
| featured | Not flagged |

**Description (verbatim):**
"Preprocessed and augmented the dataset to improve model accuracy, trained the model, created API using model and Python, and used React web app for the project's front end. Achievements: Achieved an accuracy of 99.2% to accurately detect brain tumors from medical images."

**Members:**
| Name | Avatar URL | LinkedIn | GitHub |
|---|---|---|---|
| Sushil Kumar | https://avatars.githubusercontent.com/u/64485885?v=4 | https://www.linkedin.com/in/rishav-chanda-b89a791b3/ | https://github.com/rishavchanda/ |
| Upasana Chaudhuri | https://avatars.githubusercontent.com/u/100614635?v=4 | https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/ | https://github.com/upasana0710 |

---

### Project 6 — Buckoid
| Field | Value |
|---|---|
| id | 3 |
| title | Buckoid |
| date | Dec 2021 - Apr 2022 |
| category | android app |
| github | https://github.com/rishavchanda/Buckoid-Android-App |
| webapp | https://play.google.com/store/apps/details?id=com.rishav.buckoid |
| image | (camo proxy Firebase URL) |
| tags | Kotlin, MVVM, Room Database, Google Drive Cloud API |
| featured | Not flagged |
| member | NONE |

**Description (verbatim):**
"App Is Currently In Playstore 100+ Downloads. This Project proposes an "Expense Tracking App". Keep track of your personal expenses and compare them to your monthly income with the budget planner. It has Google Drive Cloud API for Backup of User Room Database. Made with Kotlin in MVVM Architecture & Live Data."

---

### Project 7 — Job Finding App
| Field | Value |
|---|---|
| id | 10 |
| title | Job Finding App |
| date | Jun 2023 - Jul 2023 |
| category | android app |
| github | https://github.com/rishavchanda/Job-finder-App |
| webapp | https://github.com/rishavchanda/Job-finder-App (same as github — no live URL) |
| image | https://user-images.githubusercontent.com/64485885/255237090-cf798a2c-1b41-4bb7-b904-b5353a1f08e8.png |
| tags | React Native, JavaScript, Axios |
| featured | Not flagged |
| member | NONE |

**Description (verbatim):**
"A Job Finding App made with React Native, Axios. Users can search for any job coming from API and apply there."

---

### Project 8 — Whatsapp Clone
| Field | Value |
|---|---|
| id | 4 |
| title | Whatsapp Clone |
| date | Jul 2021 |
| category | web app |
| github | https://github.com/rishavchanda/Whatsapp-Clone-React-Js |
| webapp | https://whatsapp-clone-rishav.web.app |
| image | https://firebasestorage.googleapis.com/v0/b/whatsapp-clone-rishav.appspot.com/o/Screenshot%20(151).png?alt=media&token=48391593-1ef0-4a8c-a92a-eb82bdf38e89 |
| tags | React Js, Firebase, Firestore, Node JS |
| featured | Not flagged |
| member | NONE |

**Description (verbatim):**
"A WhatsApp clone made with React JS, Firebase, and Material UI. It has Phone Authentication, Real-time Database. It has a chat room where users can chat with each other. It has a sidebar where users can see all the chat rooms and can create a new chat room. It has a login page where users can log in with their Google account."

---

### Project 9 — Todo Web App
| Field | Value |
|---|---|
| id | 5 |
| title | Todo Web App |
| date | Jun 2021 |
| category | web app |
| github | https://github.com/rishavchanda/Todo-Web-App |
| webapp | https://rishav-react-todo.netlify.app/ |
| image | (camo proxy URL) |
| tags | React Js, Local Storage, AWS Auth, Node JS |
| featured | Not flagged |
| member | NONE |

**Description (verbatim):**
" A Todo Web App made with React JS, Redux, and Material UI. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the tasks and can create a new task. It has a calendar where users can see all the tasks on a particular date. It has a search bar where users can search for a particular task."

---

### Project 10 — Breaking Bad
| Field | Value |
|---|---|
| id | 6 |
| title | Breaking Bad |
| date | Jun 2021 |
| category | web app |
| github | https://github.com/rishavchanda/Breaking-Bad |
| webapp | https://breaking-bad-webapp.netlify.app |
| image | (camo proxy URL) |
| tags | React Js, API, Axios, Node JS |
| featured | Not flagged |
| member | NONE |

**Description (verbatim):**
"A simple react app that shows the characters of the famous TV series Breaking Bad. It uses the Breaking Bad API to fetch the data. It also has a search bar to search for a particular character."

---

### Project 11 — Quiz App
| Field | Value |
|---|---|
| id | 7 |
| title | Quiz App |
| date | Dec 2020 - Jan 2021 |
| category | android app |
| github | https://github.com/rishavchanda/Quiz-Earn |
| webapp | https://github.com/rishavchanda/Quiz-Earn (no live URL) |
| image | https://github-production-user-asset-6210df.s3.amazonaws.com/64485885/239726262-c1b061d1-d9d0-42ef-9f1c-0412d14bc4f6.gif |
| tags | Java, Android Studio, Firebase, Google Auth |
| featured | Not flagged |
| member | NONE |

**Description (verbatim):**
"A android quiz app made with Java and Firebase. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the quiz categories and can create a new quiz. It has a leaderboard where users can see the top 10 scorers. It has a search bar where users can search for a particular quiz."

---

### Project 12 — Face Recognition
| Field | Value |
|---|---|
| id | 8 |
| title | Face Recognition |
| date | Jan 2021 |
| category | machine learning |
| github | https://github.com/rishavchanda/Face-Recodnition-AI-with-Python (sic — "Recodnition") |
| webapp | https://github.com/rishavchanda/Face-Recodnition-AI-with-Python (no live URL) |
| image | https://dontrepeatyourself.org/media/face-recognition-with-python-dlib-and-deep-learning_cezKZBj.png |
| tags | Python, Keras, TensorFlow, VGG16, Pickle, React |
| featured | Not flagged |
| member | NONE |

**Description (verbatim):**
"A Face recognition python app made with OpenCV. It uses face_recognition library to detect faces. It uses the webcam to detect faces. It also has a search bar to search for a particular face."

---

## Experience / Work History

**Section title (hardcoded in Experience.jsx):** Experience
**Section subtitle (hardcoded):** "My work experience as a software engineer and working on different companies and projects."

**Source:** `src/data/constants.js` — `experiences` array

---

### Experience 1
| Field | Value |
|---|---|
| id | 0 |
| role | Frontend Engineer Intern |
| company | Neurobit |
| date | June 2023 - Nov 2023 |
| location | NONE FOUND |
| company logo URL | https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/neurobit.jpeg?alt=media&token=1cacbb7b-e5ea-4efb-9b3d-f5a31b9564ad |
| certificate doc URL | https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/Screenshot%20from%202024-01-25%2022-38-31.png?alt=media&token=2785903f-1a4e-41f5-afd2-6adcfe56d058 |

**Description (verbatim):**
"Enhanced user experiences on Neurobit PSG & Hybrid, Portals by resolving bugs & reduced load time by 40%. Built Neurobit Analytics portal using React Js with seamless interaction of REST APIs using AXIOS optimized with React Query. Refactored previous code to TypeScript, updated with new dependency and integrated Vite with Jest for Unit Testing."

**Skills:** ReactJS, Redux, NodeJs, Material UI, HTML, CSS, JavaScript

---

### Experience 2
| Field | Value |
|---|---|
| id | 1 |
| role | DevOps & Fullstack Engineering Intern |
| company | Flipr Inovations Pvt. Ltd. (sic — "Inovations") |
| date | Aug 2023 - Oct 2023 |
| location | NONE FOUND |
| company logo URL | https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/flipr.jpeg?alt=media&token=1d72532a-45eb-4c1a-a81a-c9bed9fec543 |
| certificate doc URL | https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/1696514649120.jpeg?alt=media&token=e7f6757b-edfa-4138-a692-d6709eeef3e2 |

**Description (verbatim):**
"Built Flipr Connect Platforms using React Js integrated GraphQL with AXIOS, created High level Design and Figma design. Built Backend with GraphQL and Node JS and connected with MongoDb - Reducing API calls by 20%. Dockerized and automated with Kubernetes & Jenkins CI/CD deployed in AWS-EC2 added Prometheus & Grafana for monitoring."

**Skills:** Docker, Terraform, AWS, EC2, Portainer, Nginx, JavaScript, TypeScript, Node Js, Next Js (note: leading space in source data)

---

### Experience 3
| Field | Value |
|---|---|
| id | 2 |
| role | Android Developer Intern |
| company | Rudraksha Welffare Foundation (sic — "Welffare") |
| date | June 2021 - Oct 2021 |
| location | NONE FOUND |
| company logo URL | https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/Rudraksha.jpeg?alt=media&token=8f83f41e-d0a1-486f-9c7f-dd4cd1d09e8d |
| certificate doc URL | https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/WhatsApp%20Image%202023-05-05%20at%2012.07.39%20AM.jpeg?alt=media&token=9f0e1648-568b-422d-bd0b-1f125f722245 |

**Description (verbatim):**
"• Built RudraShakti - Astrologer App, with MVVM Architecture using Java and Android Studio integrating Firebase SDK. Created One to One video call integration with Socket.IO and Firebase cloud functions and integrated with Retrofit. Created Low Level Design and converted Figma design to XML code."

**Skills:** Android, Java, Kotlin, XML, Node Js, Cloud Firestore, Firebase, Figma

---

### Experience 4
| Field | Value |
|---|---|
| id | 3 |
| role | Fullstack Externship |
| company | Flipr |
| date | June 2023 - July 2023 |
| location | NONE FOUND |
| company logo URL | https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/flipr.jpeg?alt=media&token=1d72532a-45eb-4c1a-a81a-c9bed9fec543 |
| certificate doc URL | https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/1691181448873.jpeg?alt=media&token=ee85eb8f-7247-43cd-9a1d-ce9f58ea62a6 |

**Description (verbatim):**
"Built an employee management full stack web app used Docker and deployed on AWS ec2. I was the top performer in the program."

**Skills:** ReactJS, Redux, NodeJs, Material UI, HTML, CSS, JavaScript, Docker, AWS, MongoDB

---

### Experience 5
| Field | Value |
|---|---|
| id | 4 |
| role | Android Developer |
| company | DSC KIIT |
| date | Nov2021 - Present (note: no space after "Nov" in source) |
| location | NONE FOUND |
| company logo URL | https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/gdsc.jpeg?alt=media&token=c162329c-efaa-4be8-a173-8d3f4c48ea70 |
| certificate doc URL | NONE |

**Description (verbatim):**
"As an Android developer at the Google Developers Student Club (GDCS), I have had the opportunity to work on exciting projects and collaborate with talented developers who share my passion for technology. Through my involvement with GDCS, I have also had the opportunity to host and participate in numerous events, including hackathons, study jams, and workshops."

**Skills:** Leadership, Mobile Application Development, Kotlin, XML, Figma

---

### Experience 6
| Field | Value |
|---|---|
| id | 5 |
| role | Open Source Contributor (note: trailing space in source) |
| company | GirlScript Summer of Code |
| date | May 2023 - Present |
| location | NONE FOUND |
| company logo URL | https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/girlScript.jpeg?alt=media&token=e656a621-cf3c-4230-bf0f-e74b4cec6035 |
| certificate doc URL | NONE |

**Description (verbatim):**
"Contributed to different open-source projects and learn from industry experts"

**Skills:** NONE

---

## Education / Certifications

**Section title (hardcoded in Education.jsx):** Education
**Section subtitle (hardcoded):** "My education has been a journey of self-discovery and growth. My educational details are as follows."

**Source:** `src/data/constants.js` — `education` array
**Certifications:** NONE FOUND

---

### Education 1
| Field | Value |
|---|---|
| id | 0 |
| school | Pimpri Chinchwad University, Pune |
| degree | Master of Computer Applications (MCA) |
| date | Aug 2024 - Present |
| grade | Pursuing |
| institution logo URL | https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5C-POxDGtIBsUSVZ871BDFVydgMPoTILqaQ&s |

**Description (verbatim):**
"I am currently pursuing my Master's in Computer Applications (MCA) at Pimpri Chinchwad University, Pune. This program is helping me deepen my skills in software development, data structures, and emerging technologies like AI and cloud computing."

---

### Education 2
| Field | Value |
|---|---|
| id | 1 |
| school | Cimage College, Patna |
| degree | Bachelor of Computer Applications (BCA) |
| date | Apr 2021 - Apr 2024 |
| grade | 63.8% |

**Description (verbatim):**
"I completed my Bachelor's degree in Computer Applications (BCA) at Cimage College, Patna. During this time, I built a strong foundation in programming, databases, and web development."

---

### Education 3
| Field | Value |
|---|---|
| id | 2 |
| school | TPS College, Patna |
| degree | ISC(XII), Science |
| date | Apr 2015 - Apr 2019 |
| grade | 69.6% |

**Description (verbatim):**
"I completed my class 12 high school education at TPS College, Patna, where I studied Science with Computer Science."

---

## Testimonials / Recommendations

NONE FOUND

---

## Contact / Social

**Contact section title (hardcoded in Contact.jsx):** Contact
**Contact section description (hardcoded):** "Feel free to reach out to me for any questions or opportunities!"
**Contact form title (hardcoded):** Email Me 🚀
**Contact form field placeholders:** Your Email | Your Name | Subject | Message
**Contact form submit button label:** Send

**EmailJS config (hardcoded in Contact.jsx):**
- Service ID: service_7xnnbty
- Template ID: template_g08hj44
- Public Key: 8Ct0tH03y1dnBu2EN
- Alert on success: "Message Sent"

**Source:** `src/data/constants.js` — `Bio` object

| Field | Value |
|---|---|
| Email | NONE FOUND (contact is form-only) |
| Phone | NONE FOUND |
| Location | NONE FOUND |
| GitHub | https://github.com/sushilbyte7 |
| LinkedIn | https://www.linkedin.com/in/sushilbyte7 |
| Twitter/X | "" (empty string) |
| Instagram | https://www.linkedin.com/in/sushilbyte7 (FLAG: points to LinkedIn, not Instagram) |
| Facebook | https://www.linkedin.com/in/sushilbyte7 (FLAG: points to LinkedIn, not Facebook) |
| Resume | https://drive.google.com/file/d/1ig0GyweHe6hTy7paxnEy6XxpHezkAMiF/view?usp=drivesdk |

DUPLICATION NOTE: Bio.github, Bio.linkedin, Bio.resume are all consumed across Navbar.jsx, Hero.jsx, and Footer.jsx — reading from the same Bio object (no value duplication, only usage duplication across 3 components).

---

## Blog / Articles

NONE FOUND

---

## Site Metadata

**Source:** `public/index.html`

| Field | Value |
|---|---|
| Page title | Sushil Kumar |
| Meta description | "Web site created using create-react-app" (FLAG: default CRA placeholder, never updated) |
| theme-color | #000000 |
| Favicon | /HeroImage.jpg (public/HeroImage.jpg) |
| apple-touch-icon | /HeroImage.jpg |
| OG image | NONE FOUND |
| manifest.json | Referenced at /manifest.json — file NOT present in public/ directory |

**Source:** `package.json`

| Field | Value |
|---|---|
| package name | 3d-portfolio-website |
| version | 0.1.1 |
| homepage | https://rishavchanda.github.io (FLAG: points to another person's GitHub Pages) |

---

## Navigation Labels

**Source:** `src/components/Navbar.jsx` — sections array (hardcoded)

| Section ID | Nav Label | Anchor href |
|---|---|---|
| hero | About | #hero |
| Skills | Skills | #Skills |
| Experience | Experience | #Experience |
| Projects | Projects | #Projects |
| Education | Education | #Education |
| contact | Contact | #contact |

**Navbar CTA Button label:** Github Profile (links to Bio.github)
**Mobile menu:** Same links + Github Profile button

---

## Footer Text

**Source:** `src/components/sections/Footer.jsx`

- Logo text: Sushil Kumar
- Footer nav links (hardcoded): About | Skills | Experience | Projects | Education
- Social icons rendered: Facebook, Twitter, LinkedIn, Instagram (from Bio.* fields)
- Copyright line: "© 2024 Sushil Kumar. All rights reserved."

---

## Other UI Strings

**NoScript message (public/index.html):** "You need to enable JavaScript to run this app."

**Project modal labels:**
- "Members" (section heading)
- "View Code" (secondary action)
- "View Live App" (primary action)

**Navbar active-section indicator:** Animated hexagon SVG (blinks, drop-shadow glow) before active link — no text label

**Background animation (App.js):** Galaxy canvas with mouseRepulsion=true, mouseInteraction=true, density=1.2, glowIntensity=0.4, saturation=0.6, hueShift=240, transparent=true

**Font (tailwind.config.js):** Google Sans Flex, sans-serif

---

## Theme / Design Tokens

**Source:** `src/utils/Themes.js`
**Active theme:** darkTheme only (lightTheme defined but never applied)

| Token | Dark Value | Light Value |
|---|---|---|
| bg | #090917 | #FFFFFF |
| bgLight | #1C1E27 | #f0f0f0 |
| primary | #854CE6 | #be1adb |
| text_primary | #F2F3F4 | #111111 |
| text_secondary | #b1b2b3 | #48494a |
| card | #171721 | #FFFFFF |
| card_light | #191924 | (not defined) |
| button | #854CE6 | #5c5b5b |
| white | #FFFFFF | (not defined) |
| black | #000000 | (not defined) |

**Resume button gradient (hardcoded in Hero.jsx):**
hsla(271, 100%, 50%, 1) to hsla(294, 100%, 50%, 1) at 225deg

---

## Public Assets

**public/ directory:**
- HeroImage.jpg (37,799 bytes) — used as favicon
- index.html
- planet/ — 3D model (scene.gltf, scene.bin, license.txt, textures/)

**src/images/ directory:**
- HeroImage.jpeg (85,933 bytes) — used as profile photo in Hero

DUPLICATION: Two hero images exist: public/HeroImage.jpg (favicon, smaller) and src/images/HeroImage.jpeg (profile photo, larger, different extension).

---

## Gaps & Questions

1. CRITICAL — Project ownership: ALL 12 projects have GitHub URLs pointing to github.com/rishavchanda — not github.com/sushilbyte7. Were these built collaboratively, or is this a template that was never updated with your own repos? Confirm which projects are actually yours.

2. CRITICAL — Member attribution: "Sushil Kumar" in Podstream and Brain Tumor Detection links to rishavchanda's GitHub and LinkedIn. Replace with your own details.

3. CRITICAL — package.json homepage is "https://rishavchanda.github.io". What is the intended deployment URL for the new portfolio?

4. Instagram & Facebook: Both Bio.insta and Bio.facebook point to your LinkedIn URL. Do you have Instagram/Facebook, or should those icons be removed?

5. Twitter/X: Bio.twitter is empty. Do you have a Twitter/X handle?

6. Meta description: Still the default CRA placeholder. Needs a real description.

7. DecisionHub date: "Jan 2024 - Dec 2023" — end is before start. What is the correct date?

8. Skill misspelling: "Tenserflow" should be "TensorFlow" — correct in new design?

9. Projects toggle button typo: "WEB APP"S" (wrong quote character). Fix to "WEB APPS"?

10. Company typo: "Flipr Inovations" — missing 'n'. Fix to "Flipr Innovations"?

11. No email / location publicly listed. Add a public email or location to the new design?

12. No dedicated About section — bio is only in the Hero. Add a separate expanded About section?

13. No blog section. Adding one in the redesign?

14. No certifications listed. Any to add (AWS, Google, Coursera, etc.)?

15. Two hero images (public/HeroImage.jpg vs src/images/HeroImage.jpeg). Using a new profile photo for the redesign?

16. DSC KIIT entry has "Nov2021" (no space) as the start of the date string — cosmetic issue to fix.
