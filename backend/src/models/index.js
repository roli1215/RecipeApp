
const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize(`postgres://postgres:roli22:@localhost:5432/recipe_app`, {dialect: "postgres"})

    sequelize.authenticate().then(() => {
        console.log(`Database connected to recipe_app`)
    }).catch((err) => {
        console.log(err)
    })

    const db = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

db.users = require('./userModel') (sequelize, DataTypes)

module.exports = db