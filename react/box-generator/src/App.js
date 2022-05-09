import './App.css';
import React, {useState} from 'react';
import ColorForm from './components/ColorForm';
import DisplayBoxes from './components/DisplayBoxes';



function App() {

  const [ boxes, setBoxes] = useState(["blue", "red", "green"]);



  const addBox = (newBox) => {
    console.log(newBox);

    const copyBoxes = [...boxes];

    copyBoxes.push(newBox);

    setBoxes( copyBoxes);
    
  }

  return (
    <div className="App">
      <div>
        <ColorForm addBox={addBox}/>
      </div>
      <div>
        <DisplayBoxes boxes={boxes}/>
      </div>
    </div>
  );
}

export default App;

