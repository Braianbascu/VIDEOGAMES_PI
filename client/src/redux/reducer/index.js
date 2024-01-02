import {
    CLEAR_DETAIL,
    GET_ALL_GAMES, GET_GAMES_BY_NAME, GET_GENRES, GET_VIDEOGAME_BY_ID
} from "../actions/actionsType";

// todos los estados
let initialState = {
    allVideogames:[],
    videogame:[],
    genres:[],
    detail:{},
}

function rootReducer (state = initialState, action){
    switch(action.type){
        case GET_ALL_GAMES:   // en este caso
            return{
                ...state, // devuelvo el estado y solo modifico el de abajo.
                allVideogames: action.payload
            }

        case GET_GENRES:
            return{
                ...state,
                genres: action.payload
            }
        
        case GET_GAMES_BY_NAME:
            return{
                ...state,
                allVideogames: action.payload
            }
        
        case GET_VIDEOGAME_BY_ID:
            return{
                ...state,
                detail: action.payload
            }
        
        case CLEAR_DETAIL:
            return{
                ...state,
                detail:{}
            }


        
        
        default:
            return state
    }
}

export default rootReducer;