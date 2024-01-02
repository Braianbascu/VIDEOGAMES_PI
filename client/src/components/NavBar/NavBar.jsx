import style from'./NavBar.module.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Filter from '../Filter/Filter';

function NavBar() {
  return (
    <div className={style.navBar}>
      <div className={style.logoContainer}>
        <img src="https://assets.soyhenry.com/logoOG.png" alt="logo" className={style.logo} />
      </div>
      <div className={style.centerContent}>
        <SearchBar/> 
      </div>
      <div className={style.filterButtons}>
        <Filter/>
      </div>
    </div>
  );
}

export default NavBar;