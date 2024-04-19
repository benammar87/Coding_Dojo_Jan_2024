
import './App.css';
import { Routes , Route, useNavigate } from 'react-router-dom';
import People from './components/People';
import Planets from './components/Planets';
import { useState } from 'react';


function App() {
  const [number, setNumber] = useState()
  const [option,setOption] = useState()
  const nav = useNavigate()

  const GetForm = (e)=> {
    e.preventDefault()
    nav("/"+option+"/"+number)
  }
  return (
    <div className="App">
      <nav >
        <form onSubmit={GetForm}>
        <label htmlFor="">Search for :</label>
        <select  onChange={(e)=>{setOption(e.target.value)}} >
          <option value=""></option>
        <option >people</option>
        <option >planets</option>
        </select>
        <label htmlFor="">ID :</label>
        <input type="number" onChange={(e)=>{setNumber(e.target.value)}} />
        <button class="btn btn-primary">Search</button>
        </form>
      </nav>
      <Routes>
        <Route path="/:option/:id" element= {<><People/><Planets/></>} />
        <Route path="/:option/:id" element= {<Planets/>} />
      </Routes>
    </div>
  );
}

export default App;
