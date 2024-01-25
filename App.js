import './App.css';
import Fecha from './componentes/componentefech';
import Datos from './componentes/componenteDatos';
import React, { useState } from 'react';
import ComponenteForm from './componentes/componenteForm';
import CalculadoraEdad from './componentes/componenteCalculadoraEdad';
import Contador from './componentes/componenteContador';
import Login from "./componentes/firebase/Login";
import PokemonSearch from './componentes/componentePokemonSearch';
import RickAndMortyApp from './componentes/componenteRickandMorty';


function App() {
  const [operaciones, setOperacion] = useState([])
  function calcular(event){
    event.preventDefault();
    const edadH = parseInt(event.target.valor1.value, 10)
    const edadP = (edadH) * 7
    const nuevo = {
      resultado: edadP,
      valor1: edadH
    }
    setOperacion([nuevo,...operaciones])
    event.target.valor1.value='';
  }
  const [datos, setDatos] = useState({nombre: '', materia:''})
  const [isAgeModuleEnabled, setAgeModuleEnabled] = useState (false);
  const [isDateModuleEnabled, setDateModuleEnabled] = useState (false);
  const [isFormModuleEnabled, setFormModuleEnabled] = useState (false);
  const [isPokemonModuleEnabled, setPokemonModuleEnabled] = useState (false);
 const [isRickModuleEnabled, setRickModuleEnabled] = useState (false);
 const [isLogModuleEnabled, setLogModuleEnabled] = useState(false);



 const toggleLogModule=()=>{
  setLogModuleEnabled (!isLogModuleEnabled);
};
  const toggleAgeModule=()=>{
    setAgeModuleEnabled (!isAgeModuleEnabled);
  };
  const toggleDateModule=()=>{
    setDateModuleEnabled (!isDateModuleEnabled);
  };
  const toggleFormModule = () => {
    setFormModuleEnabled (!isFormModuleEnabled);
  };
  const togglePokemonModule = () => {
    setPokemonModuleEnabled (!isPokemonModuleEnabled);
    };
    const toggleRickModule = () => {
    setRickModuleEnabled (!isRickModuleEnabled);
    }

  const handleFormSubmit =(data) =>{
    setDatos(data);
  }
  
  return(

    <div>
      <h1>Hola esta es mi primera practica en React</h1>
    
      <button className='edadPerro' onClick={toggleAgeModule}>
        {isAgeModuleEnabled ? 'Deshabilitar Modulo Edad Canina' : 'Habilitar Modulo Edad Canina'}
      </button>
      {isAgeModuleEnabled && <><form onSubmit={calcular}>
        <p>Ingrese su edad: <input type="text" name="valor1" /></p>
        <input type="submit" value="Calcular" />
      </form><CalculadoraEdad resultados={operaciones} /></>}

      <button className='FECHAS' onClick={toggleDateModule}>
        {isDateModuleEnabled ? 'Deshabilitar Modulo Fecha' : 'Habilitar Modulo Fecha'}
      </button>
      {isDateModuleEnabled && <Fecha/>}

      <button className='FORMULARIOS' onClick={toggleFormModule}>
        {isFormModuleEnabled ? 'Deshabilitar Modulo Formulario' : 'Habilitar Modulo Formulario'}
      </button>
      {isFormModuleEnabled && <><ComponenteForm onFormSubmit={handleFormSubmit} /><Datos nombre={datos.nombre} materia={datos.materia} /></>}
      
      <button className='POKE' onClick={togglePokemonModule}>
 {isPokemonModuleEnabled ? 'Deshabilitar API Pokemon' : 'Habilitar API Pokemon'}
 </button>
 {isPokemonModuleEnabled && <PokemonSearch/>}

 <button className='RICK' onClick={toggleRickModule}>
 {isRickModuleEnabled ? 'Deshabilitar API Rick&Morty' : 'Habilitar API Rick&Morty'}
 </button>
 {isRickModuleEnabled && <RickAndMortyApp/>}

     <button className='LOG' onClick={toggleLogModule}>
 {isLogModuleEnabled ? 'Deshabilitar Login' : 'Habilitar Login'}
 </button>
 {isLogModuleEnabled && <Login/>} 


      
   
      <Contador/> 
 
    </div>
  )
}
export default App;

