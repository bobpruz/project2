const router = require("express").Router();
const res = require("express/lib/response");
const sequelize = require("../config/connection");
const { Book, User, Reviews, Barrowed } = require("../models");

router.get("/", (req, res) => {
  Book.findAll({
    attributes: ["id", "title", "author", "subject", "quantity"],
  })
    .then((bookData) => {
      const book = bookData.map((book) => book.get({ plain: true }));

      res.render("homepage", {
        book,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
