import React from 'react'
import "./about.css"
const About=()=>{
 return(
  <div className='row'>
  <div className='details-view'>
  <div className='stages-and-timelines'>
    <div className='overlap-group1'>
      <p className='sih-stages-and-timelines productsans-bold-daintree-22px'>
        <span className='productsans-bold-daintree-22px'>SIH: Stages and Timelines</span>
      </p>
      <div className='firstRound productsans-bold-boston-blue-18px'>
        <span className='productsans-bold-boston-blue-18px'>1st Round</span>
      </div>
      <Rectangle5 className='rectangle-6' />
      <p className='this-will-be-a-submit productsans-bold-shark-16px'>
        <span className='productsans-bold-shark-16px'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
         et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </span>
      </p>
    </div>
    <div className='overlap-group'>
      <div className='secondRound productsans-bold-boston-blue-18px'>
        <span className='productsans-bold-boston-blue-18px'>2nd Round</span>
      </div>
      <Rectangle5 className='rectangle-6' />
      <p className='the-top-10-selected productsans-bold-shark-16px'>
        <span className='productsans-bold-shark-16px'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
         et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </span>
      </p>
    </div>
    <div className='overlap-group0'>
    <div className='thirdRound productsans-bold-boston-blue-18px'>
        <span className='productsans-bold-boston-blue-18px'>3rd Round</span>
      </div>
      <Rectangle5 className='rectangle-6' />
      <p className='the-top-20-selected productsans-bold-shark-16px'>
        <span className='productsans-bold-shark-16px'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
         et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </span>
      </p>
      </div>
  </div>
  </div>
  <div className="side">
    <h2 className='productsans-bold-daintree-22px'>About Hackathon</h2>
    <div className="fakeimg1">Image</div>
    <p className='productsans-bold-shark-16px'>You can't solve a problem on the same level you have to rise to the next level!!</p>
    <h5>
    <ul className='productsans-bold-shark-16px'>
  <li>REGISTRATION BEGINS SOON!!</li>
  <li>TEAM MUST CONSIST OF 1-4 Members</li>
  <li>FREE REGISTRATION</li>
    </ul>  
    </h5>
    <h3 className='productsans-bold-daintree-22px'>REWARDS</h3>
    <div className="fakeimg" >Image</div><br />
    <div className="fakeimg" >Image</div>
  </div>
  </div>


 );
}



export default About

function Rectangle5(props){
  const { className }=props;
  return <div className={`rectangle-5 ${className || " "}`}></div>
}