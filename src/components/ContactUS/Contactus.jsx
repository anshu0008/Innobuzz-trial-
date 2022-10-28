import './Contact.css'
import {FaInstagram} from 'react-icons/fa';
import { FaPeriscope } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import Untitled from "./assets/Untitled.png";

const Contactus = () => {
    return (  
        <div className="cont1">
            <form action="" className='main1'>
                <h2 style={{color: "#000957"}}>Let's Talk</h2>
                <p className='p1'>Contact us here by leaving a direct message and we will get back to you promptly</p>
                    <label htmlFor="name">Your Name</label><br />
                    <input className='input1' type="text" name="nam" /><br />
                    <label htmlFor="name" className='label1'>Your Email</label><br />
                    <input className='input1' type="email" name="name" /><br />
                    <label htmlFor="msg" className='label1' >Your message</label><br />
                    <textarea className='textarea1' name="mdg" id="" cols="26" rows="6"></textarea><br />
                    <button className='button1' >Send message</button>
            </form>
            <div className="icon1">
                <img src={Untitled} alt="" className='img1' />
               <div className="info">
                <div className="adrs1"><FaPeriscope style={{color: "black"}}/>  E-Learning Centre VSSUT, Burla</div>
                <div className="phn1"><FaPhoneAlt style={{color: "black"}}/>  98611 22806</div>
                <div className="mail1"><FaEnvelope style={{color: "black"}}/>  contact@vssutinnobuzz.com</div>
                <div className="social1"><FaFacebook style={{color: "black"}}/>&emsp;&emsp;&emsp;<FaInstagram style={{color: "black"}}/>&emsp;&emsp;&emsp;<FaTwitter style={{color: "black"}}/></div>
                </div> 
            </div>
        </div>
    );
}
 
export default Contactus;