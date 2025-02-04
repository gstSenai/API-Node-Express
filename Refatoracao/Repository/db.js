const Sequelize = require('sequelize');

const componenteSequelize = new Sequelize('dbsistema', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = componenteSequelize; 

