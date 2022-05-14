import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';


const People = (props) => {

    const {id} = useParams();
    const [person, setPerson] = useState(null);
    
    console.log(id)
    console.log(person)



    useEffect(() =>{
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response =>{
                setPerson(response.data)})
                .catch(error => {
                    console.log(error)});
    }, [id])

    return(
        <div>
            {
                person ? (
                    <div>
                        <h1>{person.name}</h1>
                        <h4>Height: {person.height}</h4>
                        <h4>Mass: {person.mass}</h4>
                        <h4>Hair Color: {person.hair_color}</h4>
                        <h4>Skin Color: {person.skin_color}</h4>
                    </div>

                ) : <div><h1>Loading...</h1></div>
            }

        </div>
    )
}

export default People;