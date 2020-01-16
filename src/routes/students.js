const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Students = require('../models/Students');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


// GET Students list
router.get('/', (req, res) =>
    Students.findAll()
        .then(students => {
            res.send(students);
        })
        .catch(err => console.log(err))
);

// Display add Students form
router.get('/add', (req, res) => res.render('add'));

// Add a Students
router.post('/add', (req, res) => {
    let {title, technologies, budget, description, contact_email} = req.body;
    let errors = [];

    //Validate Fields
    if (!title) {
        errors.push({ text: "Please add a title" });
    }
    if (!technologies) {
        errors.push({ text: "Please add some technologies" });
    }
    if (!budget) {
        errors.push({ text: "Please add a budget" });
    }
    if (!description) {
        errors.push({ text: "Please add a description" });
    }
    if (!contact_email) {
        errors.push({ text: "Please add a contact email" });

    }

    if (errors.length > 0) {
        res.render('add', {
            errors,
            title, technologies, budget, description, contact_email
        });
    } else {
        if (!budget) {
            budget = 'Unknown';
        } else {
            budget = `$${budget}`;
        }

        technologies = technologies.toLowerCase().replace(/, /g, ',')
        // Insert into table
        Students.create({
            title,
            technologies,
            budget,
            description,
            contact_email
        })
            .then(Student => res.redirect('/Students'))
            .catch(err => console.log(err))
        }
});

//search for Students
router.get('/search', (req, res) => {
    let {term} = req.query;

    term = term.toLowerCase();

    Students.findAll({
        where: {
            technologies: {
                [Op.like]: `%${term}%`,         // LIKE '%hat'
            }
        }
    })
        .then(Students => res.render('Students', { Students }))
        .catch(err => console.log(err));
});

module.exports = router;