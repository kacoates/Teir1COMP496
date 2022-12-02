import React, {useEffect, useState} from 'react';
import Header from './components/Header/Header.js';
import SearchBar from './components/Search/Search.js';
import SearchButton from './components/SearchButton/SearchButton.js';
import TableList from './components/FaveList/TableList.js';
import SiteIntro from './components/SiteIntro/SiteIntro.js';
import FaveArray from './components/FaveArray/FaveArray.js';
import './App.css';
import MovieList from './components/MovieList/MovieList.js';



const App = ()=> {
    
  return (

    <div className='App'>
      <div className='Banner'>
        <Header/>
      </div>
        <SearchBar placeholder="Enter a Movie Name..." data={MovieList}/>
        <SearchButton/>
        <TableList/>
        <SiteIntro/>
    </div>

      
  );
}

export default App;