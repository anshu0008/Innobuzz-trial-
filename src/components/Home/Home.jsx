import React from 'react'
import './Home.css'
import logo from '../../assets/hack.gif'
{/* <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
    rel="stylesheet"></link> */}
    <style>
  @import url('https://fonts.googleapis.com/css2?family=Island+Moments&family=Poppins&family=Quicksand:wght@300;400&family=Source+Code+Pro:ital,wght@0,400;1,300&family=Trispace&display=swap');

@import url('http://fonts.cdnfonts.com/css/origin-tech-demo');


</style>
const Home = () => {
  // const mystyle = {
  //   font-family:'Origin Tech Demo',sans-serif;
  //  // CSS CODE
  //  };
  return (
    <div className="section">
      <div className="container">
        <div className="content-section">
          <div className="title">
            <h1 className='hd1'>INNOBUZZ</h1>
          </div>
          <div className="content">
            <h2 className='subhed' style={{color:'white'}}>Ideate | Iterate | Culminate</h2>
            <p className='pd1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsam inventore quam placeat quibusdam a sed. Reprehenderit repudiandae dolorem impedit sunt iste ducimus, voluptate molestiae nulla tempora consequuntur, sed nemo quas similique facere quos asperiores sequi dolorum enim at, explicabo autem. Dolorem, placeat quis nam dolore iusto voluptas fugit porro recusandae accusantium ab explicabo, fuga iste, similique dolor nesciunt consectetur ex deleniti harum. Eveniet.</p>
            <div className="button">
              <a href=" ">Register</a>
            </div>
          </div>
          <div className="social">
            <a href=""><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="image-section">
          <img className="img" src={logo} alt="hackathon gif" />
        </div>
      </div>
    </div>
  )
}

export default Home