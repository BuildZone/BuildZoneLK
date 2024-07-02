import React from "react";
import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import { ToastContainer } from "react-toastify";
// import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import notify from "./toast";
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { blue } from "@mui/material/colors";

const Footer = ({ scrollToTopic }) => {
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  
  const [subed, setSubed] = React.useState(false);
  let [storeData, setStoreData] = React.useState([]);
  const check = (e) => {
    setSubed(false);
    setEmail(e.target.value);
    storeData.map((subscriber) => {
      if (subscriber === e.target.value) {
        setSubed(true);
      }
    });
  };

  React.useEffect(() => {
    setStoreData(JSON.parse(localStorage.getItem("subscribers")) || []);
  }, []);

  const [email, setEmail] = React.useState("");
  const [isHovered, setIsHovered] = React.useState("");

  const subscribe = async () => {
    if (subed) {
      // remove email from local storage and update
      const subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];
      const updatedSubscribers = subscribers.filter(
        (subscriber) => subscriber !== email
      );
      localStorage.setItem("subscribers", JSON.stringify(updatedSubscribers));
      
      notify("Unsubscribed successfully");
     
    } else {
      const subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];

      subscribers.push(email);

      localStorage.setItem("subscribers", JSON.stringify(subscribers));
      
      notify("Subscribed successfully");

    }
    setEmail("");
  };
  const topics = [
    { id: "home", text: "Home", icon: <HomeIcon /> },
    { id: "service", text: "Services", icon: <HomeRepairServiceIcon /> },
    // { id: 'aboutUs', text: 'About', icon: <InfoIcon /> },
    { id: "products", text: "Products", icon: <EditCalendarIcon /> },
    // { id: 'specialization', text: 'Specialization', icon: <HelpIcon /> },
    { id: "clients", text: "Clients", icon: <PeopleAltIcon /> },
    // { id: 'contact', text: 'Contact', icon: <PhoneCallbackIcon /> },
  ];

  const topicGoto = [
    { id: "num", text: "(+94) 76 222 5001", icon: <WhatsAppIcon />, link:"https://wa.me/94762225001" },
    { id: "servi", text: "BuildZone", icon: <LinkedInIcon /> ,link: ""},

    { id: "produc", text: "buildzone4u@gmail.com", icon: <MarkunreadIcon />, link:"mailto:buildzone4u@gmail.com" },
    
    { id: "clien", text: "Website", icon: <VpnLockIcon />,link:"https://www.buildzone.online" },
    
  ];

  const renderListItem = (topic) => (
    <ListItem disablePadding key={topic.id}>
      <ListItemButton
        onClick={() => scrollToTopic(topic.id)}
        onMouseEnter={() => setIsHovered(topic.id)}
        onMouseLeave={() => setIsHovered("")}
      >
        <ListItemIcon
          sx={{ color: blue[100] }}
          className={` ${isHovered === topic.id ? "hover" : ""}`}
        >
          {topic.icon}
        </ListItemIcon>
        <ListItemText
          primary={topic.text}
          className={` ${isHovered === topic.id ? "hover" : ""}`}
        />
      </ListItemButton>
    </ListItem>
  );

  const renderListItemGoto = (topic) => (
    <ListItem disablePadding key={topic.id}>
      <Link to={`${topic.link}`} target="_blank">
      <ListItemButton
        
        onMouseEnter={() => setIsHovered(topic.id)}
        onMouseLeave={() => setIsHovered("")}
      >
        <ListItemIcon
          sx={{ color: blue[100] }}
          className={` ${isHovered === topic.id ? "hover" : ""}`}
        >
          {topic.icon}
        </ListItemIcon>
        <ListItemText
          primary={topic.text}
          className={` ${isHovered === topic.id ? "hover" : ""}`}
        />
      </ListItemButton>
      </Link>
    </ListItem>
  );

  return (
    <>
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_contact">
              <div className="info_link_box">
                <h4>Contact Via</h4>
                <div className="info_links">
                  {topicGoto.map((topic) => (
                    <React.Fragment key={topic.id}>
                      {renderListItemGoto(topic)}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              </div>
              
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_detail">
                <h4>Address</h4>
                <p >
                  "BuildZone IT Solution" <br />
                  1<sup>st</sup> Floor, <br />
                  No 38/28,<br />
                  Nelson Lane, <br />
                  Colombo 03.  <br />
                  Sri Lanka.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>Go to</h4>
                <div className="info_links">
                  {topics.map((topic) => (
                    <React.Fragment key={topic.id}>
                      {renderListItem(topic)}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col ">
              <h4>Subscribe</h4>
              <form>
                <input
                  type="text"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => check(e)}
                />
                <button type="button" onClick={subscribe} disabled={(isValidEmail(email)===false)}>
                  {subed ? "Unsubcribe" : "Subscribe"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="d-flex justify-content-center mb-3 mt-3">
        <div className="">
          <span>
             &copy; All Rights Reserved By
            BuildZone IT Solution
          </span> || 2024
        </div>
      </section>
    </>
  );
};

export default Footer;
