const {DataTypes} = require('sequelize');
const sequelize = require('../../db');

const databaseUrl = sequelize.getDatabaseName();
const colonne = sequelize.getDialect();
console.log("Adresse de connexion à la base de données :", databaseUrl, colonne);
const Utilisateur = sequelize.define('Utilisateur',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom:{
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    tableName: 'utilis'
});

module.exports = Utilisateur;