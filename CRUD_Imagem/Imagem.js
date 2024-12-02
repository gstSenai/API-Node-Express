const Sequelize = require('sequelize');

const database = require('./db');

const Imagem = database.define('Imagem', {
    Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    referencia: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_criacao: {
        type: Sequelize.DATE,
        allowNull: false
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    tableName: 'Imagem', 
    timestamps: false     
});

module.exports = Imagem;
