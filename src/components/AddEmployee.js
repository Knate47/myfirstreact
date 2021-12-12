import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react/cjs/react.development";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () =>{
    const [name,setName] = useState("");
    const [location,setLocation] = useState("");
    const [department,setDepartment] = useState("");
    const navigate = useNavigate(); // hooks
    const {employeeId} = useParams();

    useEffect( // pfft
        () =>{
            if(employeeId){
                EmployeeService.getEmployee(employeeId) //promise
                .then(
                    response =>{
                        setName(response.data.name);
                        setLocation(response.data.location);
                        setDepartment(response.data.department);
                    }
                )
                .catch(
                    error =>{
                        console.error("error!")
                    }
                )
            }
            else{
                console.log("employeeId not existing!")
            }
        },[])

    const saveEmployee = (e) =>{
        e.preventDefault(); //to prevent refresh
        const employee = {employeeId, name, location, department}

        //update employee
        if(employeeId){
                EmployeeService.putEmployee(employee) //promise
            .then(response =>{
                console.log("employee updated!")
                navigate("/employees")
            })
            .catch(errpr =>{
                console.log("something went wrong!")
            })
        }
        else{
                EmployeeService.postEmployee(employee) //promise
            .then(response =>{
                console.log("employee added!")
                navigate("/employees")
            })
            .catch(errpr =>{
                console.log("something went wrong!")
            })
        }
    }

    return (
    <div className="p-5 mb-2 bg-light text-dark">
        <div className="container">
            <h1>
                Add Employee
            </h1>
            <form>
                <div className="mb-3">
                    <label 
                        for="name" //nameField
                        className="form-label">Name
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" //nameField
                        placeholder="Input employee name"
                        onChange={
                            (e) => setName(e.target.value)
                        }
                    />
                </div>
                <div className="mb-3">
                    <label 
                        for="location" //locationField
                        className="form-label">Location
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="location" //locationField
                        placeholder="Input employee location"
                        onChange={
                            (e) => setLocation(e.target.value)
                        }
                    />
                </div>
                <div className="mb-3">
                    <label 
                        for="department" //departmentField
                        className="form-label">Department
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="department" //departmentField
                        placeholder="Input employee department"
                        onChange={
                            (e) => setDepartment(e.target.value)
                        }
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) => saveEmployee(e)}>Save</button>
            </form>
        </div>
    </div>   
    )
}
export default AddEmployee;