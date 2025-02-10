import React, {useState} from 'react'
import './StudentSignup.css';
import { Link, useNavigate } from 'react-router-dom'
import StudentSignValidation from './StudentSignValidation'
import axios from 'axios'
import nit from './nit.png'

function StudentSignup(){

    const[values,setValues] = useState({
        name:'',
        rollno:'',
        branch:'',
        graduationYear:'',
        email:'',
        cgpa:'',
        mobileNumber:'',
        password:''
    })
    const navigate = useNavigate();
    const[errors,seterrors] = useState({
        
    })
    const handleInput=(event)=>{
        setValues(prev=> ({...prev,[event.target.name]: [event.target.value]}))
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        seterrors(StudentSignValidation(values));
        if(errors.name==="" && errors.rollno==="" && errors.branch==="" && errors.graduationYear==="" && errors.email==="" && errors.cgpa==="" && errors.mobileNumber==="" && errors.password===""){
            axios.post('http://localhost:8081/studentsignup',values)
            .then(res=>{
                navigate('/WelcomeMsg');
            })
            .catch(err=>console.log(err));
        }

    }

    return (
        <div>
            <div> 
                <div className='logoSl'>
                            <div className='imgl'><img src={nit} alt="NIT" className='imageSl' /></div>
                        <div className='txtl'>
                            
                            Enter Your Institute Roll No. and Institute Email ID
                        </div>  
                    </div>
                        
            </div>
        <div className='forml'>
            <div className='loginSl'>
                <div className='loginS1l'>Signup</div>
                <div className='loginS2l'>
                <form action="" onSubmit={handleSubmit}>
                    <div >
                        <label htmlFor="name" className='labelSl'>Name</label>
                        <input type="text" placeholder='Enter Name' name='name' onChange={handleInput} className='inputSl'/>
                        {errors.name && <span className='dangerl' style={{color:'red'}}> {errors.name}</span>}
                    </div>

                    <div>
                        <label htmlFor="rollno" className='labelSl'>Roll No.</label>
                        <input type="text" placeholder='Enter Roll No.' name='rollno' onChange={handleInput} className='inputSl'/>
                        {errors.rollno && <span className='dangerl' style={{color:'red'}}> {errors.rollno}</span>}
                    </div>

                    <div>
                        <label htmlFor="branch" className='labelSl'>Branch</label>
                        <input type="text" placeholder='Enter Branch(CSE,MEC,ECE etc.)' name='branch' onChange={handleInput} className='inputSl'/>
                        {errors.branch && <span classname='dangerl' style={{color:'red'}}> {errors.branch}</span>}
                    </div>

                    <div>
                        <label htmlFor="graduationYear" className='labelSl'>Graduation Year</label>
                        <input type="number" min="2023" max="2028"  placeholder='Enter Graduation Year' name='graduationYear' onChange={handleInput} className='inputSl'/>
                        {errors.graduationYear && <span classname='dangerl' style={{color:'red'}}> {errors.graduationYear}</span>}
                    </div>

                    <div>
                        <label htmlFor="email" className='labelSl'>Email</label>
                        <input type="email" placeholder='Enter Email' name='email' onChange={handleInput} className='inputSl'/>
                        {errors.email && <span className='dangerl' style={{color:'red'}}> {errors.email}</span>}
                    </div>

                    <div>
                        <label htmlFor="cgpa" className='labelSl'>CGPA     </label>
                        <input type="number" min="0" max="10" step="any" placeholder='Enter CGPA' name='cgpa' onChange={handleInput} className='inputSl'/>
                        {errors.cgpa && <span classname='dangerl' style={{color:'red'}}> {errors.cgpa}</span>}
                    </div>
                    
                    <div>
                        <label htmlFor="mobileNumber" className='labelSl'>Mobile Number</label>
                        <input type="tel" placeholder='Enter Mobile Number' name='mobileNumber' onChange={handleInput} className='inputSl'/>
                        {errors.mobileNumber && <span classname='dangerl' style={{color:'red'}}> {errors.mobileNumber}</span>}
                    </div>

                    <div>
                        <label htmlFor="password" className='labelSl'>Password</label>
                        <input type="password" placeholder='Enter Password' name='password' onChange={handleInput} className='inputSl'/>
                        {errors.password && <span className='dangerl' style={{color:'red'}}> {errors.password}</span>}
                    </div>

                    <button type='submit' className='btnSl'>Signup</button>
                    <p></p>
                    <Link to ="/StudentLogin" style={{ color: 'black', textAlign:'center' }}><p className='btnS1l'>Login</p></Link>
                </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default StudentSignup