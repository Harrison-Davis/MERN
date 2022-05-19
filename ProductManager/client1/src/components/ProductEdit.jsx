import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AllProducts from './AllProducts';

const ProductEdit= (props) => {

    const[title, setTitle] = useState("");
    const[price, setPrice] = useState("");
    const[description, setDescription] = useState("");
    const { id } = useParams();
    const [productId, setProductId] = useState()
    const navigate = useNavigate();




    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/update/${id}`,{
            title,
            price,
            description
        })
        .then(res => 
        console.log(res))
        .catch(err=>console.log(err));
        navigate("/products");

    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(response => {
            setProductId(response.data.user._id)
            // setProduct(response.data.user)})
            setTitle(response.data.user.title)
            setPrice(response.data.user.price)
            setDescription(response.data.user.description)})
        .catch(error => console.error(error));
    }, [id]);
    

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
            <h1>Edit {title}</h1>
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
            <button>Update</button>
        </form>
    )

}

export default ProductEdit;