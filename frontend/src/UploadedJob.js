import React, { useState, useContext,useEffect } from "react";
import './StudentHome.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { CEmailContext } from './App';

function UploadedJob(){
    const { cemail } = useContext(CEmailContext);
    const [jobData, setJobData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8081/uploadedJob/${cemail}`)
            .then(response => {
                setJobData(response.data);
            })
            .catch(error => {
                console.error('Error fetching jobs data:', error);
            });
    }, [cemail]);
    return(
        <div>
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
                        <td>Designation</td>
                        <td>Description</td>
                        <td>CGPA Required</td>
                        <td>Salary Package</td>
                        <td>Last Date For Applying</td>
                    </thead>
                    <tbody>
                        {
                            jobData.map((user, index) => {
                                return <tr key={index}>
                                    <td>{user.designation}</td>
                                    <td>{user.description}</td>
                                    <td>{user.cgpa}</td>
                                    <td>{user.salary}</td>
                                    <td>{new Date(user.date).toLocaleDateString()}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}
export default UploadedJob