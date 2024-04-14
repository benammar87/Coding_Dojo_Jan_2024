
import './App.css';
import PersonCard from  './components/PersonCard';

function App() {

  const person1 ={
    firstName : "Doe" ,
    lastName : "Jane",
    age : 45 ,
    hairColor : "black",
}

const person2 ={
  firstName : "Smith" ,
  lastName : "John",
  age : 88 ,
  hairColor : "Brown",
}

const person3 ={
firstName  : "Fillmore" ,
lastName : "Millard",
age : 50 ,
hairColor : "Brown",
}

const person4 ={
firstName  : "Smith" ,
lastName : "Maria",
age : 62 ,
hairColor : "Brown",
}

  return (
    <div className="App">
      <PersonCard person1={person1}  person2={person2} person3={person3} person4={person4}/>
    </div>
  );
}



export default App;
