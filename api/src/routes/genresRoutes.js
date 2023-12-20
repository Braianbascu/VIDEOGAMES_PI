const {Router} = require ("express");
const genresRoutes = Router();
const allGenresHandler = require("../handlers/getAllGenres");


genresRoutes.get("/",allGenresHandler);


module.exports = genresRoutes;