// import React from "react";
// import classes from "./Navbar.module.css";
// import "./Navbar.css"
// import Logo1 from "./images/logo_last year_102954.png";
// import {NavLink} from "react-router-dom";
//  const Navbar = () => {



// export default Navbar


import React from "react";
import classes from "./Navbar.module.css";
import Logo1 from "./images/logo_last year_102954.png";
const Navbar = () => {

  const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navlinks");
const links = document.querySelectorAll(".navlinks li");

const handleClick=()=>{
   
};

  return (
    <div className={classes.navbar}>
    <div className={classes.logo}>
            <img src={Logo1} style={{height:'106px' , width:"100%",margin:"0.01vw 0vw 0vw 2vw"}} />
        </div>
        <div className={classes.ab}>
        <div className={classes.b}><button className={classes.loginbutton} href="#">Register</button></div>
        <div className={classes.hamburger} onClick={handleClick}>
            <div className={classes.line1}></div>
            <div className={classes.line2}></div>
            <div className={classes.line3}></div>
        </div>
        </div>
        <ul className={classes.navlinks}>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Sponsors</a></li>
            <li><a href="/">FAQs</a></li>
            <li><a href="/">Support</a></li>
            <li><button className={classes.loginbutton} href="#">Register</button></li>
        </ul>
        </div>
  );
};

export default Navbar;


