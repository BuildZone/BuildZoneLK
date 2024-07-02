import React from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import img from "../assets/images/11111111.png";


const Navbar = ({ show, setShow,side }) => {
  return (
    <div>
    <div className="button-area">
    {/* <button
      onClick={() => setShow(show ? false : true)}
      className={`btn ${show ? "rotate" : ""}`}
      style={{
        position: "fixed",
        top: 10, // Adjust the top position as needed
        right: 10, // Adjust the right position as needed
        background: "black",
        zIndex: 1000,
        color: "white" // Set a higher z-index if needed to make sure it's on top of other elements
        // Add any other styles you want to apply
      }}
      
    > 
      {show ? <></> : <MenuIcon />}
    </button>*/}
    </div>
    {/* {side === "left" ?
 (
      
    <img src={img} 
       style={{
        position: "fixed",
    top: "50%", // Center vertically
    left: 0, // Align with the left edge
    transform: "translate(0, -50%)", // Adjust for vertical centering
    background: "black",
    height:"50%",
    zIndex: 100,// Set a higher z-index if needed to make sure it's on top of other elements
        // Add any other styles you want to apply
      }}
      onMouseOver={() => setShow(true)}
      // onMouseOut={() => setShow(false)}
    />
    ):(
    <img src={img} 
       style={{
        position: "fixed",
    top: "50%", // Center vertically
    right: 0, // Align with the left edge
    transform: "translate(0, -50%)", // Adjust for vertical centering
    background: "black",
    height:"50%",
    zIndex: 100,// Set a higher z-index if needed to make sure it's on top of other elements
        // Add any other styles you want to apply
      }}
      onMouseEnter={() => setShow(true)}
     
    /> )} */}
    </div>
  );
};

export default Navbar;
