import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './Form';
import AllProducts from './AllProducts';
import ProductDetails from './ProductDetails';
import ProductEdit from './ProductEdit';
import { Route, Routes, Switch} from 'react-router-dom';

const Main = () => {
    // const [message, setMessage ] = useState("loading...")


    // useEffect(() => {
    //     axios.get('http://localhost:8000/api')
    //     .then(response => {
    //         setMessage(response.data.message)
    //     })
    // }, [])

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(response => {
            console.log(response.data.products)
            setAllProducts(response.data.products)
        })
        .catch(error => {
            console.log(error)
        });
    },[])

    const addProduct = (newProduct) => {
        setAllProducts([...allProducts, newProduct])
    }

    return(
        <div>
            <h1>Product Manager</h1>
            
            

            <Routes>
                
                

                <Route path="/products" element={<><Form addProduct={addProduct} />
                                                    <AllProducts allProducts={allProducts} addProduct={addProduct} setAllProducts={setAllProducts} /></>}/>
                <Route path="/product/:id" element={<ProductDetails/>}/>
                <Route path="/product/edit/:id" element={<ProductEdit/>}/>
            </Routes>


        </div>
    )
}


export default Main;