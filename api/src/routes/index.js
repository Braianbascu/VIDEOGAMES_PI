const { Router } = require('express');
const router = Router();
const videogamesRoutes = require ("./videogamesRoutes");
const genresRoutes = require ("./genresRoutes");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


router.use ("/videogames", videogamesRoutes)
router.use ("/genres", genresRoutes)



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
