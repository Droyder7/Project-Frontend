import React from 'react';
import './App.css';
import Home from './Core/Home';

/* Firebase SDK */
import firebase from 'firebase/app';
import 'firebase/firestore';  // For database
import 'firebase/auth'; // For user authentication

/* Firebase Hooks */
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
