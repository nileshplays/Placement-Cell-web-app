import React, { useEffect, useState, useContext } from 'react'
import './StudentHome.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { EmailContext } from './App';


function AdminHome() {
    const { email } = useContext(EmailContext);
    const [adminData, setAdminData] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8081/adminHome/${email}`)
            .then(response => {
                setAdminData(response.data);
            })
            .catch(error => {
                console.error('Error fetching admin data:', error);
            });
    }, [email]);


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

            <div className='SH4'>
                {/* Display admin data */}
                {adminData ? (
                    <div>
                        <div className='SH'>Profile</div>
                        <div className='SH5'>Name : {adminData.name}</div>
                        <div className='SH5'>Institute ID : {adminData.instituteid}</div>
                        <div className='SH5'>Email: {adminData.email}</div>
                        <div className='SH5'>Mobile Number: {adminData.mobileNumber}</div>


                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>


    );
}

export default AdminHome;