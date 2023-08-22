import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Resume from './resume.pdf';
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am Maaz Hussain</span>
          <span>React Native Developer</span>
          <span>
          With over a year of hands-on experience in mobile app development using React Native, I am embarking on an exciting journey to expand my horizons as a Full-Stack Developer. My passion for creating seamless, user-centric applications has driven me to explore the world of MERN stack development.
          </span>
        </div>
        <a href={Resume} download>
          <button className="button i-button">Download CV</button>
          </a>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/maazhussain8836" >
          <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/maaz-hussain-siddiqui-239508212" >
          <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
      

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
