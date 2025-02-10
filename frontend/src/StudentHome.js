import React, { useEffect, useContext, useState } from 'react';
import './StudentHome.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { RollNoContext } from './App';

function StudentHome() {
  const { rollNo } = useContext(RollNoContext);
  const [studentData, setStudentData] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:8081/studentHome/${rollNo}`)
      .then(response => {
        setStudentData(response.data);
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
      });
  }, [rollNo]);

  return (
    <div className='S' >
      <div className='SH1'>
                <div className='SH2'>
                    <Link to="/studenthome" className='SH3'>Profile</Link>
                </div>

                <div className='SH2'>
                    <Link to="/opening" className='SH3'>Openings</Link>
                </div>

                <div className='SH2'>
                    <Link to="/" className='SH3'>Logout</Link>
                </div>
            </div>

      <div className='SH4'>
        {/* Display student data */}
        {studentData ? (
          <div>
            <div className='SH'>Profile</div>
            <div className='SH5'>Name : {studentData.name}</div>
            <div className='SH5'>Roll No. : {studentData.rollno}</div>
            <div className='SH5'>Branch : {studentData.branch}</div>
            <div className='SH5'>CGPA: {studentData.cgpa}</div>
            <div className='SH5'>Graduation Year: {studentData.graduationYear}</div>
            <div className='SH5'>Email: {studentData.email}</div>
            <div className='SH5'>Mobile Number: {studentData.mobileNumber}</div>


          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default StudentHome;
