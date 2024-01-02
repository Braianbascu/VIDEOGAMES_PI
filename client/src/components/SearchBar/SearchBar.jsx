import React, {useState} from "react";
import { useDispatch } from "react-redux";
import style from "./SearchBar.module.css"
import { getVideogameByName } from "../../redux/actions/actions";


export default function SearchBar(){
    const dispatch = useDispatch();
    const [name , setName] = useState("");

    const handleChangeInput = (e)=> {
     e.preventDefault()
     setName(e.target.value)
    }
   
    const handleSubmit =(e)=>{
     e.preventDefault();

     dispatch(getVideogameByName(name));
     setName("")
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className={style.Scontainer}>
            <input type="text"
            className={style.input}
            placeholder="Search-Videogame"
            value={name} 
            onChange={(e)=> handleChangeInput(e)}
            />
            <button type="submit" className={style.button} onClick={(e)=> handleSubmit (e)}>
                Search
            </button>
        </div>
        </form>
    )
   


}