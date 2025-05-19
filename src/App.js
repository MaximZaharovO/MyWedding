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
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Page isFriends={false}/>} />
        <Route path='/friends' element={<Page isFriends={true}/>} />
      </Routes>
    </Router>
  );
}

export default App;


const Page = ({isFriends}) => {
  return <div class="App">
      <Music/>
      <ScrollAnimation animateIn="zoomIn">
        <Hello/>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Timing isFriends={isFriends}/>
      </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
      <Place/>
      </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
      <Wishes/>
        </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
      <DressCode/>
        </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
      <Chat isFriends={isFriends}/>
        </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Wait/>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <Anketa isFriends={isFriends}/>
      </ScrollAnimation>
    </div>
}