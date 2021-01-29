const router = require('express').Router(); //Me traigo el router para gestionar mis rutas

const apiCarsRouter = require('./api/cars'); //Me traigo el archivo cars

router.use('/cars', apiCarsRouter);

module.exports = router; //Y lo exporto