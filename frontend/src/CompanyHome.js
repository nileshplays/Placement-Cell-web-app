import React, { useEffect, useState, useContext } from 'react'
import './StudentHome.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { CEmailContext } from './App';

function CompanyHome() {

    const { cemail } = useContext(CEmailContext);
    const [companyData, setCompanyData] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8081/companyHome/${cemail}`)
            .then(response => {
                setCompanyData(response.data);
            })
            .catch(error => {
                console.error('Error fetching company data:', error);
            });
    }, [cemail]);


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

            <div className='SH4'>
                {/* Display company data */}
                {companyData ? (
                    <div>
                        <div className='SH'>Profile</div>
                        <div className='SH5'>Company Name : {companyData.name}</div>
                        <div className='SH5'>Address : {companyData.address}</div>
                        <div className='SH5'>Email: {companyData.email}</div>
                        <div className='SH5'>Contact Number: {companyData.contactNumber}</div>


                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>

    );
}

export default CompanyHome