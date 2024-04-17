
import { useState } from 'react';
import './App.css';
import axios from "axios"

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

  const AxiosPoke =()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then((resp)=>{
      console.log(resp)
      setPokemon(resp.data.results)
    }).catch((err)=>{
      console.log(err)
    })
  }


  return (
    <div className="App">
      <button onClick={FetchPokemon}>Fetch Pokemon</button>
      <button onClick={AxiosPoke}> Fetch Pokemon with Axios</button>
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
