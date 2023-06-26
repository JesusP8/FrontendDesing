import React from 'react';
import './BottomBar.css';

const BottomBar: React.FC = () => {
  return (
    <div className="bottom-bar">
        <div className="payment-methods">
      <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/800px-Visa_Inc._logo.svg.png'} className="payment-method-image" />
      <img src={'https://upload.wikimedia.org/wikipedia/commons/7/72/MasterCard_early_1990s_logo.png'} className="payment-method-image" />
      <img src={'https://cdn.icon-icons.com/icons2/674/PNG/512/American_Express_icon-icons.com_60519.png'} className="payment-method-image" />
      <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Skrill_logo.svg/1200px-Skrill_logo.svg.png'} className="payment-method-image" />
      <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png'} className="payment-method-image" />
    </div>
    <p className="text2"> and 50+ more</p>
      </div>    
  );
}

export default BottomBar;
