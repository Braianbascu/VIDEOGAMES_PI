const {Videogame, Genre} = require ("../db");
const axios = require ("axios");
const {API_KEY} = process.env

const videogamesByIdController = async (id, source) =>{

    if (source === "api"){
      const videogamesByApi = await axios.get (`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);

      if(videogamesByApi.data){

        const vgApi = videogamesByApi.data;

      const videogamesApi={
        id:vgApi.id,
        name:vgApi.name,
        description:vgApi.description,
        platforms:vgApi.platforms ? vgApi.platforms.map((e) => e.platform.name) : [],
        image:vgApi.background_image,
        released:vgApi.released,
        rating:vgApi.rating,
        genres:vgApi.genres?.map((e)=> e.name).join(", ").toString(),
      }
      return videogamesApi;
    }  
  }
  const videogamesByDb = await Videogame.findOne({
    where: { id:id }, // condicion de busqueda 
    include:{ // incluido el modelo
      model: Genre,
      attributes:["name"],
      through: { attributes: [] },
    }
  });

  console.log(videogamesByDb)

  if(videogamesByDb){
    const genres = videogamesByDb.genres.map((genre) => genre.name).join(", ").toString();
    const videogamesInfo={
      id:videogamesByDb.id,
      name:videogamesByDb.name,
      description:videogamesByDb.description,
      platforms: videogamesByDb.platforms,
      image:videogamesByDb.background_image,
      released:videogamesByDb.released,
      rating:videogamesByDb.rating,
      genres: genres,
    }
    return videogamesInfo;
  }
};

module.exports = videogamesByIdController;