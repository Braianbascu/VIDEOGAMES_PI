import {
    CLEAR_DETAIL,
    FILTER_BY_GENRE,
    FILTER_CREATED,
    GET_ALL_GAMES, 
    GET_GAMES_BY_NAME, 
    GET_GENRES, 
    GET_VIDEOGAME_BY_ID, 
    ORDER_BY_NAME,
    ORDER_BY_RANKING
} from "../actions/actionsType";

// todos los estados
let initialState = {
    allVideogames:[],
    videogames:[],
    genres:[],
    detail:{},
}

function rootReducer (state = initialState, action){
    switch(action.type){
        case GET_ALL_GAMES:   // en este caso
            return{
                ...state, // devuelvo el estado y solo modifico el de abajo.
                videogames: action.payload,
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
                videogames: action.payload
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

        case ORDER_BY_NAME:
            let sortedArr = [...state.videogames];
            sortedArr.sort((a, b) => {
                if (action.payload === "asc") {
                    return a.name.localeCompare(b.name);
                } else if (action.payload === "desc") {
                    return b.name.localeCompare(a.name);
                } else {
                    return 0;
                }
            });
            return {
                ...state,
                videogames: sortedArr,
            };;

            case ORDER_BY_RANKING: 
            let sortedRankingArr = [...state.videogames];
            sortedRankingArr.sort((a, b) => {
                if (action.payload === "ascRanking") {
                    return a.rating - b.rating;
                } else if (action.payload === "descRanking") {
                    return b.rating - a.rating;
                } else {
                    return 0;
                }
            });
            return {
                ...state,
                videogames: sortedRankingArr,
            };
            
        
        case FILTER_BY_GENRE:
            const allVideogames = state.allVideogames;
            const genresFilter = 
            action.payload === "All"
            ?allVideogames
            : allVideogames.filter((el)=> el.genres.includes(action.payload));
            return{
                ...state,
                videogames:genresFilter,
            }
            // interactuo con el original y filtro si incluye en auxiliar

        case FILTER_CREATED:
            const allVideogame = state.allVideogames;
            const createdFilter =
              action.payload === "DB"
                ? allVideogame.filter((el) => el.created)
                : allVideogame.filter((el) => !el.created);
            return {
              ...state,
              videogames:
                action.payload === "All" ? state.allVideogames : createdFilter,
            };

        default:
            return state
    }
}

export default rootReducer;