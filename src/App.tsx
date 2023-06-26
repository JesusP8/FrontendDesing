import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import { SelectBar } from './components/SelectBar';
import { SelectBar2 } from './components/SelectBar';
import { SelectBar3 } from './components/SelectBar';
import BigBox from './components/BigBox';
import BottomBar from './components/BottomBar';
import BottomBar2 from './components/BottomBar2';


const App: React.FC = () => {
  return (
    <div className="App">
      <div className="main-text-container">
        <div className="main-text">
          <h1>Condimentum consectetur</h1>
        </div>
      </div>

  <TopBar />
  <SelectBar />
  <SelectBar2 />
  <SelectBar3 />
  <SearchBar />
  <BigBox />
  <BottomBar />
  <BottomBar2 />
    </div>
    
    
  );
}

export default App;
