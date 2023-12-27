const {Genre} = require ("../db");
const axios = require("axios");
const {API_KEY} = process.env;


const allGenresController = async()=>{

    try {
        const genresFromApi = await axios.get(`http://api.rawg.io/api/genres?key=${API_KEY}`)

        const genres = await genresFromApi.data.results.map((genre)=> genre.name);

        genres.map((g)=> 
        Genre.findOrCreate({
            where: {
                name: g,
            },
        })
    );

    return Genre.findAll();

    } catch (error) {
        
    }

}


module.exports = allGenresController;