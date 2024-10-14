import "./App.css";

// Skills limit to max 6
// Random data
const profileData = [
  {
    name: "Nitant Bhagat",
    details:
      "Aspiring Software Developer | Android App Development & Data Science | Web Development & Design | Java, JavaScript, SQL, REST APIs, MERN Stack | Photography & Video Editing Enthusiast | MS in Computer Science Student",
    photoName: "images/profile2.jpg",
    skills: [
      "Android Development",
      "Web Development",
      "Java",
      "Database Management",
      "User Interface Design",
      "Firebase",
    ],
  },
  {
    name: "Isha Patel",
    details:
      "Aspiring Software Developer | Photography & Video Editing Enthusiast | MS in Computer Science Student",
    photoName: "images/profile2.jpg",
    skills: [
      "Photography",
      "Video Editing",
      "HTML/CSS",
      "JavaScript",
      "User Experience Research",
      "Git",
    ],
  },
  {
    name: "Rahul Sharma",
    details:
      "Full-Stack Developer | Cloud Computing with AWS | API Development & Integration | DevOps | React, Node.js, and Docker | Open-Source Contributor | MS in Computer Science Student",
    photoName: "images/profile3.jpg",
    skills: [
      "AWS",
      "Docker",
      "Microservices Architecture",
      "React",
      "Node.js",
      "API Design",
    ],
  },
  {
    name: "Priya Desai",
    details:
      "UI/UX Designer | Passionate about Creating Seamless User Experiences | Figma, Sketch, and Adobe XD | Front-End Development with HTML, CSS, and JavaScript | Enthusiast in Animation Design",
    photoName: "images/profile4.jpg",
    skills: [
      "Figma",
      "Sketch",
      "Adobe XD",
      "HTML/CSS",
      "JavaScript",
      "Animation Design",
    ],
  },
  {
    name: "Arjun Mehta",
    details:
      "Data Scientist | Machine Learning Enthusiast | Proficient in Python, R, SQL | Expertise in Data Visualization | AI Researcher and Contributor | MS in Data Science Student",
    photoName: "images/profile5.jpg",
    skills: [
      "Machine Learning",
      "Data Visualization",
      "Python",
      "R",
      "SQL",
      "Statistical Analysis",
    ],
  },
  {
    name: "Sanjana Rao",
    details:
      "Mobile App Developer | Expert in Android and iOS Development | Proficient in Kotlin, Swift, and Flutter | Passionate about Building Scalable Mobile Applications | Software Engineering Graduate",
    photoName: "images/profile6.jpg",
    skills: [
      "Kotlin",
      "Swift",
      "Flutter",
      "Cross-Platform Development",
      "RESTful APIs",
      "User Interface Design",
    ],
  },
];

function App() {
  return (
    <div className="App">
      {/* <Card
        name="Nitant Pareshbhai Bhagat"
        details="Aspiring Software Developer | Android App Development & Data Science | Web Development & Design | Java, JavaScript, SQL, REST APIs, MERN Stack | Photography & Video Editing Enthusiast | MS in Computer Science Student"
        photoName="images/profile2.jpg"
      /> */}
      {profileData.map((card) => (
        <Card cardObj={card} key={card.name} />
      ))}
    </div>
  );
}

function Card({ cardObj }) {
  return (
    <div className="card-container">
      <div className="profile-img">
        <img src={cardObj.photoName} alt="Profile" />
      </div>
      <div className="detail-container">
        <h3>{cardObj.name}</h3>
        <p>{cardObj.details}</p>
        <ul className="skill-list">
          {/* <li>Android Development</li>
          <li>Web Development</li>
          <li>Java</li>
          <li>Database</li>
          <li>User Interface Design</li>
          <li>Firebase</li> */}
          {cardObj.skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
