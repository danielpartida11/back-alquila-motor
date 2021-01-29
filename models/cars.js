module.exports = (sequelize, type) => {
    return sequelize.define('car', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        model: type.STRING,
        fuel: type.STRING,
        km: type.INTEGER,
        tank: type.INTEGER,
        prize: type.INTEGER
    })
}

//Este es el modelo de car con los campos id, name, model, fuel, km, tank y prize de un car. Usando la propiedad type, le decimos que tipo
//de dato va a almacenar en ese campo