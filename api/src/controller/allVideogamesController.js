const { Videogame, Genre } = require ("../db");
const axios = require("axios");
const {API_KEY} =process.env;


const allVideogamesController = async ()=>{


      // traigo los juegos de la db (incluyendo su relacion)
      const gamesDb = await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    });

    // mapeo lo que llego de la db
    const arrayGamesDB = gamesDb.map(game => {
        return {
            id: game.id,
            name: game.name,
            description: game.description,
            platform: game.platform,
            image: game.background_image,
            released: game.released,
            rating: game.rating,
            genres: game.genres.map(genre => genre.name),
            created:game.created
        }
    })


    const arrayGamesApi = [];
    for (let i = 1; i <= 7; i++) {
        let response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`);
        // mapeo y pusheo cada juego
        response.data.results.map(game => {
            arrayGamesApi.push({
                id: game.id,
                name: game.name,
                platform: game.platforms.map(e => e.platform.name),
                image: game.background_image,
                released: game.released,
                rating: game.rating,
                genres: game.genres.map(g => g.name)
            });
        });
    };
    // concateno lo de la db y la api
    return [...arrayGamesDB, ...arrayGamesApi];

}


module.exports = allVideogamesController; 