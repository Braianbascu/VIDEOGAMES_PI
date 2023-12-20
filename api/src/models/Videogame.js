const { DataTypes } = require('sequelize');
//const { toDefaultValue } = require('sequelize/types/utils');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull:false,
    },
    plataforms:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    launch:{
      type: DataTypes.DATEONLY,
      allowNull:false,
    },
    rating:{
      type:DataTypes.FLOAT, // para medir con punto flotante
    },

  },

  {timestamps:false}

  );
};
