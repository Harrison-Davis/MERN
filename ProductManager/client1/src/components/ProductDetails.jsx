import React, {useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const ProductDetails = (props) => {

    const [ product, setProduct] = useState({});
    const { id } = useParams();
    const [hasData, setHasData] = useState(false)
    console.log(product);
    console.log(hasData)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(response => {
            setProduct(response.data.user)
            setHasData(true)})
        .catch(error => console.error(error));
    }, [id]);
    

    const showDetails = () => {
        if( hasData === true){
            return (
                <div>   
                    <p>Title: {product.title}</p>
                    <p>Price: {product.price}</p>
                    <p>Description: {product.description}</p>
                </div>
            )
        }else{
            return(
                <div>
                    <p>No Details</p>
                </div>
            )
        }
    }


    return(
        <div>
            { showDetails() }
        </div>
    )


}
export default ProductDetails;