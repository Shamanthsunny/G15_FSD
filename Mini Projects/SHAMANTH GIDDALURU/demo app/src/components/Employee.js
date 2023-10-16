/* import React from "react";
import EmployeeList from "./Employee List";

export default function Employee(){

    let id = 1
    const Name = "Sunny"
    const Salary = "25 Lakh"



        return(
            <EmployeeList id ={id}
            name = {Name}
            Salary ={Salary}/>
        )
} */

/* import React from 'react';

const Employee = ({ id, name, salary }) => {
return (
    <div>
        <p>ID: {id}</p>
        <p>Name: {name}</p>
        <p>Salary: {salary}</p>
    </div>
);
};

export default Employee; */

import React from 'react';

const Employee = ({ id, name, salary }) => {
return (
    <div className="card">
    <div className="card-body">
        <h5 className="card-title">Employee Details</h5>
        <p className="card-text">ID: {id}</p>
        <p className="card-text">Name: {name}</p>
        <p className="card-text">Salary: {salary}</p>
    </div>
    </div>
);
};

export default Employee;

