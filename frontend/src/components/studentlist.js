import React from 'react';

const StudentList = ({ students }) => {
    return (
        <div>
            {students.map((student) => (
                <div key={student._id}>
                    <h2>{student.name}</h2>
                    <p>Grade: {student.grade}</p>
                    <p>Progress: {student.progress}</p>
                </div>
            ))}
        </div>
    );
};

export default StudentList;
