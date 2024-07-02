import React from "react";
import "./WhyUs.css";
import img1 from "../assets/images/w1.png";
import img2 from "../assets/images/w2.png";
import img3 from "../assets/images/12.png";
import img4 from "../assets/images/10.png";
import img5 from "../assets/images/3447661.png";
import img6 from "../assets/images/11.png";


const WhyUs = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const whyUsData = [
    {
      id: 1,
      image: img1,
      title: "Expertise",
      description:
        "Rely on our seasoned team with deep expertise in cutting-edge technologies, ensuring your project benefits from the latest advancements in web development for optimal performance and innovation.",
    },
    {
      id: 2,
      image: img2,
      title: "Personalized Service",
      description:
        "Experience unparalleled dedication with personalized service. We tailor solutions to your unique needs, providing attentive support throughout the development process, fostering lasting partnerships and satisfaction.",
    },
    {
      id: 3,
      image: img3,
      title: "Innovation Focus",
      description:
        "Choose innovation as a cornerstone. We prioritize creative solutions, employing forward-thinking strategies to ensure your web development project stands out, captivates users, and stays ahead of industry trends.",
    },
    {
      id: 4,
      image: img4,
      title: "Commitment to Excellence",
      description:
        "At BuildZone, excellence is non-negotiable. We commit to delivering web solutions of the highest quality, adhering to industry best practices, and consistently exceeding client expectations.",
    },
    {
      id: 5,
      image: img5,
      title: "Client Empowerment",
      description:
        "Select BuildZone for more than just development. We empower clients with knowledge, transparency, and collaboration—ensuring you understand and actively contribute to the success of your digital initiatives.",
    },
    {
      id: 6,
      image: img6,
      title: "Happy Customers",
      description:
        "Join our community of delighted clients. Our focus on customer satisfaction results in successful projects and lasting relationships. Experience the joy of a seamless, collaborative, and rewarding web development journey with us.",
    },
  ];

  return (
    <>
      <section className="why_section layout_padding bg-white" style={{zIndex:1000000}}>
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Why Choose <span>Us</span>
            </h2>
            <p>
              "Choose us for unparalleled expertise in crafting bespoke digital
              solutions.<br/> 
              Our commitment to innovation, security, and
              personalized support ensures your project's success and surpasses
              expectations."
            </p>
          </div>
          <div className="why_container">
            {whyUsData.map((item, index) => (
              <div
                className={`box ${hoveredIndex === index ? "hovered" : ""}`}
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="img-box">
                  <img
                    src={item.image}
                    alt="Image"
                    className={`image ${
                      hoveredIndex === index ? "scaled" : ""
                    }`}
                    style={{
                      transform: `scale(${hoveredIndex === index ? 1.5 : 1})`,
                      transition: "transform 1s ease-in-out",
                    }}
                  />
                </div>
                <div className="detail-box">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
