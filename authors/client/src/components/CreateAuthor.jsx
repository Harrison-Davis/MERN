import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


const Form = (props) => {

    const[name, setName] = useState("");

    const navigate = useNavigate();



    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author/create',{
            name
        })
        .then(res => 
        {
            props.addAuthor(res.data)
        })
        .catch(err=>console.log(err));
        navigate("/authors")
    }


    return(
        <form onSubmit={ handleSubmit }>
            <div>
                <label>Name: </label>
                <input type="text" onChange={ (e) => setName(e.target.value)} value={name} />
            </div>
            <button>Add</button>
        </form>
    )

}

export default Form;