const { Book } = require("../models");

const bookdata = [
  {
    title: "Absalom Absalom!",
    author: "William Faulkner",
    subject: "Southern Gothic",
    quantity: 5,
  },
  {
    title: "After Many a Summer Dies the Swan",
    author: "Aldous Huxley",
    subject: "Philosophical novel",
    quantity: 5,
  },
  {
    title: "Ah Wilderness!",
    author: "Eugene ONeill",
    subject: "Comedy",
    quantity: 5,
  },
  {
    title: "All the Kings Men",
    author: "Robert Penn Warren",
    subject: "Drama",
    quantity: 5,
  },
  {
    title: "Alone on a Wide Wide Sea",
    author: "Michael Morpurgo",
    subject: "Childrens",
    quantity: 5,
  },
  {
    title: "An Acceptable Time",
    author: "Madeleine LEngle",
    subject: "Science fiction",
    quantity: 5,
  },
  {
    title: "Arms and the Man",
    author: "George Bernard Shaw",
    subject: "Comedy",
    quantity: 5,
  },
  {
    title: "As I Lay Dying",
    author: "William Faulkner",
    subject: "Philosophical novel",
    quantity: 5,
  },
  {
    title: "Bloods a Rover",
    author: "James Ellroy",
    subject: "Crime",
    quantity: 5,
  },
  {
    title: "Of Mice and Men",
    author: "John Steinbeck",
    subject: "Classic",
    quantity: 5,
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    subject: "Fantasy",
    quantity: 5,
  },
  {
    title: "The Art of War",
    author: "Sun Tzu",
    subject: "Non-fiction",
    quantity: 5,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    subject: "Classic",
    quantity: 5,
  },
  {
    title: "The Crucible",
    author: "Arthur Miller",
    subject: "History Drama",
    quantity: 5,
  },
  { title: "Dracula", author: "Bram Stoker", subject: "Fantasy", quantity: 5 },
  {
    title: "Great Expectations",
    author: "Charles Dickens",
    subject: "Classic",
    quantity: 5,
  },
];

const seedBooks = () => Book.bulkCreate(bookdata);

module.exports = seedBooks;
