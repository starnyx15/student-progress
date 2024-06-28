import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = ({ fetchStudents }) => {
    const [name, setName] = useState('');
    const [grade, setGrade] = useState('');
    const [progress, setProgress] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/students', { name, grade, progress });
        fetchStudents();
        setName('');
        setGrade('');
        setProgress('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Grade" 
                value={grade} 
                onChange={(e) => setGrade(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Progress" 
                value={progress} 
                onChange={(e) => setProgress(e.target.value)} 
            />
            <button type="submit">Add Student</button>
        </form>
    );
};

export default StudentForm;
