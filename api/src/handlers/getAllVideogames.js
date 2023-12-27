const allVideogamesController = require ("../controller/allVideogamesController");
const videogameByNameController = require("../controller/videogameByNameController");

const allVideogamesHandler = async (req, res)=>{
    const {name}= req.query;
    try {
        
        if(name){
            const videogameByName = await videogameByNameController(name);
            return res.status(200).json(videogameByName);
        }

         const allVideogames = await allVideogamesController()
         return res.status(200).json(allVideogames)

    } catch (error) {
        res.status(400).json(error.message)
    }
}


module.exports = allVideogamesHandler ; 