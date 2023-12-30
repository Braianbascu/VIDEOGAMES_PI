//Me traigo todos las actions y desarrollo que hacen 

import axios from "axios";

import{
    GET_ALL_GAMES,
    GET_GENRES
} from "./actionsType";

//traer todos los juegos 

export const getAllGames= ()=>{
    try {
        return async (dispatch) =>{
            const response = await axios.get(`http://localhost:3001/videogames`) // llamado al server
            const data = response.data // guarda la info de la solicitud http
            return dispatch({ 
                type: GET_ALL_GAMES, 
                payload: data}) // el dispatch envia la accion al reducer y en el payload toda la data
        }
    } catch (error) {
        console.log(error)
    }
}

export const getGenres = ()=>{
    try {
        return async (dispatch) =>{
            const response = await axios.get(`http://localhost:3001/genres`)
            const data = response.data
            return dispatch({
                type:GET_GENRES, 
                payload: data})         
        } 
    } catch (error) {
        
    }
}