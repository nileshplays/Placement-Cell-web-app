function SValidation(values){
    let error={}
    const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.rollno=== ""){
        error.rollno="Name should not be empty"
    }
    else
    {   
        error.rollno=""
    }

    if (values.password === ""){
        error.password="Password should not be empty"
    }
    else{
        if(!password_pattern.test(values.password)){
        error.password="Password not in correct format"
        } else {
            error.password=""
        }
    }
    return error;
}

export default SValidation;