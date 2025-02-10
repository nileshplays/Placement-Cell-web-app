import React, { useState, useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RollNoContext } from './App';
import './StudentLogin.css'
import SValidation from './SLoginValidation'
import nit from './nit.png'

function StudentLogin() {
  const { setRollNo } = useContext(RollNoContext);
  const [values, setValues] = useState({
    rollno: '',
    password: '',
  });
  const navigate = useNavigate();
 const[errors,seterrors] = useState({
        
  })
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    seterrors(SValidation(values));
    if(errors.rollno==="" && errors.password===""){
    axios.post('http://localhost:8081/studentlogin', values)
      .then((res) => {
        if (res.data === 'Success') {
          setRollNo(values.rollno);
          navigate('/studenthome');
        } else {
          alert('Invalid credentials');
        }
      })
      .catch((err) => console.log(err));
  }
};

  return (
    <div>
            <div> 
            <div className='logoS'>
                        <div className='img'><img src={nit} alt="NIT" className='imageS' /></div>
                      <div className='txt'>
                        Enter Your Institute Roll No.
                    </div>  
                    </div>
                    
            </div>
        
            <div className='form'>
               
                <div className='loginS'>
                    <div className='loginS1'>Login</div>
                    <div className='loginS2'>
                    <form action="" onSubmit={handleSubmit}>
                        <div >
                            <label htmlFor="rollno" className='labelS'>Roll No.</label>
                            <input type="rollno" placeholder='Enter Roll No.' name='rollno' onChange={handleInput} value={values.rollno} className='inputS'/>
                            {errors.rollno && <span className='danger'> {errors.rollno}</span>}
                       </div>
                        <div>
                            <label htmlFor="password" className='labelS'>Password</label>
                            <input type="password" placeholder='Enter Password' name='password' onChange={handleInput} value={values.password} className='inputS'/>
                            {errors.password && <span className='danger'> {errors.password}</span>}
                        </div>
                        <button type='submit' className='btnS'>Login</button>
                        <p></p>
                        <Link to ="/StudentSignup" style={{ color: 'black', textAlign:'center' }}  ><p className='btnS1'>Create Account</p></Link>
                    </form></div>
                </div>
            </div>
        </div>

  );
}

export default StudentLogin;
