const router = require('express').Router(); //Me traigo el router

const { Car } = require('../../db'); //Requiero el objeto car

router.get('/', async (req, res) => {
    console.log(req.usuarioId);
    const cars = await Car.findAll(); //Me carga TODOS los coches
    res.json(cars);
});

router.post('/', async (req, res) => {
    const car = await Car.create(req.body); //Me crea un coche
    res.json(car);
});

router.put('/:carId', async (req, res) => {
    await Car.update(req.body, {
        where: { id: req.params.carId } //Me modifica un coche
    });
    res.json({ success: 'El coche se ha modificado!'});
});

router.delete('/:carId', async (req, res) => {
    await Car.destroy({
        where: { id: req.params.carId} //Elimino un coche
    });
    res.json({ success: 'Coche Vendido!'});
});

module.exports = router; //Y lo exporto