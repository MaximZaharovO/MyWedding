import './App.css';
import React, {useState, useRef, useEffect} from "react";
import { Timer } from './components/Timer';
import Music from './components/sections/Music';
import Hello from './components/sections/Hello';
import Timing from './components/sections/Timing';
import Anketa from './components/sections/Anketa';
import Place from './components/sections/Place';
import Wishes from './components/sections/Wishes';
import DressCode from './components/sections/DressCode';


function App() {

  return (
    <div class="App">
      <Music/>
      <Hello/>
      <Timing/>
      <Place/>
      <Wishes/>
      <DressCode/>

      <Anketa/>
      <Timer end={new Date(2025, 6, 19, 13, 20)}/>
    </div>
  );
}

export default App;
