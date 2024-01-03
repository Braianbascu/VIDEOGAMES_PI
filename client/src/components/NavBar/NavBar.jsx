import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Filter from '../Filter/Filter';
import { Link } from 'react-router-dom'; 
import style from './NavBar.module.css';

function NavBar() {
  return (
    <div className={style.navBar}>
      <div className={style.logoContainer}>
        <img src="https://assets.soyhenry.com/logoOG.png" alt="logo" className={style.logo} />
        <Link to="/form">
          <button className={style.formButton}>CREATE GAME</button>
        </Link>
      </div>
      <div className={style.centerContent}>
        <SearchBar />
      </div>
      <div className={style.filterButtons}>
        <Filter />
      </div>
    </div>
  );
}

export default NavBar;