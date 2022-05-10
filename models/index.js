const User = require('./User');
const Barrowed = require('./Barrowed');
const Books = require('./Books');
const Reviews = require('./Reviews');
const Book = require('./Books');

// associations for barrowed
User.hasMany(Barrowed, {
    foreignKey: 'user_id'
});

Barrowed.belongsTo(User, {
    foreignKey: 'user_id'
});

Book.hasMany(Barrowed, {
    foreignKey: 'book_id'
});

Barrowed.belongsTo(Book, {
    foreignKey: 'book_id'
});

// associations for reviews
User.hasMany(Reviews, {
    foreignKey: 'user_id'
});

Reviews.belongsTo(User, {
    foreignKey: 'user_id'
});

Book.hasMany(Reviews, {
    foreignKey: 'book_id'
});

Reviews.belongsTo(Book, {
    foreignKey: 'book_id'
});

module.exports = { User, Barrowed, Books, Reviews };