import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './fontAwesome/css/regular.min.css';
import './fontAwesome/css/fontawesome.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar title='Where in the world?' />
      <div className='container'>
        <BrowserRouter >
          <Routes location={"/"}>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
