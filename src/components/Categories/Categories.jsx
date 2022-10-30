import React from 'react'
import classes from "./Categories.module.css";
import {FaHeartbeat} from "react-icons/fa";
import {FaGlobe} from "react-icons/fa";
import {FaSeedling} from "react-icons/fa";
import {FaInfinity} from "react-icons/fa";
import {FaUserGraduate} from "react-icons/fa";
import {FaTree} from "react-icons/fa";
const Categories = () => {
  return (
    <div className={classes.main}>
      <div className={classes.heading}><span className={classes.grn}>CATEGORIES</span></div>
      <div className={classes.cards}>
              <div className={classes.card1}>
              <FaSeedling style={{color: "#FFD700"}} size={25}/>
                <div className={classes.cardHeading}>Agriculture</div>
                
                <p className={classes.card1p}>Gain substainstial details by solving real world problems 
                and pit against others and come up with initiative solutions.</p>
              </div>
              <div className={classes.card1}>
              <FaTree style={{color: "#FFD700"}} size={25}/>
              <div className={classes.cardHeading}>Environment</div>
              
              <p className={classes.card1p}>Gain substainstial details by solving real world problems 
                and pit against others and come up with initiative solutions.</p>
              </div>
              <div className={classes.card1}>
              <FaInfinity style={{color: "#FFD700"}} size={25}/>
                <div className={classes.cardHeading}>Open Innovation</div>
                
                <p className={classes.card1p}>Gain substainstial details by solving real world problems 
                and pit against others and come up with initiative solutions.</p>
              </div>
              <div className={classes.card1}>
              <FaGlobe style={{color: "#FFD700"}} size={25}/>
                <div className={classes.cardHeading}>Web 3</div>
                
                <p className={classes.card1p}>Gain substainstial details by solving real world problems 
                and pit against others and come up with initiative solutions.</p>
              </div>
              <div className={classes.card1}>
                 <FaHeartbeat style={{color: "#FFD700"}} size={25}/>
                <div className={classes.cardHeading}>Healthcare</div>
                
                <p className={classes.card1p}>Gain substainstial details by solving real world problems 
                and pit against others and come up with initiative solutions.</p>
              </div>
              <div className={classes.card1}>
              <FaUserGraduate style={{color: "#FFD700"}} size={25}/>
                <div className={classes.cardHeading}>Education</div>
                
                <p className={classes.card1p}>Gain substainstial details by solving real world problems 
                and pit against others and come up with initiative solutions.</p>
              </div>
      </div>
    </div>
  )
}

export default Categories