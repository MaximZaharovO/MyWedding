import './App.css';
import React, {useState, useRef, useEffect} from "react";
import Music from './components/sections/Music';
import Hello from './components/sections/Hello';
import Timing from './components/sections/Timing/Timing';
import Anketa from './components/sections/Anketa';
import Place from './components/sections/Place';
import Wishes from './components/sections/Wishes';
import DressCode from './components/sections/DressCode/DressCode';
import Chat from './components/sections/Chat';
import Wait from './components/sections/WaitFor/Wait';


function App() {

  return (
    <div class="App">
      <Music/>
      <Hello/>
      <Timing/>
      <Place/>
      <Wishes/>
      <DressCode/>
      <Chat/>
      <Wait/>

      <Anketa/>
    </div>
  );
}

export default App;
