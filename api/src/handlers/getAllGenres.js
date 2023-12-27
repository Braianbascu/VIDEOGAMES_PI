const allGenresController = require("../controller/allGenresController");

const allGenresHandler = async (req, res)=>{
    try {
        const allGenres = await allGenresController()
        res.status(200).json(allGenres)        
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = allGenresHandler;