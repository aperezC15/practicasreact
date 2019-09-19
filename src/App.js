import React from 'react';
import './App.css';
import Tabla from './components/Tabla';
import Barra from './components/Barra';
import Button from './components/Button';

function App(){
  return (
    <div className="App">
        <Barra></Barra>
        <Tabla></Tabla>
        <Button name="Aceptar"></Button>
    </div>
  );

}

export default App;