import React from 'react'
import './Categories.css'
import {FaHeartbeat} from "react-icons/fa";
import {FaGlobe} from "react-icons/fa";
import {FaSeedling} from "react-icons/fa";
import {FaInfinity} from "react-icons/fa";
import {FaUserGraduate} from "react-icons/fa";
import {FaTree} from "react-icons/fa";
const Categories = () => {
  return (
    <div className='main'>
      <div className="heading"><span className='grn'>CATEGORIES</span></div>
      <div className="cards">
              <div className="card1">
              <FaSeedling style={{color: "#FFD700"}} size={25}/>
                <div className="cardHeading">Agriculture</div>
                
                <p className="card1p">Gain substainstial details by solving real world problems 
                and pit against others and come up with initiative solutions.</p>
              </div>
              <div className="card1">
              <FaTree style={{color: "#FFD700"}} size={25}/>
              <div className="cardHeading">Environment</div>
              
              <p className="card1p">Gain substainstial details by solving real world problems 
                and pit against others and come up with initiative solutions.</p>
              </div>
              <div className="card1">
              <FaInfinity style={{color: "#FFD700"}} size={25}/>
                <div className="cardHeading">Open Innovation</div>
                
                <p className="card1p">Gain substainstial details by solving real world problems 
                and pit against others and come up with initiative solutions.</p>
              </div>
              <div className="card1">
              <FaGlobe style={{color: "#FFD700"}} size={25}/>
                <div className="cardHeading">Web 3</div>
                
                <p className="card1p">Gain substainstial details by solving real world problems 
                and pit against others and come up with initiative solutions.</p>
              </div>
              <div className="card1">
                 <FaHeartbeat style={{color: "#FFD700"}} size={25}/>
                <div className="cardHeading">Healthcare</div>
                
                <p className="card1p">Gain substainstial details by solving real world problems 
                and pit against others and come up with initiative solutions.</p>
              </div>
              <div className="card1">
              <FaUserGraduate style={{color: "#FFD700"}} size={25}/>
                <div className="cardHeading">Education</div>
                
                <p className="card1p">Gain substainstial details by solving real world problems 
                and pit against others and come up with initiative solutions.</p>
              </div>
      </div>
    </div>
  )
}

export default Categories