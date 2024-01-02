import style from'./NavBar.module.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

function NavBar() {
  return (
    <div className={style.navBar}>
      <div className={style.logContainer}>
        <img src="https://assets.soyhenry.com/logoOG.png" alt="logo" className={style.logo} />
      </div>
      <div className={style.searchBar}>
       <SearchBar/> 
      </div>
    </div>
  );
}

export default NavBar;