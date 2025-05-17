import './App.css';
import React, {useState, useRef, useEffect} from "react";
import { Timer } from './components/Timer';
import Music from './components/sections/Music';
import Hello from './components/sections/Hello';
import Timing from './components/sections/Timing';
import Anketa from './components/sections/Anketa';
import Place from './components/sections/Place';


function App() {

  return (
    <div class="App">
      <Music/>
      <Hello/>
      <Timing/>
      <Place/>

      <Anketa/>
      <Timer end={new Date(2025, 6, 19, 13, 20)}/>
    </div>
  );
}

export default App;
