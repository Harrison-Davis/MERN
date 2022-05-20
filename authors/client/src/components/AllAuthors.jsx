import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../css/AllAuthors.css';

const AllAuthors = (props) => {

    const [ allAuthors, setAllAuthors] = useState([]);
    console.log(allAuthors)
    const navigate = useNavigate();



    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(response => {
            console.log(response.data)
            setAllAuthors(response.data)
        })
        .catch(error => {
            console.log(error)
        });
    },[])
    
    const handleDelete = (id) => {
        console.log("deleting " + id)
        axios.delete(`http://localhost:8000/api/author/delete/${id}`)
            .then(res => {removeFromDom(id)})
            .catch(error => console.log(error));
    }

    const removeFromDom = ( id) => {
        setAllAuthors(allAuthors.filter(author =>  author._id != id))
    }

    const navigateToEdit = (id) => {
        console.log(id);
        navigate(`/author/edit/${id}`);
    }




    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allAuthors.map((author, index) => {
                            return(
                                <tr key={index}>
                                    <td><Link to={'/author/'+author._id}/>{author.name}</td>
                                    <td>
                                        <button onClick={(e)=>navigateToEdit(author._id)}>Edit</button>
                                        <button onClick={(e)=>handleDelete(author._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                                
                            
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}

export default AllAuthors;