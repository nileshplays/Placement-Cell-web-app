import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Signup from './Signup';
import StudentHome from './StudentHome';
import Home from './Home';
import StudentLogin from './StudentLogin';
import StudentSignup from './StudentSignup';
import CompanyHome from './CompanyHome';
import AdminHome from './AdminHome';
import AdminLogin from './AdminLogin';
import AdminSignup from './AdminSignup';
import './App.css'
import WelcomeMsg from './WelcomeMsg';
import WelcomeMsgA from './WelcomeMsgA';
import WelcomeMsgC from './WelcomeMsgC';
import CStudentInfo from './CStudentInfo';
import UploadJob from './UploadJob';
import UploadedJob from './UploadedJob';
import Opening from './Opening';
import AOpening from './AOpening';
import Admin from './Admin';
import Student from './Student';
import Company from './company';
import AddStudent from './AddStudent';
import AddAdmin from './AddAdmin';
import AddCompany from './AddCompany';


// Create RollNoContext
export const RollNoContext = createContext();
// Create EmailContext
export const EmailContext = createContext();
// Create CompanyEmailContext
export const CEmailContext = createContext();

function App() {
  const [rollNo, setRollNo] = useState('');
  const [email, setEmail] = useState('');
  const [cemail, csetEmail] = useState('');

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addstudent' element={<AddStudent />} />
        <Route path='/addadmin' element={<AddAdmin />} />
        <Route path='/addcompany' element={<AddCompany />} />
      
        {/* Wrap only StudentLogin and StudentSignup with RollNoContext.Provider */}
        <Route
          path='/studentlogin'
          element={
            <RollNoContext.Provider value={{ rollNo, setRollNo }}>
              <StudentLogin />
            </RollNoContext.Provider>
          }
        />
        <Route
          path='/studenthome'
          element={
            <RollNoContext.Provider value={{ rollNo, setRollNo }}>
              <StudentHome />
            </RollNoContext.Provider>
          }
        />
        <Route
          path='/studentsignup'
          element={
            <RollNoContext.Provider value={{ rollNo, setRollNo }}>
              <StudentSignup />
            </RollNoContext.Provider>
          }
        />
          <Route
          path='/opening'
          element={
            <RollNoContext.Provider value={{ rollNo, setRollNo }}>
              <Opening />
            </RollNoContext.Provider>
          }
        />
        {/* Wrap only AdminLogin and AdminSignup with EmailContext.Provider */}
        <Route
          path='/adminlogin'
          element={
            <EmailContext.Provider value={{ email, setEmail }}>
              <AdminLogin />
            </EmailContext.Provider>
          }
        />
          <Route
          path='/adminsignup'
          element={
            <EmailContext.Provider value={{ email, setEmail }}>
              <AdminSignup />
            </EmailContext.Provider>
          }
        />
          <Route
          path='/adminhome'
          element={
            <EmailContext.Provider value={{ email, setEmail }}>
              <AdminHome />
            </EmailContext.Provider>
          }
        />
        <Route
          path='/admin'
          element={
            <EmailContext.Provider value={{ email, setEmail }}>
              <Admin />
            </EmailContext.Provider>
          }
        />
        <Route
          path='/student'
          element={
            <EmailContext.Provider value={{ email, setEmail }}>
              <Student/>
            </EmailContext.Provider>
          }
        />
        <Route
          path='/company'
          element={
            <EmailContext.Provider value={{ email, setEmail }}>
              <Company/>
            </EmailContext.Provider>
          }
        />
         <Route
          path='/aopening'
          element={
            <EmailContext.Provider value={{ email, setEmail }}>
              <AOpening />
            </EmailContext.Provider>
          }
        />

        {/* Wrap only CompanyLogin and CompanySignup with CEmailContext.Provider */}
         <Route
          path='/login'
          element={
            <CEmailContext.Provider value={{ cemail, csetEmail }}>
              <Login />
            </CEmailContext.Provider>
          }
        />
        <Route
          path='/companyhome'
          element={
            <CEmailContext.Provider value={{ cemail, csetEmail }}>
              <CompanyHome />
            </CEmailContext.Provider>
          }
        />
        <Route
          path='/signup'
          element={
            <CEmailContext.Provider value={{ cemail, csetEmail }}>
              <Signup />
            </CEmailContext.Provider>
          }
        />
        <Route
          path='/cstudentinfo'
          element={
            <CEmailContext.Provider value={{ cemail, csetEmail }}>
              <CStudentInfo />
            </CEmailContext.Provider>
          }
        />
         <Route
          path='/uploadjob'
          element={
            <CEmailContext.Provider value={{ cemail, csetEmail }}>
              <UploadJob />
            </CEmailContext.Provider>
          }
        />
        <Route
          path='/uploadedjob'
          element={
            <CEmailContext.Provider value={{ cemail, csetEmail }}>
              <UploadedJob />
            </CEmailContext.Provider>
          }
        />


        <Route path='/welcomemsg' element={<WelcomeMsg />} />
        <Route path='/welcomemsga' element={<WelcomeMsgA />} />
        <Route path='/welcomemsgc' element={<WelcomeMsgC />} />
      </Routes>
    </Router>
  );
}

export default App;
