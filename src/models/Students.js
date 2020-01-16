const Sequelize = require('sequelize');
const db = require('../config/database');

const Students = db.define('students', {
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    biography: {
        type: Sequelize.STRING
    },
    date_of_birth: {
        type: Sequelize.DATE
    },
    email: {
        type: Sequelize.STRING
    },
    competitiveness: {
        type: Sequelize.INTEGER
    },
    group_id: {
        type: Sequelize.INTEGER
    },
    experience: {
        type: Sequelize.INTEGER
    },
    location: {
        type: Sequelize.INTEGER
    }
});

module.exports = Students;