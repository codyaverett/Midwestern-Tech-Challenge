import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
    return (
        <div className="App-body">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/Contact" element={<Contact />}/>
                </Routes>          
            </Router>
        </div>
    )
}

export default App;
