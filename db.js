const Sequelize = require('sequelize'); //Me traigo la librería Sequelize para poder trabajar con ella

const CarModel = require('./models/cars'); //Me traigo el modelo creado para que lo cargue en la base de datos

const sequelize = new Sequelize('alquilamotor', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'        //Con esta función, me conecto a mi base de datos con las siguientes creedenciales:
                            //Nombre de la BBDD, usuario, contraseña, hosting y dialecto
});

const Car = CarModel(sequelize, Sequelize); //Con esto ya tengo el modelo car para sincronizar con mi base de datos

sequelize.sync({ force: false})
    .then(() => {
        console.log('Se han sincronizado las tablas!!'); //Aqui sincronizo la base de datos y le pongo el console log para comprobar si sincroniza
    })

module.exports = {
    Car //Archivo exportado
}









