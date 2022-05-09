import './App.css';
import Form from './components/Form'

const addUser = ( ) => {
    console.log("this is a function inside app.js");
}

function App() {
  return (
    <div className="App">
      <fieldset>
        <Form addUser={addUser}/>
      </fieldset>
    </div>
  );
}

export default App;
