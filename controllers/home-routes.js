const router = require("express").Router();
const res = require("express/lib/response");
const sequelize = require("../config/connection");
const { Book, User, Reviews, Barrowed } = require("../models");

router.get("/", (req, res) => {
  Book.findAll({
    attributes: [
      "id",
      "title",
      "author",
      "subject",
      "quantity",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM barrowed WHERE book.id = barrowed.book_id)"
        ),
        "barrowed_count",
      ],
    ],
  })
    .then((bookData) => {
      const book = bookData.map((book) => book.get({ plain: true }));

      res.render("homepage", {
        book,
        loggedIn: req.session.loggedIn
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('/');
      return;
  }
  
  res.render('login');
});

router.get("/:id", (req, res) => {
  Book.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "author", "subject", "quantity"],
    include: [
      {
        model: Reviews,
        attributes: ["id", "review", "user_id", "book_id", "created_at"],
        include: {
          model: User,
          attributes: ["name"],
        },
      },
    ],
  })
    .then((bookData) => {
      const book = bookData.get({ plain: true });

      res.render("singlebook", {
        book,
        loggedIn: req.session.loggedIn
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
