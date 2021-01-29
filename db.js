const Sequelize = require('sequelize'); //Me traigo la librería Sequelize para poder trabajar con ella

const sequelize = new Sequelize('3726815_alquilamotor', '3726815_alquilamotor', '@f#O[.iF8G!mwia}', {
    host: 'fdb30.atspace.me',
    dialect: 'mysql'        //Con esta función, me conecto a mi base de datos con las siguientes creedenciales:
                            //Nombre de la BBDD, usuario, contraseña, hosting y dialecto
});