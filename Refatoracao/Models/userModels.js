const Sequelize = require('sequelize');

const database = require('../Repository/db');

const Usuario = database.define('Usuario', {
    Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_criacao: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    tableName: 'Usuario', 
    timestamps: false     
});

module.exports = Usuario;
