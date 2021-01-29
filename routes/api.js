const router = require('express').Router(); //Me traigo el router para gestionar mis rutas

const middlewares = require('./middlewares');
const apiCarsRouter = require('./api/cars'); //Me traigo el archivo cars
const apiUsersRouter = require('./api/users');

router.use('/cars', middlewares.checkToken, apiCarsRouter);
router.use('/users', apiUsersRouter);

module.exports = router; //Y lo exporto