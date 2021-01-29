const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const { User } = require('../../db');

router.get('/', async (req, res) => {
    const users = await User.findAll(); //Me carga TODOS los usuarios
    res.json(users);
});

router.post('/register',[
    check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('email', 'El email debe ser correcto').isEmail(), //Comprobamos que el usuario rellena los datos correctamente
    check('password', 'La contraseña es obligatoria').not().isEmpty(),

], async (req, res) => {

    const errors = validationResult(req); //Creamos una variable errors para que nos envie en formato JSON los errores del usuario

    if(!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array()}); //Nos devuelve los errores cometidos en un array
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body); //Crea usuarios
    res.json(user);
});

module.exports = router;