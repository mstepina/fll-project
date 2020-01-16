const Sequelize = require('sequelize');

module.exports = new Sequelize('fll', 'postgres', '', {
    host: 'localhost',
    dialect: 'postgres',
    port: 54320,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
