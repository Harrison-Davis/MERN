import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';


const Starship = (props) => {

    const {id} = useParams();
    const [starship, setStarship] = useState({});
    console.log(starship)
    console.log(id)


    useEffect(() =>{
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then(response =>{
                setStarship(response.data)})
                .catch(error => {
                    console.log(error)});
    }, [id])

    return(
        <div>
            {
                starship ? (
                    <div>
                        <h1>{starship.name}</h1> 
                        <h4>Crew: {starship.crew}</h4>
                        <h4>Consumables: {starship.consumables}</h4>
                        <h4>Model: {starship.model}</h4>
                        <h4>Max Speed: {starship.max_atmosphering_speed}</h4>
                    </div>
                ) : <div><h1>Loading...</h1></div>
            }
        
        </div>
    )
}

export default Starship;