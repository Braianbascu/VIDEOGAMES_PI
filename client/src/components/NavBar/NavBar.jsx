import style from'./NavBar.module.css';
import {Link} from 'react-router-dom'
import React from 'react';

function NavBar() {
  return (
    <div className={style.navBar}>
      <div className={style.logContainer}>
        <img src="https://assets.soyhenry.com/logoOG.png" alt="logo" className={style.logo} />
      </div>
      <div className={style.searchBar}>
      </div>
    </div>
  );
}

export default NavBar;