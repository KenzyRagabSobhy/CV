import "./Hero.css";
import bc from "../../assets/img/hero-dark.png";
import bcdark from "../../assets/img/hero-light.png";
import lab from "../../assets/img/LABNEW.png";
import { useContext } from "react";
import { ThemeContext } from "../../../Contexts/theme";
import Slider from "../Slider/Slider";

const Hero = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  console.log(theme);
  return (
    <div style={{ backgroundColor: theme.backgroundImag }}>
      <div
        className="hero"
        id="Hero"
        style={
          isDark
            ? { backgroundImage: `url(${bc})` }
            : { backgroundImage: `url(${bcdark})` }
        }
      >
        <div className={isDark ? "text-hero" : "text-hero line-color"}>
          <h1> Kenzy Mohamed</h1>
          <p>Front-end Developer & UI/UX Designer</p>

          <p>
            If you have any ideas or questions about your project
            <br />
            I'm here to help!
          </p>
          <a
            href="https://drive.google.com/file/d/1uRWOXvvYeoRmXMk-RT4KUJQp4Jxq96IP/view?usp=drive_link"
            download="Kenzy Mohamed- CV"
          >
            <button
            className="btn"
              style={{
                backgroundColor: theme.backgroundImage,
                color: theme.color,
              }}
            >
              Download CV
            </button>
          </a>
        </div>
        <div className="lab">
          <img src={lab} alt="" />
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default Hero;
