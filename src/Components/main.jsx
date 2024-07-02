import React, { useEffect } from "react";
import "./main.css";

import HomePage from "./homePage";
import Service from "./service";
import Aboutus from "./aboutus";
import WhyUs from "./why";
// import OurTeam from "./ourTeam";
// import Testominal from "./testominal";
import Footer from "./footer";
import Navbar from "./navbar";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./projects";
import Contact from "./contact";
import Project_Slide from "./project_slide";
import Sidebar from "./sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";



const Home = () => {
  
  const scrollToTopic = (topicId) => {
    const element = document.getElementById(topicId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const [side, setSide] = React.useState("left");
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Get the x-coordinate of the mouse position
      const mouseX = e.clientX;

      // Get the width of the window
      const windowWidth = window.innerWidth;

      // Determine whether the mouse is on the left or right side
      const position = mouseX < windowWidth / 2 ? "left" : "right";

      // Set the mouse position in the state
      setSide(position);
    };

    // Add the event listener for mousemove
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  React.useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const thresholdX = window.innerWidth * 0.05;
      const thresholdY = window.innerHeight * 0.6;

      // Check if the mouse pointer is within 10% from the right and bottom of the screen
      if (
        event.clientX > window.innerWidth - thresholdX &&
        event.clientY > window.innerHeight - thresholdY
      ) {
        setShow(true);
      }
    });
  }, []);

  const [show, setShow] = React.useState(false);
  return (
    <div>
      <Navbar setShow={setShow} show={show} side={side} />
      {/* <Sidebar
        setShow={setShow}
        show={show}
        scrollToTopic={scrollToTopic}
        side={side}
      /> */}
      {side === "left" ? (
        <div className="scrolldown">
          <a href="#aboutUs" className="scroll-icon smoothscroll">
            Scroll Down
            <KeyboardDoubleArrowRightIcon sx={{ fontSize: 40 }} />
          </a>
        </div>
      ) : (
        <div className="scrolldownO">
          <a href="#aboutUs" className="scroll-iconO smoothscroll">
            Scroll Down
            <KeyboardDoubleArrowRightIcon sx={{ fontSize: 40 }} />
          </a>
        </div>
      )}

      <div id="home">
        <HomePage />
      </div>

      <div id="service">
        <Service />
      </div>

      <div id="aboutUs">
        <Aboutus />
      </div>

      <div id="products">
        <Projects />
      </div>

      <div id="specialization">
        <WhyUs />
      </div>

      <div id="clients">
        <Project_Slide />
      </div>

      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer scrollToTopic={scrollToTopic} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
