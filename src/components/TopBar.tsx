import React from 'react';
import './TopBar.css';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const TopBar: React.FC = () => {
  return (
    <div className="top-bar">
      <div className="left-section">
        <h1>Chicks Gold</h1>
        <span className="option">|</span>
        <nav>
          <a href="#">
            CURRENCY &#9662;
          </a>
          <a href="#">
            ITEMS &#9662;
          </a>
          <a href="#">
            ACCOUNTS &#9662;
          </a>
          <a href="#">
            SERVICES &#9662;
          </a>
          <a href="#">
            SWAP &#9662;
          </a>
          <a href="#">
            SELL &#9662;
          </a>
        </nav>
      </div>
      <div className="right-section">
        <a href="#">USD &#9662;</a>
        <a href="#" className="cart-option">
          <FaShoppingCart className="icon" /> 
          <span className="cart-text">CART</span>
          <span className="cart-number">(5)</span>
        </a>

        <a href="#" className="sign-in-option" style={{ color: 'black' }}>
          SIGN IN <FaUser className="user-icon" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
