import React, { useEffect } from "react";
import "./project.css";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Groups2Icon from "@mui/icons-material/Groups2";
import TerminalIcon from "@mui/icons-material/Terminal";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import { useState } from "react";

import { useInView } from "react-intersection-observer";
import AnimatedNumber from "react-animated-numbers";
import { Slide, Grow } from "@mui/material";

// const animateCounter = (element) => {
//   let start = 0;
//   const end = parseInt(element.innerText);
//   const duration = 70;
//   const increment = end / duration;

//   const updateCounter = () => {
//     start += increment;
//     element.innerText = Math.ceil(start);

//     if (start < end) {
//       requestAnimationFrame(updateCounter);
//     }
//   };

//   updateCounter();
// };

const Projects = () => {
  const { ref: revealRef1, inView: inView1, entry1 } = useInView();
  const [enter, setEnter] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  // useEffect(() => {
  //   // document.querySelectorAll(".counter").forEach((counter) => {
  //   //   // animateCounter(counter);
  //   // });
  // }, [enter]);

  const handleMouseOver = (index) => {
    setHoverIndex(index);
  };

  const handleMouseOut = () => {
    setHoverIndex(null);
  };

  const data = [
    {
      title: "Projects",
      count: "45",
      icon: <LibraryBooksIcon className="svg_icons" />,
    },
    {
      title: "Company Crew",
      count: "7",
      icon: <Groups2Icon className="svg_icons" />,
    },
    {
      title: "Products",
      count: "9",
      icon: <Inventory2Icon className="svg_icons" />,
    },
    {
      title: "Clients",
      count: "38",
      icon: <GroupAddIcon className="svg_icons" />,
    },
  ];

  return (
    <section
      className="service_section layout_padding bg-white"
      onMouseEnter={() => setEnter(true)}
      onMouseLeave={() => setEnter(false)}
    >
      <div className="service_container">
        <div className="heading_container heading_center">
          <h2>
            Projects <span>Done</span>
          </h2>
          <p>
            "Embark on a journey of project excellence with our bespoke
            solutions—innovative websites, cutting-edge apps, and seamless
            project management. Elevate your vision with us."
          </p>
          <br />
        </div>
        <div className="container">
          <div className="row data">
            {data.map((item, index) => (
              <div className="four col-md-5 card" key={index}>
                <div
                  className={
                    hoverIndex === index ? "counter-box colored" : "counter-box"
                  }
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseOut={handleMouseOut}
                >
                  {item.icon}
                  {/* <span className="counter">{item.count}</span> */}
                  <div className="counter d-flex justify-content-center">
                    <AnimatedNumber
                      animateToNumber={parseInt(item.count)}
                      config={{ tension: 120, friction: 12 }}
                    />
                  </div>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
