const createVideogameController = require ("../controller/createVideogameController");

const  createVideogamesHandler = async(req, res) =>{
   const{
    id,
    name,
    description,
    platforms,
    image,
    released,
    rating,
    genre
   }=req.body;
   try {
    const newVideogames = await createVideogameController(
        id,
        name,
        description,
        platforms,
        image,
        released,
        rating,
        genre);
        res.status(200).json({
            message: "El Videogames se creo de forma exitosa",
            Videogame: newVideogames,
        })
   } catch (error) {
    res.status(400).json(error.message)
   }
};

module.exports = createVideogamesHandler;