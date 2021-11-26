const Sequelize = require("sequelize")

const connection = new Sequelize('mysql://bf1a9ec9e0a346:c9e62589@us-cdbr-east-04.cleardb.com/heroku_afd9d1bbde0e805?reconnect=true')

module.exports = connection