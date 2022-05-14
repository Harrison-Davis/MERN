import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {

    const[searchInput, setSearchInput] = useState("people");
    const [id, setId] = useState("");
    const navigate = useNavigate();


    // useEffect(() => {
    //     // const getResults = () => {
    //         axios.get(`https://swapi.dev/api/${searchInput}/${id}`)
    //         .then(response => {
    //             console.log(response.data)
    //             setSearchInput(response.data)
    //         }).catch(error => {
    //             console.log(error)
    //         })
    //     // }
    // }, [searchInput, id])    



    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(searchInput)
        console.log(id)
        navigate(`/${searchInput}/${id}`)
        // navigate("/person/"+id)
        // navigate("/starships/"+id)
        // getResults();
    }
    
    


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Search For:</label>
                <select onChange={(event) => setSearchInput(event.target.value)} defaultValue={"people"}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                </select>
                <label>ID: </label>
                <input type="number" value={id} onChange={(event) => setId(event.target.value)}/>
                <button>Search</button>
            </form>
        </div>
    )
}

export default Form;