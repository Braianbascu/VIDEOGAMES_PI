import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { getVideogameByiD } from '../../redux/actions/actions';

import style from './Detail.module.css';


export function Detail() {

  const {id} = useParams();
  const dispatch=  useDispatch();


  // limpia el estado 
    useEffect(() => {
      return () => {
        dispatch({ type: 'CLEAR_DETAIL' });
      };
    }, [dispatch]);

  // Monta EL DETALLE
  useEffect(()=>{
    dispatch(getVideogameByiD(id))
  },[])


  const videogameDetail = useSelector((state) => state.detail)


  return (
    <div className={style.detailContainer}>
      {videogameDetail && (
        <div key={videogameDetail.id} className={style.detailData}>
          <img
            src={videogameDetail.image}
            alt={`Videogame ${videogameDetail.name}`}
            className={style.detailImage}
          />
          <div>
            <h2 className={style.detailTitle}>{videogameDetail.name}</h2>
            <p className={style.detailSubtitle}>Platforms: {videogameDetail.platforms}</p>
            <p className={style.detailSubtitle}>Released: {videogameDetail.released}</p>
            <p className={style.detailSubtitle}>Rating: {videogameDetail.rating}</p>
            <p className={style.detailSubtitle}>Genres: {videogameDetail.genres}</p>
            <p className={style.detailDescription}>{videogameDetail.description}</p>
          </div>
        </div>
      )}
      <Link to="/home" className={style.button}>
        HOME
      </Link>
    </div>
  );
}
export default Detail;