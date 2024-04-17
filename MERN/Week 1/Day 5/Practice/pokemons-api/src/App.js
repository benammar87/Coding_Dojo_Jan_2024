
import { useState } from 'react';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([])




  const FetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
        return response.json()
      })
      .then((resp) => {
        console.log(resp)
        setPokemon(resp.results)
      })

      .catch(err => {
        console.log(err);
      })



  }


  return (
    <div className="App">
      <button onClick={FetchPokemon}>Fetch Pokemon</button>
      <h5>
          {pokemon.map((poke) => {
            return (
              <li> {poke.name} </li>
            )
          }
          )}
      </h5>

    </div>
  );
}

export default App;
