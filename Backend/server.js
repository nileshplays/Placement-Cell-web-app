const express = require ("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const port= 8081;

const db =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"placement"
})

db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  });

app.post('/signup',(req,res)=>{
    const sql ="INSERT INTO company(name,address,email,contactNumber,password) VALUES (?)";
    const values =[
        req.body.name,
        req.body.address,
        req.body.email,
        req.body.contactNumber,
        req.body.password
    ]
    db.query(sql, [values], (err, data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/studentsignup',(req,res)=>{
    const sql ="INSERT INTO student(name,rollno,branch,graduationYear,email,cgpa,mobileNumber,password) VALUES (?)";
    const values =[
        req.body.name,
        req.body.rollno,
        req.body.branch,
        req.body.graduationYear,
        req.body.email,
        req.body.cgpa,
        req.body.mobileNumber,
        req.body.password
    ]
    db.query(sql, [values], (err, data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login',(req,res)=>{
    const sql = "SELECT * FROM company WHERE email = ? AND password = ?"; 
    db.query(sql, [req.body.email,req.body.password], (err, data)=>{
        if(err){
            return res.json("Error");
        }
        if(data.length>0){
            return res.json("Success");
        }else {
            return res.json("Failed");
        }
    })
})
app.post('/studentlogin',(req,res)=>{
    const sql = "SELECT * FROM student WHERE rollno = ? AND password = ?"; 
    db.query(sql, [req.body.rollno,req.body.password], (err, data)=>{
        if(err){
            return res.json("Error");
        }
        if(data.length>0){
            return res.json("Success");
        }else {
            return res.json("Failed");
        }
    })
})



app.post('/adminlogin',(req,res)=>{
    const sql = "SELECT * FROM admin WHERE  email = ? AND password = ?"; 
    db.query(sql, [req.body.email,req.body.password], (err, data)=>{
        if(err){
            return res.json("Error");
        }
        if(data.length>0){
            return res.json("Success");
        }else {
            return res.json("Failed");
        }
    })
})
app.post('/adminsignup',(req,res)=>{
    const sql ="INSERT INTO admin(name,instituteid,email,mobileNumber,password) VALUES (?)";
    const values =[
        req.body.name,
        req.body.instituteid,
        req.body.email,
        req.body.mobileNumber,
        req.body.password
    ]
    db.query(sql, [values], (err, data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})


app.get('/cStudentInfo',(req,res)=>{
    const sql = "SELECT * FROM student ";
    db.query(sql,(err, data)=>{
        if(err){
            return res.json(err);
        }else{
            return res.json(data); 
        }
       
    })
})
app.get('/company',(req,res)=>{
  const sql = "SELECT * FROM company ";
  db.query(sql,(err, data)=>{
      if(err){
          return res.json(err);
      }else{
          return res.json(data); 
      }
     
  })
})
app.get('/admin',(req,res)=>{
  const sql = "SELECT * FROM admin ";
  db.query(sql,(err, data)=>{
      if(err){
          return res.json(err);
      }else{
          return res.json(data); 
      }
     
  })
})


// Fetch student data endpoint
app.get('/studentHome/:rollno', (req, res) => {
    const { rollno } = req.params;
  
    // Query to fetch student data based on roll number
    const query = 'SELECT * FROM student WHERE rollno = ?';
  
    db.query(query, [rollno], (error, results) => {
      if (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Internal Server Error');
      } else {
        if (results.length > 0) {
          // Send the student data as JSON
          res.status(200).json(results[0]);
        } else {
          res.status(404).send('Student not found');
        }
      }
    });
  });

  app.get('/adminHome/:email', (req, res) => {
    const { email } = req.params;
  
    // Query to fetch admin data based on email
    const query = 'SELECT * FROM admin WHERE email = ?';
  
    db.query(query, [email], (error, results) => {
      if (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Internal Server Error');
      } else {
        if (results.length > 0) {
          // Send the admin data as JSON
          res.status(200).json(results[0]);
        } else {
          res.status(404).send('Admin not found');
        }
      }
    });
  });
  

  // Fetch COMPANY data endpoint
app.get('/companyHome/:cemail', (req, res) => {
    const { cemail } = req.params;
  
    // Query to fetch company data based on email
    const query = 'SELECT * FROM company WHERE email = ?';
  
    db.query(query, [cemail], (error, results) => {
      if (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Internal Server Error');
      } else {
        if (results.length > 0) {
          // Send the company data as JSON
          res.status(200).json(results[0]);
        } else {
          res.status(404).send('Company not found');
        }
      }
    });
  });

  app.post('/uploadJob/:cemail',(req,res)=>{
    const { cemail } = req.params;
    const sql ="INSERT INTO job(designation,description,cgpa,salary,date,email) VALUES (?)";
    const values =[
        req.body.designation,
        req.body.description,
        req.body.cgpa,
        req.body.salary,
        req.body.date,
        cemail
        
    ]
    db.query(sql, [values], (err, data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.get('/uploadedJob/:cemail',(req,res)=>{
  const { cemail } = req.params;
  const sql = 'SELECT * FROM job WHERE email = ?';
  db.query(sql,[cemail],(err, data)=>{
      if(err){
          return res.json(err);
      }else{
          return res.json(data); 
      }
     
  })
})

app.get('/opening',(req,res)=>{
  const sql = "SELECT company.name, job.designation, job.description, job.cgpa, job.salary, job.date FROM job LEFT OUTER JOIN company ON job.email=company.email";
  db.query(sql,(err, data)=>{
      if(err){
          return res.json(err);
      }else{
          return res.json(data); 
      }
     
  })
})
  // ... (remaining code)
  
// Close MySQL connection on process exit
process.on('exit', () => {
    connection.end();
    console.log('MySQL connection closed');
  });

app.listen(port,()=>{
    console.log("listening");
})