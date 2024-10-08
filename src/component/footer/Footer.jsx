import React from 'react'
import '../footer/footer.css'
import footer_img from '../../assets/footer.png';
function Footer() {
  return (
    <div className='FooterPage fixed' id="footer">
      <div className="container">
        <div className="first">
          <img src={footer_img} alt="footer_img" />
          <div className="content">
            <h5>Fitness Hub Gym</h5>
            <span>Lorem ipsum dolor sit, amet consectetur <br />adipisicing elit. Ea modi adipisci quibusdam.</span>
          </div>
        </div>
        <div className="second">
          <h5>Company</h5>
          <a href="#">Our Program</a><br />
          <a href="#">Our Plan</a><br />
          <a href="#">Become a member</a>
        </div>
        <div className="third">
          <h5>Quick Links</h5>
          <a href="#">About Us</a><br />
          <a href="#">Contact Us</a><br />
          <a href="#">Support</a>

        </div>
      </div>
    </div>
  )
}

export default Footer;