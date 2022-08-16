const express = require('express');
const router = express.Router();
// const studentsValidator = require('../middlewares/studentsValidator')
const studentsController = require('../controllers/studentsController');

router.get('/profileUser', studentsController.loginStudents);
router.get('/login', studentsController.renderLogin);
router.post('/login', studentsController.loginStudents);

module.exports = router;