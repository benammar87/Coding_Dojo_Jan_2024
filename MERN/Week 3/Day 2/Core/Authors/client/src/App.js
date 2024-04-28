
import './App.css';
import { Route, Routes } from 'react-router-dom';
import List from './components/List';
import Create from './components/Create';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Routes>
        <Route path='/authors' element={<List/>}/>
        <Route path='/authors/new' element={<Create/>}/>
        <Route path='/authors/:id/edit' element={<Edit/>}/>

      </Routes>
    </div>
  );
}

export default App;
