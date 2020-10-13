import React from 'react';
import './App.css';

import { useAuthState } from "react-firebase-hooks/auth";
import auth from './config/auth';

import Home from './Core/Home';
import Login from './User/Login';

function App() {
  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      <section>
        {user ? <Home/> : <Login />}
      </section>
    </div>
  );
}

export default App;