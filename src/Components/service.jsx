import React from "react";
import DvrIcon from "@mui/icons-material/Dvr";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import RouterIcon from "@mui/icons-material/Router";
import DrawIcon from "@mui/icons-material/Draw";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import "./service.css";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Slide, Grow } from "@mui/material";

const Service = () => {
  const { ref: revealRef1, inView: inView1, entry1 } = useInView();
  const [hoverIndex, setHoverIndex] = useState(null);
  const servicesData = [
    {
      icon: <DvrIcon className="service-icon" />,
      title: "Website Design and Development",
      description:
        "Crafting bespoke websites with responsive design, intuitive user interfaces, and seamless user experiences to meet diverse client needs and ensure optimal performance across devices.",
    },
    {
      icon: <MobileScreenShareIcon className="service-icon" />,
      title: "Mobile App Development",
      description:
        "Designing and developing cross-platform mobile applications for iOS and Android, ensuring a seamless user experience and leveraging frameworks like React Native and Flutter for efficient development.",
    },
    {
      icon: <RouterIcon className="service-icon" />,
      title: "Web Hosting and Maintenance",
      description:
        "Providing reliable web hosting services and ongoing maintenance support to ensure optimal website performance, accessibility, and security, offering peace of mind for clients and their users.",
    },
    {
      icon: <VpnLockIcon className="service-icon" />,
      title: "Security Services",
      description:
        "Implementing robust security measures and conducting audits to safeguard websites and applications, ensuring protection against potential threats and vulnerabilities for a secure online environment.",
    },
    {
      icon: <DrawIcon className="service-icon" />,
      title: "UI/UX Design",
      description:
        "Creating visually appealing interfaces with user-centric design, conducting usability testing, and refining designs based on feedback to ensure optimal user experiences and aesthetic appeal for websites and applications.",
    },
    {
      icon: <ManageAccountsIcon className="service-icon" />,
      title: "HR Management System",
      description:
        "Revolutionize HR processes with our comprehensive HR Management System. From payroll and attendance tracking to recruitment and performance evaluations, our centralized platform enhances efficiency, compliance, and data-driven decision-making.",
    },
    {
      icon: <PriceChangeIcon className="service-icon" />,
      title: "E-commerce Development",
      description:
        "Building secure, feature-rich online stores, implementing user-friendly product catalogs, shopping carts, and reliable payment gateways for a seamless and secure shopping experience.",
    },
    {
      icon: <WysiwygIcon className="service-icon" />,
      title: "Custom Software Development",
      description:
        "Tailoring software solutions to meet unique business requirements, offering bespoke development and consulting services to optimize processes and address specific challenges faced by clients.",
    },
    {
      icon: <TouchAppIcon className="service-icon" />,
      title: "Training and Support",
      description:
        "Offering comprehensive training sessions for clients to manage their websites and applications, coupled with ongoing support and troubleshooting services to ensure a smooth and hassle-free online presence.",
    },
  ];

  const handleMouseOver = (index) => {
    setHoverIndex(index);
  };

  const handleMouseOut = () => {
    setHoverIndex(null);
  };

  return (
    <>
      <section className="service_section layout_padding bg-white">
        <div className="service_container">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>
                Our <span>Services</span>
              </h2>
              <p>
                "Elevate your digital presence with tailored websites, mobile
                apps, and secure hosting. <br/>Our expertise extends to HR solutions,
                robust security, and personalized support for unparalleled
                online excellence."
              </p>
            </div>
            <div className="services-container" ref={revealRef1}>
              {servicesData.map((service, index) => (
                <div
                  className="col-md-4"
                  key={index}
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseOut={handleMouseOut}
                >
            <Grow in={inView1} timeout={4000} >
                  <div
                    className={
                      hoverIndex === index
                        ? "box service-box colored"
                        : "box service-box"
                    }
                  >
                    <div className="svg_icons ">{service.icon}</div>
                    <div className="detail-box">
                      <h5>{service.title}</h5>
                      <p>{service.description}</p>
                    </div>
                  </div>
              </Grow>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
