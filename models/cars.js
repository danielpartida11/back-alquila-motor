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