import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import your new component
import Routee from './Routee';
import Login from './Login';
import Singup from './Singup';
function App() {
  return (
  <div>


     {/* <Router>
      <Routes>
        <Route path="/loging" element={<Login/>} />
      </Routes>
    </Router> */}

   <Singup/>
  </div>
  );
}

export default App;
