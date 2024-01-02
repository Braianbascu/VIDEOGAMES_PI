import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { filterCreated, filterVideogameByGenre, orderByName, orderByRanking} from "../../redux/actions/actions";
import style from "./Filter.module.css";

export default function Filter(){

    const dispatch =useDispatch();
    const genres = useSelector ((state)=> state.genres);

    // manejador de evento
    const handlerFilterGenre= async(e) =>{
        const value = e.target.value;

        dispatch(filterVideogameByGenre(value))
    } 

    const handlerFilterCreated= async(e) =>{
        const value = e.target.value;

        dispatch(filterCreated(value))
    } 

    const handlerSort= async(e) =>{
        e.preventDefault();
        const value = e.target.value;

       // por nombre
    if (value === "asc" || value === "desc") {
      dispatch(orderByName(value));
      // por ranking
    } else if (value === "ascRanking" || value === "descRanking") {
      dispatch(orderByRanking(value));
    }
    }


    return (
      <div className={style["filter-container"]}>
        {/* "From" Section */}
        <div>
          <select
            name="data-from"
            id="from"
            onChange={(e) => handlerFilterCreated(e)}
            className={style.select}
          >
            <option disabled selected>Select Source</option>
            <option value="All">All Videogames</option>
            <option value="API">API</option>
            <option value="DB">DATABASE</option>
          </select>
        </div>
  
        {/* "Genres" Section */}
        <div>
          <select
            name="genres"
            id="genres"
            onChange={(e) => handlerFilterGenre(e)}
            className={style.select}
          >
            <option disabled selected>Select Genre</option>
            <option value="All">All Genres</option>
            {genres.map((g) => (
              <option value={g.name} key={g.id}>
                {g.name}
              </option>
            ))}
          </select>
        </div>
  
        {/* "Order" Section */}
        <div>
          <select
            name="data-order"
            id="order"
            onChange={(e) => handlerSort(e)}
            className={style.select}
          >
            <option disabled selected>Select Order</option>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
            <option value="ascRanking">Low Ranking</option>
            <option value="descRanking">High Ranking</option>
          </select>
        </div>
      </div>
    );
  }