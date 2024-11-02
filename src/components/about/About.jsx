import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="p-16 text-center bg-yellow-50 about-section">
      <h2 className="text-3xl mb-4"><b>About the App</b></h2>
      <p>
        GECTFMA is an app designed to streamline communications and management
        within the campus.
        <br />
        It ensures seamless maintenance and efficient organization, offering
        quick issue resolution through centralizing complaints. The app promotes
        transparency and effective communication, keeping everyone engaged. By
        automating tasks, GECTFMA saves time and fosters a collaborative,
        problem-solving environment within the college community.
      </p>
      <br />
      <p style={{ fontSize: "12px", textAlign: "center" }}>
        <b>App maintained by PTA. Developed by students of CSE</b>
      </p>
    </section>
  );
};

export default About;
