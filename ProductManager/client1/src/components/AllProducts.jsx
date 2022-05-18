import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


const AllProducts =(props) => {



    return(
        <div>
            <h1>All Products</h1>
            {/* <p>{JSON.stringify(props.allProducts)}</p> */}
            {
                props.allProducts.map((product, index) => {
                    return(
                        <div key={index}>
                            <span><Link to={'/product/' + product._id}>{product.title}</Link></span> 
                        </div>
                    )
                })}
        </div>
    )
}
export default AllProducts;