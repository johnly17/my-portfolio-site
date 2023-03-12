import './App.css';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';

import {  } from '@mui/material'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "John Ly"
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
    </div>
  );
}

export default App;
