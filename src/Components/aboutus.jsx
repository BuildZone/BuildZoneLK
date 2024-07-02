import React from "react";
import { useInView } from "react-intersection-observer";
import img from "../assets/images/pngwing.com (4) (1).png";

import { Fade, Grow } from "@mui/material";

const Aboutus = () => {
  const { ref: revealRef1, inView: inView1, entry1 } = useInView();
  const { ref: revealRef2, inView: inView2, entry2 } = useInView();
  
  return (
    <>
      <section
        className="about_section layout_padding"
        style={{ zIndex: 1000 }}
      >
        <div className="container  ">
          <div className="heading_container heading_center">
            <h2>
              About <span>Us</span>
            </h2>
            <p>
              Empower your online presence with our expert web development
              team—where innovation meets excellence for digital success.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 " ref={revealRef1}>
              <Fade direction="right" in={inView1} timeout={2000}>
                <div className="img-box">
                  <img src={img} alt="" />
                </div>
              </Fade>
            </div>

            <div className="col-md-6" ref={revealRef2}>
              <Fade direction="left" in={inView2} timeout={2000}>
                <div className="detail-box">
                  <h3 className="d-flex justify-content-between">
                    We Are BuildZone
                  </h3>
                  <p>
                    At BuildZone IT, we stand as a prominent web development
                    company driven by an adept and passionate team. Armed with
                    extensive knowledge, we specialize in translating your
                    vision into robust, visually appealing websites. Our
                    commitment to excellence and innovation ensures tailored
                    solutions that elevate your online presence.
                  </p>
                  <p>
                    {" "}
                    With expertise in diverse technologies, we navigate the
                    digital landscape, providing you with a competitive edge.
                    Trust us to turn your concepts into impactful, user-centric
                    web experiences.
                  </p>

                  {/* <a href="">Read More</a> */}
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
