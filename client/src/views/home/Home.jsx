import { useDispatch, useSelector } from 'react-redux';
import { getAllGames, getGenres } from '../../redux/actions/actions';
import { useEffect, useState } from 'react';



import Cards from '../../components/Cards/Cards';

import style from './Home.module.css';


function Home() {
  
  const dispatch =useDispatch()
  const allVideogames = useSelector((state)=> state.allVideogames)
  console.log(allVideogames)

// al montarse llamamos las primeras Actions que necesitamos
  useEffect(()=>{
    dispatch(getAllGames())
    dispatch(getGenres())
  },[dispatch])

 console.log(allVideogames)


  return (
    <div className={style.fondo}>
      <Cards allVideogames={allVideogames}/>
    </div>
  );
}

export default Home;