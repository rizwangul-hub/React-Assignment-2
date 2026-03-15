import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import image from "../public/1736617817873 (1).jpg";

function App() {
  const name = "Rizwan Ullah";
  const profession = "Frontend Developer";
  const experience = 1;
  const skills = ["HTML", "CSS", "JavaScript", "React"];
  let profile = [
    { Name: "Rizwan", Profission: "Developer", Qulification: "AD" },
    { Name: "Irshad", Profission: "Graphic designer", Qulification: "BS" },
    { Name: "Asad", Profission: "Socail Madia manager", Qulification: "FSC" },
  ];

  return (
    <>
      <h2>Create Profile Layout</h2>
      <div className="profile-card" style={{ padding: "15px" }}>
        <img src={image} alt="" />
        <h2>Name: Rizwan Ullah</h2>
        <p>
          <span>Bio:</span> Mern Stack developer at SMIT Peshawar{" "}
        </p>
        <div className="skills">
          <h2 style={{ color: "Green" }}>Skills</h2>
          <p className="skill-list">HTML, CSS, JavaScript, React</p>
          <button className="contact-button" style={{ color: "blue" }}>
            Contact
          </button>
        </div>
      </div>
      <hr />
      {/* ................................................................... */}
      <h2>Use JSX Expressions</h2>
      <div>
        <p>Name : {name}</p>
        <p>Profession: {profession}</p>
        <p>Experience: {experience}</p>
      </div>
      <hr />
      {/* ...................................................................... */}
      <h2>Skills List Rendering form Arry</h2>
      <div>
        <h1>Skills</h1>
        <ul>
          <li>{skills[0]}</li>
          <li>{skills[1]}</li>
          <li>{skills[2]}</li>
          <li>{skills[3]}</li>
        </ul>
      </div>
      <hr />
      {/* ................................................................... */}

      <h2>Multiple Profile Cards</h2>
      <div className="Profile-cards">
        <div className="profile">
          <h2>Name :{profile[0].Name}</h2>
          <p>Profission :{profile[0].Profission}</p>
          <p>Qualification :{profile[0].Qulification}</p>
        </div>
        <div className="profile">
          <h2>Name :{profile[1].Name}</h2>
          <p>Profission :{profile[1].Profission}</p>
          <p>Qualification :{profile[1].Qulification}</p>
        </div>
        <div className="profile">
          <h2>Name :{profile[2].Name}</h2>
          <p>Profission :{profile[2].Profission}</p>
          <p>Qualification :{profile[2].Qulification}</p>
        </div>
      </div>
    </>
  );
}

export default App;
