import React, { useState } from 'react';

const Form = props => {
    const [firstName, setFirstName] = useState("");
    const [ lastName, setLastName] = useState("");
    const [ email, setEmail] = useState("");
    const [ pw, setPw] = useState("");
    const [ confirmPw, setConfirmPw] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [pwError, setPwError] = useState("");

    // const [user, setUser] = useState ({
    //     firstName: "",
    //     lastName: "",
    //     email: "",

    // })

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { 
            firstName, 
            lastName, 
            email,
            pw};
        console.log("Welcome", newUser.firstName);
        setHasBeenSubmitted( true );
        props.addUser();
    };

    const formMessage = () => {
        if( hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        }else{
            return "Welcome, please submit the form";
        }
    };

    const handleFirstName = (fname) => {
        setFirstName(fname);
        if(fname.length < 1) {
            setFirstNameError("First name is required!");
        } else if(fname.length < 2) {
            setFirstNameError("First name must be 2 characters or longer!");
        } else{
            setFirstNameError("");
        }
    }
    const handleLastName = (lname) => {
        setLastName(lname);
        if(lname < 1) {
            setLastNameError("Last name is required!");
        } else if(lname < 2) {
            setLastNameError("Last name must be 2 characters or longer!");
        }else{
            setLastNameError("");
        }
    }
    const handleEmail = (eml) => {
        setEmail(eml);        
        if(eml < 1) {
            setEmailError("Email is required!");
        } else if(eml < 5) {
            setEmailError("Email must be at least 5 characters");
        } else{
            setEmailError("");
        }
    }
    const handlePw = (passw) => {
        setPw(passw);
        if(passw < 8 || confirmPw !== passw) {
            setPwError("Passwords must match and be at least 8 characters");
        } 
        else{
            setPwError("");
        }
    }

    const handleConfirmPw = (confirmPassw) => {
        setConfirmPw(confirmPassw);
        if(confirmPassw < 8 || confirmPassw !== pw){
            setPwError("Passwords must match and be at least 8 characters");
        }
    }

    return(
        <div>
            <form onSubmit = {createUser}>
            {
                hasBeenSubmitted ?
                <h3>Thank you for submitting the form!</h3> :
                <h3>Weclome, please submit the form.</h3>
            }
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange = { (e) => handleFirstName(e.target.value)} value={firstName}/>
                    {
                        firstNameError ?
                        <p style={{color:'red'}}>{firstNameError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange = { (e) => handleLastName(e.target.value)} value={lastName}/>
                    {
                        lastNameError ?
                        <p style={{color: 'red '}}>{lastNameError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" onChange = { (e) => handleEmail(e.target.value)} value={email}/>
                    {
                        emailError ?
                        <p style = {{color: 'red'}}>{emailError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange = { (e) => handlePw(e.target.value)} value={pw}/>
                    {
                        pwError ?
                        <p style ={{color: 'red'}}> {pwError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange = { (e) => handleConfirmPw(e.target.value)} value={confirmPw}/>
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
            <legend> Real Time</legend>
                <div>
                    <p>First Name: {firstName} </p>
                    <p>Last Name:{lastName} </p>
                    <p>Email: {email} </p>
                    <p>Password: {pw} </p>
                </div>
            </div>
        </div>
    );
}

export default Form;