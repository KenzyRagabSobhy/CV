import { useContext } from "react";
import { ThemeContext } from "../../../Contexts/theme";
import email from "../../assets/img/emailnew.svg";
import phone from "../../assets/img/phonenew.svg";
import location from "../../assets/img/location.svg";
import "./Contactme.css";
import Swal from 'sweetalert2';

const Contactme = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e6aef59d-a1cc-4830-a556-214f16040044");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });
      }
    };
  return (
    <div
      className="contactme"
      id="Contactme"
      style={{ backgroundColor: theme.backgroundImage, color: theme.color }}
    >
      <h1 className={isDark ? "titledark" : "titlelight"}>Contact Me</h1>
      <div className="sochial-form">
        <div className="sochial" data-aos="fade-up" data-aos-duration="3000">
          <div className="contact-sochial">
            <img src={email} alt="" />
            <div className="contact-sochial-text">
              <h3>Email</h3>
              <p>kenzysobhy2003@gmail.com</p>
            </div>
          </div>
          <div className="contact-sochial">
            <img src={phone} alt="" />
            <div className="contact-sochial-text">
              <h3>Phone</h3>
              <p>+201226963933</p>
            </div>
          </div>
          <div className="contact-sochial">
            <img src={location} alt="" />
            <div className="contact-sochial-text">
              <h3>Location</h3>
              <p> Al-Mohandessin | Giza, Egypt </p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit}>
        <div className="form" data-aos="fade-up" data-aos-duration="3000">
          <div className="form-g">
            <h3>Name</h3>
            <input
              type="text"
              placeholder="enter your name"
              name="name"
              className={isDark ? "form-input-dark" : "form-input" } style={{ backgroundColor: theme.backgroundImage }}
            />
          </div>
          <div className="form-g">
            <h3>Email</h3>
            <input
              type="text"
              placeholder="enter your email"
              className="form-input"
              name="email"
              style={{ backgroundColor: theme.backgroundImage }}
            />
          </div>
          <div className="form-g">
            <h3>Message</h3>
            <input
              type="text"
              placeholder="enter your message"
              id="message"
              className="form-input"
              name="Message"
              style={{ backgroundColor: theme.backgroundImage }}
            />
            <button>Send</button>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Contactme;
