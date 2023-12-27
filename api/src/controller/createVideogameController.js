const { Videogame, Genre }= require ("../db");

const createVideogameController= async (
    id,
    name,
    description,
    platforms,
    image,
    released,
    rating,
    genre,) =>{
        const checkVideogame = await Videogame.findOne({where: {name:name} });

        if(checkVideogame){
            throw new Error ("Este Videogame ya fue creado");
        } else {
            const newVideogame = await Videogame.create ({
                id,
                name,
                description,
                platforms,
                image,
                released,
                rating,
                genre,
            })

            const dbGenre = await Genre.findAll({
                where: {name: genre},
            })
            await newVideogame.addGenre(dbGenre)
            
        return {newVideogame, message: "Creacion exitosa!"}

    }
 }

 module.exports = createVideogameController;