const express = require('express');

const coursesController = require('../controllers/coursesController');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

router
  .route('/')
  .post(roleMiddleware(['teacher', 'admin']), coursesController.createCourse);
router.route('/').get(coursesController.getAllCourses);
router.route('/:slug').get(coursesController.getCourse);
router.route('/enroll').post(coursesController.enrollCourse);
router.route('/release').post(coursesController.releaseCourse);

module.exports = router;
