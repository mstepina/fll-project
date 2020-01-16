const Sequelize = require('sequelize');
const db = require('../config/database');

const Groups = db.define('groups', {
    name: {
        type: Sequelize.STRING
    },
    location: {
        type: Sequelize.STRING
    },
    avg_competitiveness: {
        type: Sequelize.DATE
    },
    experience: {
        type: Sequelize.INTEGER
    },
});

module.exports = Groups;