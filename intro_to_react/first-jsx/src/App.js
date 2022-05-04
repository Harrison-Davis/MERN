import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';




const person1 = {
  firstName: "Jane",
  lastName: "Doe",
  age: "88",
  hairColor: "Black"
}


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <PersonCard firstName="Jane" lastName="Doe" age="45" hairColor="Black"/>
      <PersonCard firstName="John" lastName="Smith" age="88" hairColor="Brown"/>
      <PersonCard firstName="Fillmore" lastName="Millard" age="50" hairColor="Brown"/>
      <PersonCard firstName="Maria" lastName="Smith" age="62" hairColor="Brown"/>


    </div>
  );
}

export default App;





