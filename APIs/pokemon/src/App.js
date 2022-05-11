import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {


    const [ pokemon, setPokemon] = useState([]);


// --------------------using fetch----------------------
    const fetchPokemon = () => {
      console.log("clicked")

      fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=808")
        .then( someResponse => {
          return someResponse.json();
        }).then(data => {
          console.log(data.results)
          setPokemon(data.results);
          // return someOtherResponse.json();
        }).catch( someError => console.log(someError))
    }


//  ---------------------using axios---------------------------
  const axiosFetch = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=808")
    .then(response => {
      console.log(response.data.results);
      setPokemon(response.data.results)
    })
    .catch(error => console.log(error))
  }

// //  --------------------useeffect-------------------------------
//   useEffect(() => {
//     axiosFetch()
//   },[]) // dont put state vars that are set inside useeffect. Will create infinite loop



  return (
    <div className="App">
        <h1>Pokemon Api</h1>
        <h4>fetch / Axios / useEffect()</h4>
        <button onClick={fetchPokemon}>Fetch Pokemon</button>
        <button onClick={axiosFetch}>Axios Pokemon</button>
        <hr/>
        <div>
          {/* pokemon: {JSON.stringify(pokemon.name)} */}
          <table>
            <thead>
                <tr>
                  <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {
                pokemon.map((pokemon, index) => {
                  return(
                    <tr key={index}>
                      <td>{pokemon.name}</td>
                    </tr>
                  )
                })
                }
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default App;
