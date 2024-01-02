//Me traigo todos las actions y desarrollo que hacen 

import axios from "axios";

import{
    GET_ALL_GAMES,
    GET_GENRES,
    GET_GAMES_BY_NAME,
    GET_VIDEOGAME_BY_ID,
    FILTER_BY_GENRE,
    ORDER_BY_NAME,
    FILTER_CREATED,
    ORDER_BY_RANKING
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
        throw error.response.data.message;
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
        throw error.response.data.message;
    }
}

export const getVideogameByName = (name)=>{
    try {
        return async (dispatch) =>{
            const response = await axios.get(`http://localhost:3001/videogames/?name=${name}`)
            const data = response.data
            return dispatch({
                type:GET_GAMES_BY_NAME, 
                payload: data})         
        } 
    } catch (error) {
        
    }
}

export const getVideogameByiD = (id)=>{
    try {
        return async (dispatch) =>{
            const response = await axios.get(`http://localhost:3001/videogames/${id}`)
            const data = response.data
            return dispatch({
                type:GET_VIDEOGAME_BY_ID, 
                payload: data})         
        } 
    } catch (error) {
        
    }
}

// ver la necesidad de platforms. 

//Filtrados

export const filterVideogameByGenre = (payload)=>{
    return{
        type:FILTER_BY_GENRE,
        payload
    }
}

export const orderByName = (payload)=>{
    return {
        type:ORDER_BY_NAME,
        payload
    }
}

export const filterCreated = (payload)=>{
    return {
        type: FILTER_CREATED,
        payload
    }
}

export const orderByRanking = (payload) => {
    return {
        type: ORDER_BY_RANKING,
        payload
    };
};

