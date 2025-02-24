import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../../Contexts/theme";
import ui from "../../assets/img/ui.png";
import ux from "../../assets/img/ux-light.png";
import uxdark from "../../assets/img/ux-dark.png";
import web from "../../assets/img/web.png";
import "./Skilles.css";
const Skilles = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <div
      className="pSkilles"
      id="Skills"
      style={{ backgroundColor: theme.backgroundImage, color: theme.color }}
    >
      <h1 className={isDark ? "titledark" : "titlelight"}>Skills</h1>
        <div className="Skill-mobil">
        <div className="sec1-skill">
        <div className="img-skill" style={{ marginLeft: "15%" }}>
          {" "}
          <img src={isDark ? uxdark : ux} alt="" />
        </div>
        <div className="ul-title-skill">
          <h3>USER EXPERIENCE</h3>
          <div className="ul-skill" style={{ color: theme.color }}>
            <ul>
              <li style={{ color: theme.color }}>user persona</li>
              <li style={{ color: theme.color }}>user story</li>
            </ul>
            <ul>
              <li style={{ color: theme.color }}>user journey</li>
              <li style={{ color: theme.color }}>case study</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="web-skill">
        <div className="img-skill" style={{ marginRight: "10%" }}>
          <img src={web} alt=""/>
        </div>

        <div className="ul-title-skill">
          <h3>WEB DEVELOPMENT</h3>
          <div className="ul-skill">
            <ul>
              <li style={{ color: theme.color }}> HTML</li>
              <li style={{ color: theme.color }}>CSS</li>
              <li style={{ color: theme.color }}>JavaScript</li>
            </ul>
            <ul>
              <li style={{ color: theme.color }}>BootStrap</li>
              <li style={{ color: theme.color }}>React</li>
              <li style={{ color: theme.color }}>Git/Github</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="sec1-skill">
        <div className="img-skill" style={{ marginLeft: "15%" }}>
          <img src={ui} alt="" />
        </div>

        <div className="ul-title-skill">
          <h3>USER INTERFACE</h3>
          <div className="ul-skill">
            <ul>
              <li style={{ color: theme.color }}>responsive</li>
            </ul>
            <ul>
              <li style={{ color: theme.color }}>prototype</li>
            </ul>
          </div>
        </div>
      </div>
        </div>
    
    </div>
  );
};

export default Skilles;
