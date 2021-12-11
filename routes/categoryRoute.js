const express = require('express');
const categoryController = require('../controllers/categoriesController');

const router = express.Router();

router.route('/').post(categoryController.createCategory);
router.route('/:id').put();
router.route('/:id').delete(categoryController.deleteCategory);

module.exports = router;