import {
    GET_ALL_GAMES, GET_GENRES
} from "../actions/actionsType";

// todos los estados
let initialState = {
    allVideogames:[],
    genres:[]
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


        
        
        default:
            return state
    }
}

export default rootReducer;