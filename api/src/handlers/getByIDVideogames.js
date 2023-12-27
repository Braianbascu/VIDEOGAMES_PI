const videogamesByIdController = require("../controller/videogameByIdController");

const ByIdVideogamesHandler = async(req, res) =>{
    
    const {id} = req.params;

    const source = isNaN(id) ? "db" : "api"; // determino la fuente donde se debe hacer la busqueda 

    try {
        const videogamesById = await videogamesByIdController (id, source);
        res.status(200).json(videogamesById)
    } catch (error) {
        res.status(400).json(error.message)
    }
};

module.exports = ByIdVideogamesHandler;