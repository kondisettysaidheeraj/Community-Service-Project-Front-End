import React from 'react'
import Csp from './Csp';
import './App.css';
import AirPollution from './AirPollution';
import Solutions from './Solutions';
import ContractUs from './ContractUs';
import AboutUs from './AboutUs';
import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventsConducted from './EventsConducted';

import TeamData from './TeamData';
import Survey from './Survey';


import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
function Routee() {
  return (
    <div>

<BrowserRouter>
  
  <NavBar/>
     <Routes>
       
        <Route path="/"  element={<Home/>}/>
        <Route path="/csp"  element={<Csp/>}/>
        <Route path="/airPollution"  element={<AirPollution/>}/>
        <Route path="/solutions"  element={<Solutions/>}/>
        <Route path="/eventsConducted"  element={<EventsConducted/>}/>
        <Route path="/contractUs"  element={<ContractUs/>}/>
        <Route path="/aboutUs"  element={<AboutUs/>}/>
        <Route path="/survey" element={<Survey/>}/>
        <Route path="/Navbar" element={<NavBar/>} />
       
     </Routes>
  
  </BrowserRouter>
    </div>
  )
}

export default Routee;