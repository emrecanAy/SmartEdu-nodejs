const express = require('express');
const coursesController = require('../controllers/coursesController');

const router = express.Router();

router.route('/').post(coursesController.createCourse);
router.route('/').get(coursesController.getAllCourses);
router.route('/:slug').get(coursesController.getCourse);

module.exports = router;