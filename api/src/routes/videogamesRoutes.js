const {Router} = require ("express");
const videogamesRoutes = Router();
const allVideogamesHandler =  require ("../handlers/getAllVideogames");
const ByIdVideogamesHandler = require("../handlers/getByIDVideogames");
const createVideogamesHandler = require("../handlers/postCreateVideogames");


videogamesRoutes.get("/", allVideogamesHandler);

videogamesRoutes.get("/:id", ByIdVideogamesHandler )

videogamesRoutes.post("/", createVideogamesHandler );


module.exports = videogamesRoutes;