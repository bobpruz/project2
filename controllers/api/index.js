const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const reviewsRoutes = require('./reviews-routes.js');
const bookRoutes = require('./book-routes.js');
const barrowedRoutes = require('./barrowed-routes.js');

router.use('/users', userRoutes);
router.use('/reviews', reviewsRoutes);
router.use('/books', bookRoutes);
router.use('/barrowed', barrowedRoutes);

module.exports = router;