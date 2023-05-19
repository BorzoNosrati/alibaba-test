import React, { useEffect } from 'react';
import logo from './logo.svg';
import './scripts/utilities';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './styles/fontAwesome/css/regular.min.css';
import './styles/fontAwesome/css/all.min.css';
import './styles/App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { useTheme } from './scripts/useTheme';
import CounteryDetail from './pages/CounteryDetail';

function App() {
  const [theme, setTheme] = useTheme();


  useEffect(() => {
    console.log(theme);
    if (!theme) setTheme('light')
  }, [])

  return (
    <div className="App">
      <Navbar title='Where in the world?' />
      <div className='container'>
        <Outlet />
      </div>

    </div>
  );
}

export default App;
