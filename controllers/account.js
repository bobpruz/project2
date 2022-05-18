const router = require("express").Router();
const res = require("express/lib/response");
const sequelize = require("../config/connection");
const { Book, User, Barrowed } = require("../models");

router.get("/:name", (req, res) => {
  User.findAll({
    where: {
      name: req.params.name,
    },
    attributes: ["id", "name"],
    include: [
      {
        model: Barrowed,
        attributes: ["id", "book_id", "user_id"],
        include: {
          model: Book,
          attributes: ["id", "title", "author"],
        },
      },
    ],
  })
    .then((bookData) => {
      const book = bookData.map((book) => book.get({ plain: true }));

      res.render("account", {
        book,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
