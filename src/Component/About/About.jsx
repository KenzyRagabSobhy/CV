import "./About.css";
import { useContext } from "react";
import { ThemeContext } from "../../../Contexts/theme";
import imgabout from "../../assets/img/imgabout9.png";
import instagram from "../../assets/img/instagram.svg";
import facebook from "../../assets/img/facebook.svg";
import linkedin from "../../assets/img/in.svg";

const About = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <div
      className="About"
      id="About"
      style={{ backgroundColor: theme.backgroundImage, color: theme.color }}
    >
      <h1 className={isDark ? "titledark" : "titlelight"}>About Me</h1>
      <div className="img-text-About">
        <div className="img-about">
          <img src={imgabout} />
        </div>
        <div className="text-icon">
          <h3>I'm Kenzy Ragab Sobhy Mohamed</h3>
          <h4>Communication & Computer Engineer</h4>
          <p
            style={{
              backgroundColor: theme.backgroundImage,
              color: theme.color,
            }}
          >
            I'm Kenzy Mohamed. I'm a senior Communication & Computer Engineer from the Faculty
            of Engineering at Cairo University and I specialized
            in designing and developing user interfaces.
          </p>
          <div className="icon-about">
            <a href="https://www.instagram.com/kenzy_mohamed2003/">
              <img src={instagram} alt="" />
            </a>
            <a href="https://web.facebook.com/menna.nemo.98031">
              <img src={facebook} alt="" />
              </a>
            <a href="https://www.linkedin.com/in/kenzy-mohamed-391524249/">
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
