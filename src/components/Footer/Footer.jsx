import React from 'react'
import logo from './images/LOGO.png';
import logo1 from './images/Ellipse.png'
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div>
    <div className={classes.footer}>
        <h1>Become a CA</h1>
        <button>Register</button>
        <button>Contact Us</button>
    </div>
    <div className={classes.footer1}>
        <div className={classes.footerpart1}>
          <ul>
            <li>Mobile app</li>
            <li>About</li>
            <li>Details</li>
            </ul>
            <img src={logo} />
            <ul>
              <li>Help Desk</li>
              <li>Blog</li>
              <li>Resources</li>
            </ul>
        </div>
        <hr ></hr>
        <div className={classes.footerpart2}>
          <div className={classes.footlogo}>
         <img src={logo1} style={{paddingRight:'20px'}} />
         <img src={logo1} style={{paddingRight:'20px'}} />
         <img src={logo1} style={{paddingRight:'20px'}} />
         <img src={logo1} style={{paddingRight:'20px'}} />
         </div>
         <h6>
         &copy; Prince.Hacktoberfest2022
         </h6>
        </div>
    </div>
    </div>
  )
}

export default Footer