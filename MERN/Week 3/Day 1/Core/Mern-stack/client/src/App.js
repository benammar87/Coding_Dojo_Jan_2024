
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import ShowAll from './components/ShowAll';
import One from './components/One';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Routes>
        <Route path='/' element={<Create />} />
        <Route path='/products' element={<ShowAll />} />
        <Route path='/products/:id' element={<One />} />
        <Route path='/products/:id/edit' element={<Edit/>} />
      </Routes>
    </div>
  );
}

export default App;
