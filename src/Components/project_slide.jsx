import React from "react";
import Slider from "react-slick";
import logo1 from "../assets/images/logofs.webp";
import logo2 from "../assets/images/logoBoost.png";
import logo3 from "../assets/images/logoBuildZone.png";
import logo4 from "../assets/images/logoCement.jpeg";
import logo5 from "../assets/images/logoLaserDigi.png";
import logo6 from "../assets/images/logoInspira.png";
import logo7 from "../assets/images/logoJayantha.png";
import logo8 from "../assets/images/logoLaserHoldings.jpeg";
import logo9 from "../assets/images/logoTicket.png";
import logo10 from "../assets/images/logoEMC.jpeg";

const clientImages = [logo1,
  logo2,
  // logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
];

const Project_Slide = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="service_section layout_padding bg-white">
      <div className="service_container container">
        <div className="heading_container heading_center">
          <h2>
            Our <span>Clients</span>
          </h2>
          <p>
            "Our esteemed clients entrust us with their digital aspirations,
            benefiting from our bespoke solutions,<br/> innovative approach,
            and unwavering commitment to their success."
          </p>
        </div>
        <br />
        <div>
          <Slider {...settings}>
            {clientImages.map((image, index) => (
              <div
                key={index}
                style={{ width: "100%", height: "20vh" }}
                className="d-flex justify-content-center"
              >
                <img
                  src={image}
                  alt={`Client ${index + 1}`}
                  style={{ minWidth: "200px", height: "200px" }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Project_Slide;
