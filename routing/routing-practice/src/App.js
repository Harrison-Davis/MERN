import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import {Link, Routes, Route, Switch} from 'react-router-dom';
import Home from './components/Home'
import DisplayNumber from './components/DisplayNumber';

function App() {
  return (
    <div className="App">

    <Link to={"/home"}>Home</Link>
    

    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/home/:input/" element={<DisplayNumber/>}/>
      <Route path="/home/:input/:color1/" element={<DisplayNumber/>}/>
      <Route path="/home/:input/:color1/:color2" element={<DisplayNumber/>}/>
    </Routes>

    </div>
  );
}

export default App;
