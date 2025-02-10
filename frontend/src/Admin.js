import React, { useState, useEffect } from "react";
import './StudentHome.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Admin(){
    const [adminData, setAdminData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8081/admin`)
            .then(response => {
                setAdminData(response.data);
            })
            .catch(error => {
                console.error('Error fetching admin data:', error);
            });
    }, []);

    return (
        <div>
            <div className='SH1'>
                <div className='SH2'>
                    <Link to="/adminhome" className='SH3'>Profile</Link>
                </div>
                <div className='SH2'>
                    <Link to="/student" className='SH3'>Student</Link></div>
                <div className='SH2'>
                    <Link to="/company" className='SH3'>Companies</Link></div>
                <div className='SH2'>
                    <Link to="/admin" className='SH3'>Admin</Link></div>
                <div className='SH2'>
                    <Link to="/aopening" className='SH3'>Openings</Link></div>
                <div className='SH2' >
                    <Link to="/" className='SH3'>Logout</Link>
                </div>
            </div>
            <div className="SHT">
                <table>
                    <thead>
                        
                        <td>Admin Name</td>
                        <td>Institute ID</td>
                        <td>Email ID</td>
                        <td>Contact Number</td>
                    </thead>
                    <tbody>
                        {
                            adminData.map((user, index) => {
                                return <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.instituteid}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobileNumber}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="newd"><Link to="/addadmin" style={{color:"white"}}className="new" >Add New</Link></div>

            </div>
    )
}

export default Admin