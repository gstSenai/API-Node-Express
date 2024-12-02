const Sequelize = require('sequelize');

const componenteSequelize = new Sequelize('dbImagem', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = componenteSequelize; 

