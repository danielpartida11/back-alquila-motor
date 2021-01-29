const express = require('express'); //Requiero express para poder trabajar con él
const bodyParser = require('body-parser'); //Requiero body-parser para poder gestionar las peticiones post

const app = express(); //Creo la aplicación de express

require('./db'); //Requiero el archivo de la base de datos

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Probando, probando... Sí, todo correcto!'); //Hago este get para comprobar que funciona el servidor
});

app.listen(3333, () => {
    console.log('Servidor levantado en el puesto 3333!!'); //Función para arrancar el servidor en el puerto 3333
    //localhost:3333
});