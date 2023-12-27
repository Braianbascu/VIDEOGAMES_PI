const axios = require ("axios");
const {API_KEY}= process.env;
const {Videogame, Genre} = require ("../db");



const videogameByNameController = async (name) => {
    try {
        // busco en la db por nombre
        const gamesDb = await Videogame.findAll({
            where: { name: name },
            include: {
                model: Genre,
                attributes: ["name"],
                through: {
                    attributes: []
                }
            }
        })

        const arrayGamesDB = gamesDb.map(game => {
            return {
                id: game.id,
                name: game.name,
                description: game.description,
                platform: game.platform,
                image: game.background_image,
                released: game.released,
                rating: game.rating,
                genres: game.genres.map(genre => genre.name)
            }
        })


        // limitar la cantidad maxima
        let arrayGamesApi = [];
        for (let i = 1; i <= 2; i++) {
            let response = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}&page=${i}`);
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

        arrayGamesApi = arrayGamesApi.filter(g => g.name.toLowerCase() || g.name.toUpperCase())
        
        let allGamesByName = [...arrayGamesDB, ...arrayGamesApi].slice(0, 15)  // -> API +  DB (limite maximo revisar)
        return allGamesByName;
    } catch (error) {
        throw Error("El juego ingresado no existe")
    }


}



module.exports = videogameByNameController; 