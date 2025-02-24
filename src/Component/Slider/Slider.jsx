import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import { ThemeContext } from "../../../Contexts/theme";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import { Autoplay } from "swiper/modules";
import html from "../../assets/img/html.svg";
import css from "../../assets/img/css.svg";
import js from "../../assets/img/javascript.svg";
import bootsarp from "../../assets/img/bootstrap.svg";
import react from "../../assets/img/react.svg";
import git from "../../assets/img/github.svg";
import figma from "../../assets/img/figma.svg";
import photosh from "../../assets/img/photoshop.svg";

export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  console.log(theme);
  return (
    <>
      <div className="skills">
        <Swiper
          spaceBetween={10}
          centeredSlides={false}
          slidesPerView={4}
          speed={300}
          effect="fade"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          onAutoplayTimeLeft={false}
          loop={true}
        >
          <SwiperSlide>
            {" "}
            <div className="htm">
              <img src={html} alt="" />
              <p style={{ color: "#F1662A" }}>Html</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="htm">
              <img src={css} alt="" />
              <p style={{ color: "#1572B6" }}>Css</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="htm">
              <img src={js} alt="" />
              <p style={{ color: "#E9CA32" }}>Javascript</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="htm">
              <img src={bootsarp} alt="" />
              <p style={{ color: "#5B4282" }}>Bootsarp</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="htm">
              <img src={react} alt="" />
              <p style={{ color: "#61DAFB" }}>React</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="htm">
              <img src={git} alt="" />
              <p style={{ color: theme.color }}>Git/Github</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="htm">
              <img src={figma} alt="" />
              <p style={{ color: "#FF7262" }}>Figma</p>
            </div>
          </SwiperSlide>
          <div className="autoplay-progress ci" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
}
