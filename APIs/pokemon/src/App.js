import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {


    const [ pokemon, setPokemon] = useState([]);



    const fetchPokemon = () => {
      console.log("clicked")

      fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=808")
        .then( someResponse => {
          return someResponse.json();
        }).then(data => {
          console.log(data.results)
          setPokemon(data.results);
          // return someOtherResponse.json();
        }).catch( someError => console.log(someError))
    }


    



  return (
    <div className="App">
        <h1>Pokemon Api</h1>
        <h4>fetch / Axios / useEffect()</h4>
        <button onClick={fetchPokemon}>Fetch Pokemon</button>
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
