const {Sequelize} = require("sequelize")
const db = new Sequelize('react', 'root', 'green8007jk', {
    host: 'localhost',
    dialect: "mysql"
  });

  module.exports = db

