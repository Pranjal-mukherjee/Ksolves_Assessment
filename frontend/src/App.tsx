import React from 'react';
import Login from './components/pages/LoginPage';

import HomePage from './components/pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (<>
    
 <BrowserRouter>
 <Routes>
  <Route path="/home" element={<HomePage/>}/>
  <Route path="/" element={<Login/>}/>
</Routes>
  </BrowserRouter>
</>
  );
}

export default App;
