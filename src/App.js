import React from 'react';
import Header from './components/Header/Header.js';
import SearchBar from './components/Search/Search.js';
import SearchButton from './components/SearchButton/SearchButton.js';
import TableList from './components/FaveList/TableList.js';
import SiteIntro from './components/SiteIntro/SiteIntro.js';
import './App.css';




const App = ()=> {
  return (

    <div className='App'>
      <div className='Banner'>
        <Header/>
      </div>
      <div>
        <SearchBar/>
      </div>
      <div>
        <SearchButton/>
      </div>
      <div>
        <TableList/>
      </div>
      <div>
        <SiteIntro/>
      </div>
    </div>

      
  );
}

export default App;