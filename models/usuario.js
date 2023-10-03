
// const {
//   Model
// } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class usuario extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   usuario.init({
//     id: DataTypes.INTEGER,
//     nome: DataTypes.STRING,
//     email: DataTypes.STRING,
//     senha: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'usuario',
//   });
//   return usuario;
// };



const { Sequelize, DataTypes } = require('sequelize')
const db = require("../db/conect")
const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
       email: DataTypes.STRING,
       senha: DataTypes.STRING
})

module.exports = User