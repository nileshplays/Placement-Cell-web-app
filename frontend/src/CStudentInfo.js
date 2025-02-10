import React, { useState, useEffect } from "react";
import './StudentHome.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

function CStudentInfo() {
    const [studentData, setStudentData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8081/cStudentInfo`)
            .then(response => {
                setStudentData(response.data);
            })
            .catch(error => {
                console.error('Error fetching student data:', error);
            });
    }, []);

    return (
        <div>
            <div className='SH1'>
                <div className='SH2'>
                    <Link to="/companyhome" className='SH3'>Profile</Link>
                </div>
                <div className='SH2'>
                    <Link to="/cstudentinfo" className='SH3'>Student</Link>
                </div>
                <div className='SH2'>
                    <Link to="/uploadjob" className='SH3'>Upload Jobs</Link>
                </div>
                <div className='SH2'>
                    <Link to="/uploadedjob" className='SH3'>Uploaded Jobs</Link>
                </div>
                <div className='SH2' >
                    <Link to="/" className='SH3'>Logout</Link></div>
            </div>
            <div className="SHT">
                <table>
                    <thead>
                        <td>Name</td>
                        <td>Roll No.</td>
                        <td>Branch</td>
                        <td>CGPA</td>
                        <td>Email ID</td>
                        <td>Mobile Number</td>
                    </thead>
                    <tbody>
                        {
                            studentData.map((user, index) => {
                                return <tr key={index}>
                                    
                                    <td>{user.name}</td>
                                    <td>{user.rollno}</td>
                                    <td>{user.branch}</td>
                                    <td>{user.cgpa}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobileNumber}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>


        </div>
    )
}
export default CStudentInfo