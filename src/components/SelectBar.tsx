import React from 'react';
import './SelectBar.css';
import './SelectBar2.css';
import './SelectBar3.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';


const SelectBar: React.FC = () => {
  return (
    <div className="select-bar">
      <FontAwesomeIcon icon={faGamepad} className="select-icon" />
      <select>
        <option value="option1">Select game</option>
        <option value="option2">LOL</option>
        <option value="option3">WOW</option>
      </select>
    </div>
  );
};

const SelectBar2: React.FC = () => {
  return (
    <div className="select-bar2">
      <FontAwesomeIcon icon={faGamepad} className="select-icon" />
      <div className="text-container2">
    <p>Price</p>
  </div>
      <select>
        <option value="option1">All</option>
        <option value="option2">aaaa</option>
        <option value="option3">cdf</option>
      </select>
    </div>
  );
};

const SelectBar3: React.FC = () => {
  return (
    <div className="select-bar3">
      <FontAwesomeIcon icon={faGamepad} className="select-icon" />
      <div className="text-container4">
    <p>Item type</p>
  </div>
      <select>
        <option value="option1">All</option>
        <option value="option2">aaaa</option>
        <option value="option3">cdf</option>
      </select>
    </div>
    

    
  );
};



export { SelectBar, SelectBar2, SelectBar3, };


