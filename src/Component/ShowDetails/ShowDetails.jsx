import "./ShowDetails.css";
import { useContext } from "react";
import { ThemeContext } from "../../../Contexts/theme";
import { Link, useParams } from "react-router-dom";
import BOOKIMG from "../../assets/img/Lab-ticket.png";
import res from "../../assets/img/resume-lab.png";
import choco from "../../assets/img/Chocolate-lab.png";
import TRVELIMG from "../../assets/img/egypt-lab.png";
import back from "../../assets/img/back.svg";
import bcDetiales from "../../assets/img/bc-detiales.png";
import bcdetialesdark from "../../assets/img/bc-detiales-dark.png";

const ShowDetails = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  const { id } = useParams();
  let projects = [
    {
      id: 1,
      Name: "Chocolate",
      link: "https://67a0ddb6c52595303b80ba2f--regal-paprenjak-514184.netlify.app/",
      img: choco ,
      text: "React.js, Vite and Tailwind",
      dit: "The ultimate destination for chocolate lovers! Whether you’re a fan of rich dark chocolate, creamy milk chocolate, or exquisite handcrafted truffles, we bring you a delightful selection of premium chocolates made with the finest ingredients.",
    },
    
    {
      id: 2,
      Name: "Resume & Cover Letter Builder",
      link: "https://67a0ec1baf6d6600c055031f--clever-queijadas-6bc37c.netlify.app/",
      img: res,
      text: "React.js,Tailwind and API",
      dit: "This React.js-powered Resume and Cover Letter Builder is an intuitive web application designed to help users create professional and visually appealing resumes and cover letters effortlessly. With a user-friendly interface, customizable templates, and real-time previews, this tool simplifies the job application process by generating polished, ATS-friendly documents in minutes.",
    },
    {
      id: 3,
      Name: "Travel to Egypt",
      link: "https://67a20e1b26e78c2ad7cfd7a6--stunning-horse-6fb767.netlify.app/",
      img: TRVELIMG,
      text: "React.js , vite, Tailwind",
      dit: "Discover the wonders of Egypt, a land of ancient history, breathtaking landscapes, and vibrant culture. Whether you dream of exploring the Great Pyramids of Giza, cruising the Nile River, or diving into the Red Sea’s coral reefs, our website is your go-to resource for planning an unforgettable adventure. From iconic landmarks and hidden gems to travel tips and local experiences, we bring you the best of Egypt. Let us guide you through historical sites, desert safaris, cultural festivals, and mouthwatering Egyptian cuisine. "
    },
    {
      id: 4,
      Name: "Tickets",
      link: "https://kenzyragabsobhy.github.io/Nasa-Ticket/",
      img: BOOKIMG,
      text: "React.js, Tailwind and API",
      dit: "A project with two pages was developed using React and integrated with API links. This project was built for the Nasa Competition that required a creative idea for travelling to space. So, I start with buliding a website which can register for a ticket.",
    },
  ];

  const pro = projects.find((e) => e.id === parseInt(id));

  return (
    <div style={{ backgroundColor: theme.backgroundImage, color: theme.color }}>
      <Link to="/">
        {" "}
        <img src={back} alt="" className="btn-back" />
      </Link>

      <div
        className="pshow"
        style={
          isDark
            ? { backgroundImage: `url(${bcdetialesdark})` }
            : {
                backgroundImage: `url(${bcDetiales})`,
              }
        }
      >
        <div className="item-img-det">{<img src={pro.img} />}</div>
        <div className="item-text-det">
          <h3 className={isDark ? "titledark-show" : "titlelight-show"}>
            Name:
          </h3>
          <p>{pro.Name}</p>
          <h3 className={isDark ? "titledark-show" : "titlelight-show"}>
            Details:
          </h3>
          <p className="description">{pro.dit}</p>
          <h3 className={isDark ? "titledark-show" : "titlelight-show"}>
            Techniqes
          </h3>
          <p className="description">{pro.text}</p>
          <h3 className={isDark ? "titledark-show" : "titlelight-show"}>
            Github
          </h3>
          <Link
            to={pro.link}
            className="github-link"
            style={{ color: theme.color }}
          >
            {pro.link}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ShowDetails;
