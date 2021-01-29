module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: type.STRING,
            required: true,
            unique: true
        },
        email: {
            type: type.STRING,
            unique: true,
            required: true
        },
        password: {
            type: type.STRING,
            required: true
        },
        age: {
            type: type.INTEGER,
            required:true
        },
        gender: {
            type: type.STRING,
            required: true
        },
        role: {
            type: type.STRING,
            default: 'regular',
            enum: [
                'regular',
                'admin'
            ]
        }
    })
}