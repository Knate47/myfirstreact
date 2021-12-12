import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Button from "./Button";



const Employee = () =>{

    //function hooks
    const [employees, setEmployee] = useState([]) //initial value

    //hooks
    useEffect(() => {
        refreshEmployeeTable();
    })

    const refreshEmployeeTable = () =>{
        EmployeeService.getEmployees() //promise
        .then(
        response => {
            setEmployee(response.data);
        }
        )
        .catch(
            err => {
                console.log("something went wrong")
            }
        )
    }

    const deleteEmployee = (employeeId) =>{
        EmployeeService.deleteEmployee(employeeId)
        .then(
            response =>{
                console.log("successfully delted employee!")
                refreshEmployeeTable();
            }
        )
        .catch(
            error =>{
                console.error("something went wrong!", error)
            }
        )
    }

    return (
    <div className="p-5 mb-2 bg-light text-dark">
        <div className="container">
            <h3>List of Employees</h3>
            <div>
                <table className="table table-hover table-light table-bordered border-primary">
                    <thead>
                        <tr className="table-warning border-primary">
                            <td>Name</td>
                            <td>Department</td>
                            <td>Location</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        employees.map(
                            employee => (
                                <tr key={employee.employeeId}>
                                <td>{employee.name}</td>
                                <td>{employee.department}</td>
                                <td>{employee.location}</td>
                                <td>
                                    <div className="d-grid gap-2 d-md-flex">
                                        <Link className="btn btn-primary" to={`/edit/${employee.employeeId}`}>Update</Link>
                                        <button className="btn btn-danger" onClick={(e) =>deleteEmployee(employee.employeeId)}>Delete</button>
                                    </div>
                                    
                                </td>
                                </tr>     
                            )
                        )
                    }
                    </tbody>
                    
                </table>
            </div>
        </div>
    </div>
    )
}

export default Employee;