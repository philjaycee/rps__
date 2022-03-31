import React from 'react';
import LandPage from './Components/LandPage/LandPage'
import './App.css'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Choice from './Components/Choice/Choice'
import Refac_RPS from './Components/RPS__/rps_refactor'
import Login from './Components/Login_Logout/Login'
import Register from './Components/Login_Logout/Register'
import ProfilePage from './Components/ProfilePage/profilepage'

/*
  <h1 id='text1'>PLAY TRADITIONAL GAME</h1>
        <h3 id='text2'>Experience new traditional game play</h3>
        <button id='button1' href='./Components/Choice/Choice.js'>Play Now</button>
        <h3 id='text3'>The Story</h3>
        <button id='button2'></button>
*/


function App(){
  return (
    <div className='App'>
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LandPage/>} />
         <Route path="/choicegame" element={<Choice/>} />
         <Route path="/game" element={<Refac_RPS/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/register" element={<Register/>} />
         <Route path="/profilepage" element={<ProfilePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App