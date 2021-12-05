const express = require('express');

const authsController = require('../controllers/authsController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/sign-up').post(authsController.createUser); 
router.route('/login').post(authsController.loginUser);
router.route('/logout').get(authsController.logoutUser);
router.route('/dashboard').get(authMiddleware, authsController.getDashboardPage); //öce uathMiddleware'i kontrol et.

module.exports = router;