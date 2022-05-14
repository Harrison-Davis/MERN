import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';


const Planet = (props) => {

    const {id} = useParams();
    const [planet, setPlanet] = useState({});
    const [error, setError] = useState(false);

    console.log(planet)
    console.log(id)




    useEffect(() =>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response =>{
                setError(false)
                setPlanet(response.data)})
                .catch(error => {
                    setError(true)
                    console.log(error)});
    }, [id])

    return(
        <div>
            {
                planet ? (
                    <div>
                        <h1>{planet.name}</h1>
                        <h4>Climate: {planet.climate}</h4>
                        <h4>Terrain: {planet.terrain}</h4>
                        <h4>Surface Water: {planet.surface_water}</h4>
                        <h4>Population: {planet.population}</h4>
                    </div>
                ) : <div><h1>Loading...</h1></div>
            }

        </div>
    )
}

export default Planet;