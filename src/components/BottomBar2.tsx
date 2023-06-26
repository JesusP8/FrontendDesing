import React from 'react';
import './BottomBar2.css';

const BottomBar2: React.FC = () => {
  return (
    <div className="bottom-bar2">
        <div className="payment-methods2">
      <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1200px-Facebook_icon_2013.svg.png'} className="payment-method-image2" />
      <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png'} className="payment-method-image2" />
      <img src={'https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-icon-circle-png-logo-8.png'} className="payment-method-image2" />
      <img src={'https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png'} className="payment-method-image2" />
    </div>
    <div className="left-content">
    <h1 className="title2">Chicks Gold</h1>
    <p className="text3"> support@chicksgold.com</p>
    </div>
    <div className="some-text">
    <h1 className="title3">Chicks Gold</h1>
    <p className="text4"> Games</p>
    <p className="text4"> About Us</p>
    <p className="text4"> Blog</p>
    <p className="text4"> Sitemap</p>
    </div>
    <div className="some-text2">
    <h1 className="title4">Support</h1>
    <p className="text5"> Contact Us</p>
    <p className="text5"> FAQ</p>
    </div>
    <div className="some-text3">
    <h1 className="title5">Legal</h1>
    <p className="text6"> Privancy Policy</p>
    <p className="text6"> Terms of Services</p>
    <p className="text6"> Copyright Policy</p>
    </div>
    <div className="some-text4">
    <p className="text7"> © 2017-2020 Chicksgold.com. All Rights Reserved</p>
    </div>
    <div className="rating">
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
      </div>
      <div className="some-text5">
    <p className="text8"> Trustpilot Reviews</p>
    </div>
      </div>    
  );  
}

export default BottomBar2;
