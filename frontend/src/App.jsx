import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Home from './pages/Home';
import Signup from './pages/Signup';

import Working from './pages/Working';

const App = () => {
  return (
    <div>
        <div>
        <Navbar/>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/working" element={<Working />} />
        </Routes>

    </div>
  )
}

export default App
