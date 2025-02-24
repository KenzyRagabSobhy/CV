import React from "react";
import "./Education.css";
import { useContext } from "react";
import { ThemeContext } from "../../../Contexts/theme";
const Education = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  console.log(theme);
  return (
    <div id="Education&Experience">
      <h1 className={isDark ? "titledark" : "titlelight"}>
        Education & Experience
      </h1>
      <div className="timeline">
        <div className="container lift-container">
          <div
            className="text-box-edu"
            style={{
              backgroundColor: isDark ? "#7651972e" : "white",
              color: theme.color,
            }}
          >
            <h3>University</h3>
            <small>2021-2026</small>
            <div className="se">
              <p>
              B.SC in Communication and Computer Engineering at Faculty of Engineering at
                Cairo University
              </p>
              <p>2026</p>
            </div>
          </div>
        </div>

        <div className="container right-container">
          <div
            className="text-box-edu"
            style={{
              backgroundColor: isDark ? "#7651972e" : "white",
              color: theme.color,
            }}
          >
            <h3>University</h3>
            <small>2024-2025</small>
            <div className="se">
              <p>
               International Exchange Program 2024 at Faculty of Engineering at
                The University of Nebraska-Lincoln at the United States
              </p>
              <p>2025</p>
            </div>
          </div>
        </div>

        <div className="container lift-container">
          <div
            className="text-box-edu"
            style={{
              backgroundColor: isDark ? "#7651972e" : "white",
              color: theme.color,
            }}
          >
            <h3> Frontend Intern </h3>
            <small>5/2024-8/2024</small>
            <div className="text-box-edu-p">
              <p> Dragons Bootcamp LLC Company</p>
              <p> Working with Next.js, Authentication, and Authorization </p>
              <p>2024</p>
            </div>
          </div>
        </div>

        <div className="container right-container">
          <div
            className="text-box-edu"
            style={{
              backgroundColor: isDark ? "#7651972e" : "white",
              color: theme.color,
            }}
          >
            <h3>Web Development Internship</h3>
            <small>8/2023-2/2024</small>
            <div className="text-box-edu-p">
              <p>Nile Company</p>
              <p>Implemented API endpoints & Working with MongoDB</p>
              <p>2023</p>
            </div>
          </div>
        </div>
        <div className="container lift-container">
          <div
            className="text-box-edu"
            style={{
              backgroundColor: isDark ? "#7651972e" : "white",
              color: theme.color,
            }}
          >
            <h3>Web Development Intern </h3>
            <small>9/2023-10/2023</small>
            <div className="text-box-edu-p">
              <p>CodSoft</p>
              <p>Utilized CSS frameworks such as Bootstrap and Material-UI CSS </p>
              <p>2023</p>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Education;
