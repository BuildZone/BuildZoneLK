import React from "react";
import WhiteLogo from "../assets/images/whiteBiggerLogoName.png";
import "./bannerhome.css";
import logo from "../assets/images/logo dark.png";
import slider1 from "../assets/images/slider-img (1).png";
import slider2 from "../assets/images/about-img.png";


const BannerHome = () => {
  return (
    <div>
      <section
        className="slider_section d-flex flex-wrap justify-content-center"
        style={{ marginTop: -25, position: "fixed", width: "100%", top: 0 }}
      >
        <img src={logo} alt="logo" className="logoL" />
        <img src={logo} alt="logo" className="logoR" />
        <img src={WhiteLogo} alt="logo" className="logo" />
        <div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container ">
                <div className="row">
                  
                  <div className="col-md-6 ">
                    <div className="detail-box">
                      <h1>
                        Shaping <br />
                        Digital Mastery
                      </h1>
                      <p>
                        "Embark on a transformative digital odyssey guided by
                        our unrivaled expertise in shaping digital mastery. We
                        intricately weave cutting-edge strategies into every
                        digital facet, sculpting unparalleled online landscapes.
                        Propel your brand to new heights with our bespoke
                        solutions, harmonizing visionary insights with
                        technological prowess, setting a new standard where
                        digital excellence becomes second nature."
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn12">
                       
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src={slider1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container ">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="detail-box">
                      <h1>
                        Crafting <br />
                        Digital Excellence
                      </h1>
                      <p>
                        "Embark on a digital journey with our unparalleled web
                        development expertise. We weave innovation into every
                        code, creating dynamic and stunning online experiences.
                        Elevate your brand with our tailored solutions, where
                        vision meets technology, and excellence becomes the
                        standard."
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn12">
                       
                        </a>
                      </div>
                      
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src={slider2} alt="" />
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ol className="carousel-indicators">
            <li
              data-target="#customCarousel1"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#customCarousel1" data-slide-to="1"></li>
            {/* <li data-target="#customCarousel1" data-slide-to="2"></li> */}
          </ol>
        </div>
      </section>
    </div>
  );
};

export default BannerHome;
