import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import SignUpForm from './components/SignUpForm';
import AuthPage from './pages/AuthPage';
import {Routes, Route} from 'react-router-dom'
import {getUser} from '../src/utilities/users-service'
import NavBar from './components/NavBar';

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div className="App">
      <NavBar user={user}/>
      <AuthPage/>
    </div>
  );
}

export default App;
