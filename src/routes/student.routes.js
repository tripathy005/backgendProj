const express = require('express');
const {
    getStudent,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
} = require('../controllers/student.controller');

const errorMiddleware = require('../middleware/error.middleware');
const logger = require('../middleware/logger');
const router = express.Router();

router.get('/students', logger, getStudent, errorMiddleware);
router.get('/students/:id', logger, getStudentById, errorMiddleware);

router.post('/students', logger, errorMiddleware, createStudent);
router.put('/students/:id', logger, errorMiddleware, updateStudent);
router.delete('/students/:id', logger, errorMiddleware, deleteStudent);    

module.exports = router;