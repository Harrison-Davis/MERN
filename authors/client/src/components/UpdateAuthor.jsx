import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateAuthor= (props) => {

    const[name, setName] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();




    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/update/${id}`,{name})
        .then(res => 
        console.log(res))
        .catch(err=>console.log(err));
        navigate("/authors");
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then(response => {
            setName(response.data.name)})
        .catch(error => console.error(error));
    }, [id]);
    


    return(
        
        <form onSubmit={ handleSubmit }>
            <h1>Edit {name}</h1>
            <div>
                <label>Product Title: </label>
                <input type="text" onChange={ (e) => setName(e.target.value)} value={name} />
            </div>
            <button>Update</button>
        </form>
    )

}

export default UpdateAuthor;