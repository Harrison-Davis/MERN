import axios from 'axios';
import React, {useState, useEffect} from 'react';

const Form = (props) => {

    const[title, setTitle] = useState("");
    const[price, setPrice] = useState("");
    const[description, setDescription] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products',{
            title,
            price,
            description
        })
        .then(res => console.log(res))
        .catch(err=>console.log(err))
    }

    const handleTitle = (title) => {
        setTitle(title);
    }
    const handlePrice = (price) => {
        setPrice(price);
    }
    const handleDescription = (description) => {
        setDescription(description);
    }

    return(
        <form onSubmit={ handleSubmit }>
            <div>
                <label>Product Title: </label>
                <input type="text" onChange={ (e) => handleTitle(e.target.value)} value={title} />
            </div>
            <div>
                <label>Product Price: </label>
                <input type="text" onChange={ (e) => handlePrice(e.target.value)} value={price} />
            </div>
            <div>
                <label>Product Description: </label>
                <input type="text" onChange={ (e) => handleDescription(e.target.value)} value={description} />
            </div>
            <button>Add</button>
        </form>
    )

}

export default Form;