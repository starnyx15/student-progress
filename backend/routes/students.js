const express = require('express');
const Student = require('../models/Student');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const student = req.body;

    const newStudent = new Student(student);

    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

module.exports = router;
