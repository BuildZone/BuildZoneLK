import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import LanguageIcon from "@mui/icons-material/Language";
import ClearIcon from "@mui/icons-material/Clear";
import HelpIcon from "@mui/icons-material/Help"; 
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import "./sidebar.css";
import DarkLogo from "../assets/images/1251.png";
import nameDark from "../assets/images/nameWhite.png";
import { Link } from "react-router-dom";

const Sidebar = ({ show, setShow, scrollToTopic,side }) => {
  const topics = [
    { id: "home", text: "Home", icon: <HomeIcon /> },
    { id: "service", text: "Services", icon: <HomeRepairServiceIcon /> },
    { id: "aboutUs", text: "About", icon: <InfoIcon /> },
    { id: "products", text: "Products", icon: <EditCalendarIcon /> },
    { id: "specialization", text: "Specialization", icon: <HelpIcon /> },
    { id: "clients", text: "Clients", icon: <PeopleAltIcon /> },
    { id: "contact", text: "Contact", icon: <PhoneCallbackIcon /> },
    { id: "footer", text: "Footer", icon: <VerticalAlignBottomIcon /> },
  ];
  const renderListItem = (topic) => (
    <ListItem disablePadding key={topic.id}>
      <ListItemButton onClick={() => scrollToTopic(topic.id)}>
        <ListItemIcon>{topic.icon}</ListItemIcon>
        <ListItemText
          primary={<span style={{ fontWeight: "bold" }}>{topic.text}</span>}
        />
      </ListItemButton>
    </ListItem>
  );
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <List>

          { (side === "right")?(
            
              <div className="d-flex align-items-center justify-content-start">
          <Button>
            <ClearIcon onClick={() => setShow(false)} />
          </Button>
          <img src={nameDark} alt="logo" className="imgcss"/>
          </div>
          ):(
            <div className="d-flex align-items-center justify-content-start">
           
            <img src={nameDark} alt="logo" className="imgcss"/>
            <Button>
            <ClearIcon onClick={() => setShow(false)} />
          </Button>
          </div>
          )}

      
        <div>
          {topics.map((topic) => (
            <React.Fragment key={topic.id}>
              {renderListItem(topic)}
            </React.Fragment>
          ))}
        </div>
      </List>
      <Divider />
      <div className="d-flex justify-content-center">
      <img src={DarkLogo} alt="logo" className="imgcss" style={{height:200,width:"auto",marginRight:12}}/>
      </div>
      <Divider />
      <br />
      <div className="info_social d-flex justify-content-center">

        {/* <div className="d-flex align-items-center justify-content-between">
          <span>
            <h1 className="ml-3">
              Build<span className="coloring">Zone</span>
            </h1>
          </span>
          <Button className="mr-3">
            <ClearIcon onClick={() => setShow(false)} />
          </Button>
        </div >
        <div >

        {topics.map((topic) => (
          <React.Fragment key={topic.id} >
            {renderListItem(topic)}
          </React.Fragment>
        ))}
          </div>
      </List>
      <Divider />
      <br />
      <img src="/images/10.png" alt="logo" className="imgcss" />
      <br />
      <Divider />
      <br />
      <div className="info_social"> */}

        &nbsp;&nbsp;
        <a href="https://wa.me/94762225001" target="_blank" className="social-link">
          <WhatsAppIcon sx={{ fontSize: 30 }}></WhatsAppIcon>
        </a>
        &nbsp;
        <a href="mailto:buildzone4u@gmail.com" className="social-link">
          <ForwardToInboxIcon sx={{ fontSize: 30 }}></ForwardToInboxIcon>
        </a>
        &nbsp;
        <Link href="/" className="social-link">
          <LinkedInIcon sx={{ fontSize: 30 }}></LinkedInIcon>
        </Link>
        &nbsp;
        <Link to="/" className="social-link">
          <LanguageIcon sx={{ fontSize: 30 }}> </LanguageIcon>
        </Link>
        &nbsp;
        <Link href="/"  className="social-link">
          <GpsFixedIcon sx={{ fontSize: 30 }}> </GpsFixedIcon>
        </Link>
      </div>
      <br /> <Divider />

      <div> All Right Reserved &copy; BuildZone 2023</div>

      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment>

        <Drawer anchor={side} open={show} onClose={() => setShow(false)} >
          <div className="lm">{list(side)}</div>

        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Sidebar;
