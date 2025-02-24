import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Hero from "../Component/Hero/Hero";
import About from "../Component/About/About";
import Projects from "../Component/Projects/Projects";
import Contactme from "../Component/Contactme/Contactme";
import Footer from "../Component/Footer/Footer";
import Skilles from "../Component/Skilles/Skilles";
import Education from "../Component/Education/Education";
const Home = () => {
  return (
    <div>
      <Navbar
        menu={[
          { path: "Hero", title: "Home" },
          { path: "About", title: "About Me" },
          { path: "Skills", title: "Skills" },
          { path: "Education&Experience", title: "Education&Experience" },
          { path: "Projects", title: "Projects" },
          { path: "Contactme", title: "Contact Me" },
        ]}
        bccolor={false}
      />

      <Hero />
      <About />
      <Skilles />
      <Education />
      <Projects />
      <Contactme />
      <Footer />
    </div>
  );
};

export default Home;
