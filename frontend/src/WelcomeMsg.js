import React from "react";
import './Welcome.css'
import nit from './nit.png'
import { Link } from 'react-router-dom'
function WelcomeMsg(){
    return(
        <div className='wel' >
            <div>
            <div className='imgW'><img src={nit} alt="NIT" className='imageS' /></div>
            </div>
            <div className="wel1">Welcome To NIT uttakhand Placement Cell</div>
            <div className="wel2">Please   
            <Link to ="/StudentLogin" style={{color:'yellowgreen'}} > Login </Link>
             to enter the Placement Cell</div>
        </div>
    )
}

export default WelcomeMsg