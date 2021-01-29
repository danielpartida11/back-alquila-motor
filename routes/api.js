const router = require('express').Router(); //Me traigo el router para gestionar mis rutas

const apiCarsRouter = require('./api/cars'); //Me traigo el archivo cars
const apiUsersRouter = require('./api/users');

router.use('/cars', apiCarsRouter);
router.use('/users', apiUsersRouter);

module.exports = router; //Y lo exporto