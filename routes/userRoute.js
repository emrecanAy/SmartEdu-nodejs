const express = require('express');
const { body } = require('express-validator');

const authsController = require('../controllers/authsController');
const authMiddleware = require('../middlewares/authMiddleware');

const User = require('../models/User');

const router = express.Router();

router.route('/sign-up').post(
  [
    body('name').not().isEmpty().withMessage('Please enter your name!'),

    body('email')
      .isEmail()
      .withMessage('Please enter valid email!')
      .custom((userEmail) => {
        return User.findOne({ email: userEmail }).then((user) => {
          if (user) {
            return Promise.reject('Email is already exists!');
          }
        });
      }),

    body('password').not().isEmpty().withMessage('Please enter a password!'),
  ],
  authsController.createUser
);
router.route('/login').post(authsController.loginUser);
router.route('/logout').get(authsController.logoutUser);
router
  .route('/dashboard')
  .get(authMiddleware, authsController.getDashboardPage); //öce uathMiddleware'i kontrol et.

router.route('/:id').delete(authsController.deleteUser);

module.exports = router;
