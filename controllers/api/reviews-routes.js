const router = require('express').Router();
const { Reviews } = require("../../models");
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Reviews.findAll()
    .then(dbReviewsData => res.json(dbReviewsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Reviews.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbReviewsData => {
            if (!dbReviewsData) {
                res.status(404).json({ message: 'No review found with this id' });
                return;
            }
            res.json(dbReviewsData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Reviews.create({
            review: req.body.review,
            user_id: req.session.user_id,
            book_id: req.body.book_id,
            
        })
        .then(dbReviewsData => res.json(dbReviewsData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

router.put('/:id', withAuth, (req, res) => {
    Reviews.update(
        {
            review: req.body.review
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbReviewsData => {
        if (!dbReviewsData) {
            res.status(404).json({ message: 'No review found with this id' });
            return;
        }
        res.json(dbReviewsData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
    Reviews.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbReviewsData => {
        if (!dbReviewsData) {
            res.status(404).json({ message: 'No review found with this id' });
            return
        }
        res.json(dbReviewsData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;