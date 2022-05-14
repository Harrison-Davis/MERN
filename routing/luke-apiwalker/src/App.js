import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import {Link, Routes, Route, Switch} from 'react-router-dom';
import People from './components/People';
import Planet from './components/Planet';
import Starship from './components/Starship';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <div>
        <Form/>
      </div>
      <Routes>
        <Route path="/people/:id" element={<People/>}/>
        <Route path="/planets/:id" element={<Planet/>}/>
        <Route path="/starships/:id" element={<Starship/>}/>
        {/* <Route path="error" element=/> */}
      </Routes>
    </div>
  );
}

export default App;
