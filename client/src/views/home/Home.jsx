import { useDispatch, useSelector } from 'react-redux';
import { getAllGames, getGenres } from '../../redux/actions/actions';
import { useEffect, useState } from 'react';



import Cards from '../../components/Cards/Cards';

import style from './Home.module.css';


function Home() {
  
  const dispatch =useDispatch()
  const videogames = useSelector((state)=> state.videogames)
  console.log(videogames)
 
// al montarse llamamos las primeras Actions que necesitamos
  useEffect(()=>{
    dispatch(getAllGames())
    dispatch(getGenres())
  },[dispatch])



  return (
    <div className={style.fondo}>
      <Cards allVideogames={videogames}/>
    </div>
  );
}

export default Home;