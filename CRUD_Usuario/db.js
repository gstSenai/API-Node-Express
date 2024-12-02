const Sequelize = require('sequelize');

const componenteSequelize = new Sequelize('dbExpress', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = componenteSequelize; 

