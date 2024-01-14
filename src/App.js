import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom';
import Routings from './routes/Routings';
import AppLogin from './components/AppLogin';
import React from "react"

import './App.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routings />
    </BrowserRouter>
    </div>
  );
}

export default App;
