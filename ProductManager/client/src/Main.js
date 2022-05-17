import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
export default () => {
    const [message, setMessage ] = useState("loading...")


    useEffect(() => {
        axios.get('http://localhost:8000/api')
        .then(response => {
            setMessage(response.data.message)
        })
    }, [])

    return(
        <div>
            <h2>Message from the backend: {message}</h2>
            <Form/>
        </div>
    )
}


