import React, { useState } from 'react';

const Form = props => {
    const [firstName, setFirstName] = useState("");
    const [ lastName, setLastName] = useState("");
    const [ email, setEmail] = useState("");
    const [ pw, setPw] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email ,pw};
        console.log("Welcome", newUser);
    };


    return(
        <div>
            <h1>Form</h1>
            <form onSubmit = {createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange = { (e) => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange = { (e) => setLastName(e.target.value)}/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange = { (e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange = { (e) => setPw(e.target.value)}/>
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