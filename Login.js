import React, {useState, useEffect} from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAk6pyT2eFhZpnFC3c8g_rV4013CpzI1Bg",
  authDomain: "logingrupito15601-72752.firebaseapp.com",
  projectId: "logingrupito15601-72752",
  storageBucket: "logingrupito15601-72752.appspot.com",
  messagingSenderId: "762448603404",
  appId: "1:762448603404:web:d2f18b9cbb3a6299634129"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  


  const Login = () => {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState('');
    
  

  useEffect (()=> {
    if (!firebase.apps.length){
      initializeApp(firebaseConfig);
    }
  },[]);

  const handleLogin = async () =>{
    try {
      const response = await firebase.auth().signInWithEmailAndPassword(email, password);
      alert('BienvenidO');
      console.log('Inicio de sesión exitoso:', response.user);
    } catch(error){
        alert('Usuario y/o contraseña inválidos');
        console.error('Error durante el inicio de sesión:', error.message);
    }
  }

    const signInWithGoogle = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider);
      alert('Bienvenido');
      // El usuario ha iniciado sesión con éxito, puedes redireccionar a la página de bienvenida o hacer otras operaciones.
    } catch (error) {
      // Manejar errores de inicio de sesión.
      alert('Usuario y/o contraseña inválidos');
      console.error("Error al iniciar sesión con Google:", error.message);
    }
    };



   
  return (
    <div>
      <h2>Login</h2>
      <label>Email</label>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
      <br/>
      <label>Password:</label>
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      <br/>
      <button className='my-button' onClick={handleLogin}>Login</button>

      <br/>
      <h2>Log in with Google</h2>
      <button className='my-button' onClick={signInWithGoogle}>Log in with Google</button>

    </div>
  );
};

export default Login;

