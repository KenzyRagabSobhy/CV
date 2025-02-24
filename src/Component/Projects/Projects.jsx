import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../../Contexts/theme";
import "./Projects.css";
import tickets from "../../assets/img/tickets.png";
import Resume from "../../assets/img/Resume.png";
import chocolate from "../../assets/img/chocolate.png";
import travel from "../../assets/img/egypt.png";
import { Link } from "react-router-dom";
const Projects = () => {
  let projects = [
    { id: 1,  Name: chocolate,
      link: "https://67a0ddb6c52595303b80ba2f--regal-paprenjak-514184.netlify.app/",},
    {
      id: 2,
      Name: Resume,
      link: "https://67a0ec1baf6d6600c055031f--clever-queijadas-6bc37c.netlify.app/",
    },

    {
      id: 3 ,
      Name: travel,
      link: "https://67a20e1b26e78c2ad7cfd7a6--stunning-horse-6fb767.netlify.app/",
     
    },
    
    {
      id: 4,
      Name: tickets, link: "https://kenzyragabsobhy.github.io/Nasa-Ticket/" 
    
    },
  ];
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <div
      className="projects"
      id="Projects"
      style={{ backgroundColor: theme.backgroundImage }}
    >
      <h1 className={isDark ? "titledark" : "titlelight"}>Projects</h1>

      <div className="card-pro">
        {projects.map((e) => {
          return (
            <div className="card-pro-child  ">
              <img src={e.Name} alt="" />
              <div className="button-card">
                <div>
                  <Link to={`/Show/${e.id}`}>
                    {" "}
                    <button id="btn-card">show detiles</button>{" "}
                  </Link>
                  <Link to={e.link}>
                    {" "}
                    <button>Demo</button>{" "}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
