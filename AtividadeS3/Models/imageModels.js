const Sequelize = require('sequelize');
const database = require('../Repository/db');

const Imagem = database.define('tb_imagem', {
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
    },
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false 
    }
}, {
    tableName: 'tb_imagem', 
    timestamps: false     
});

module.exports = Imagem;