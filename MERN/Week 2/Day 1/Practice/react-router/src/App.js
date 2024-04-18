
import './App.css';
import React from 'react';
import{
  Routes,
  Route,
  Link,
  Form, 
} from "react-router-dom";
import Home from "./Compenents/Home"
import Hello from './Compenents/Hello';
import Color from './Compenents/Color';





function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home/:greet" element={< Home />}/>
        <Route path="/:param" element={< Hello />}/>
        <Route path="/:param/:tcol/:bgcol" element={< Color />}/>
        
      </Routes>
    </div>
  );
}


export default App;