const router = require('express').Router();
const { Barrowed } = require("../../models");
const sequelize = require('../../config/connection');


router.get('/', (req, res) => {
    Barrowed.findAll()
    .then(dbBarrowedData => res.json(dbBarrowedData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    if (req.session) {
        Barrowed.create({
            user_id: req.session.user_id,
            book_id: req.body.book_id,
        })
        .then(dbBarrowedData => res.json(dbBarrowedData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

router.delete('/:id', (req, res) => {
    Barrowed.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbBarrowedData => {
        if (!dbBarrowedData) {
            res.status(404).json({ message: 'No barrower found with this id' });
            return;
        }
        res.json(dbBarrowedData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
