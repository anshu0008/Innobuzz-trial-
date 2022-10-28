import React from "react";
import classes from "./Navbar.module.css";
import Logo1 from "./images/LOGO.png";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <img src={Logo1} className="img1" />
      <ul className="ulNav">
        <li className="li">
          <h5>
            <a href="" className={classes.a}><b>About</b></a>
          </h5>
        </li>
        <li className="li">
          <h5>
          <a href="" className={classes.a}><b>Details</b></a>
          </h5>
        </li>
        <li className="li">
          <h5>
          <a href="" className={classes.a}><b>Sponsors</b></a>
          </h5>
        </li>
        <li className="li">
          <h5>
          <a href="" className={classes.a}><b>FAQs</b></a>
          </h5>
        </li>
        <li className="li">
          <h5>
          <a href="" className={classes.a}><b>Support</b></a>
          </h5>
        </li>
      </ul>

      <button>
        <h5>
          <b>Register</b>
        </h5>
      </button>
    </div>
  );
};

export default Navbar;
