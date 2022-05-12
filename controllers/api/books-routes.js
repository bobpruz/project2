const router = require('express').Router();
const { Book, User, Reviews, Barrowed } = require("../../models");
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
    Book.findAll()
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    if (req.session) {
        Book.create({
            title: req.body.title,
            author: req.body.author,
            subject: req.body.subject,
            quantity: req.session.quantity
        })
        .then(dbBookData => res.json(dbBookData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

router.put('/:id', (req, res) => {
    Book.update(
        {
            quantity: req.body.quantity
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbBookData => {
        if (!dbBookData) {
            res.status(404).json({ message: 'No Book found with this id' });
            return;
        }
        res.json(dbBookData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
    Book.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbBookData => {
        if (!dbBookData) {
            res.status(404).json({ message: 'No Book found with this id' });
            return;
        }
        res.json(dbBookData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;