import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

const App = () => {
    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {
        const response = await axios.get('http://localhost:5000/api/students');
        setStudents(response.data);
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <div>
            <h1>Student Progress Tracker</h1>
            <StudentForm fetchStudents={fetchStudents} />
            <StudentList students={students} />
        </div>
    );
};

export default App;
