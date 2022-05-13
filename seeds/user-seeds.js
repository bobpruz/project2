const { User } = require("../models");

const userdata = [
  { name: "Robert", email: "bobRobertpruz@gmail.com", password: "abc123" },
  { name: "Matt", email: "Matt@gmail.com", password: "abc123" },
  { name: "Mario", email: "Mario@gmail.com", password: "abc123" },
  { name: "Devonna", email: "Devonna@gmail.com", password: "abc123" },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
