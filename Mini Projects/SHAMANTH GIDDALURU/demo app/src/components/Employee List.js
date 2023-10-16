/* import React from "react";
export default function EmployeeList (props){
    return (
        <div>
            <h1>
                {props.id}
            </h1>
            <h2>{props.Salary}</h2>
            <h3>{props.name}</h3>
        </div>

    )
} */





import React from 'react';
import Employee from './Employee';

const EmployeeList = () => {
const employees = [
    { id: 1, name: 'Nithish', salary: 100000 },
    { id: 2, name: 'Shamanth', salary: 70000 },
    { id: 3, name: 'Hari Babu', salary: 75000 },
];

return (
    <div className="d-flex justify-content-around">
        {employees.map(employee => (
        <Employee key={employee.id} id={employee.id} name={employee.name} salary={employee.salary} />
    ))}
    </div>
);
};

export default EmployeeList;