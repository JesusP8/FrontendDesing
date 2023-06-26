import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css'; 


const SearchBar: React.FC = () => {
    return (
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input type="text" className="search-input" placeholder="Search" />
      </div>
    );
  };
  

export default SearchBar;
