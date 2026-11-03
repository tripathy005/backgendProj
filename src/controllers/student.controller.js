const Student = require('../models/student.model');

// Get all students
// GET /api/students
const getStudent = async (req, res, next) => {
    try {
        const students = await Student.find();
        res.status(200).json({
            success: true,
            message: "Students retrieved successfully",
            data: students
        });
    }
    catch (error) {
        next(error);
    }
};

// Get students by ID
// GET /api/students/:id
const getStudentById = async (req, res, next) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Student found successfully",
            data: student
        });
    } catch (error) {
        next(error);
    }
};  

// create a new student
// POST /api/students
const createStudent = async (req, res, next) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json({
            success: true,
            message: "Student created successfully",
            data: student
        });
    }
    catch (error) {
        next(error);
    }
};

// update a student by ID
// PUT /api/students/:id
const updateStudent = async (req, res, next) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Student updated successfully",
            data: student
        });
    }
    catch (error) {
        next(error);
    }
};

// delete a student by ID
// DELETE /api/students/:id
const deleteStudent = async (req, res, next) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Student deleted successfully"
        });
    }
    catch (error) {
        next(error);
    }
};

module.exports = {
    getStudent,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};

