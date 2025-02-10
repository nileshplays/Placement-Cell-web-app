import React, { useState ,useContext} from 'react'
import './StudentLogin.css'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios'
import nit from './nit.png'
import { CEmailContext } from './App';

function Login(){
    const { csetEmail } = useContext(CEmailContext);
    const[values,setValues] = useState({
        email:'',
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
        seterrors(Validation(values));
        if(errors.email==="" && errors.password===""){
            axios.post('http://localhost:8081/login',values)
            .then((res) => {
                if (res.data === 'Success') {
                 csetEmail(values.email);
                  navigate('/companyhome');
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
                    </div>  
                    </div>
                    
        </div>

        <div className='form'>
               
                <div className='loginS'>
                    <div className='loginS1'>Login</div>
                    <div className='loginS2'>
                    <form action="" onSubmit={handleSubmit}>
                        <div >
                            <label htmlFor="email" className='labelS'>Email ID</label>
                            <input type="email" placeholder='Enter Email ID' name='email' onChange={handleInput} className='inputS'/>
                            {errors.email && <span className='danger'> {errors.email}</span>}
                       </div>
                        <div>
                            <label htmlFor="password" className='labelS'>Password</label>
                            <input type="password" placeholder='Enter Password' name='password' onChange={handleInput} className='inputS'/>
                            {errors.password && <span className='danger'> {errors.password}</span>}
                        </div>
                        <button type='submit' className='btnS'>Login</button>
                        <p></p>
                        <Link to ="/Signup" style={{ color: 'black', textAlign:'center' }}  ><p className='btnS1'>Create Account</p></Link>
                    </form></div>
                </div>
            </div>

        
        </div>
    )
}

export default Login