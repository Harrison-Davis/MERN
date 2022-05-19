import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';



const AllProducts =(props) => {

    const navigate = useNavigate();

    const removeFromDom = ( id) => {
        props.setAllProducts(props.allProducts.filter(product => product._id != id))
    }


    const navigateToEdit = (id) => {
        console.log(id);
        navigate(`/product/edit/${id}`);
    }

        const handleDelete = (id) => {
            console.log("deleting " + id)
            axios.delete(`http://localhost:8000/api/product/delete/${id}`)
                .then(res => {removeFromDom(id)})
                .catch(error => console.log(error));
        }

    return(
        <div>
            <h1>All Products</h1>
            {/* <p>{JSON.stringify(props.allProducts)}</p> */}
            {
                props.allProducts.map((product, index) => {
                    return(
                        <div key={index}>
                            <span><Link to={'/product/' + product._id}>{product.title}</Link></span>
                            <button onClick={(e)=>navigateToEdit(product._id)}>Edit</button>
                            <button onClick={(e)=> handleDelete(product._id)}>Delete</button>
                        </div>
                    )
                })}
        </div>
    )
}
export default AllProducts;