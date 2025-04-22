import React from 'react';
import "./Footer.css";
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
             <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>They serve navigational and informational purposes for your audience. You need to optimize this real estate despite it being so far down the page. You'll even notice that Nielsen Norman Group saw an uptick in user attention at the very bottom of sites.</p>
                    
             </div>

             <div className="footer-social-icons">
                <Link to='www.facebook.com'><img src={assets.facebook_icon} alt="" /></Link>
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
             </div>
             <div className="footer-content-center">
                 <h2>COMPANY</h2>
                 <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                 </ul>
             </div>
             <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+94-766699525</li>
                    <li>contact711@tomato.com</li>
                </ul>

             </div>
        </div>
        <hr/>
        <p className='footer-copyright'>copyright2024 ©  tomatoo.com -alll right reserved.</p>
    </div>
  );
}

export default Footer;
