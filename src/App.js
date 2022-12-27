import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import SignUpForm from './components/SignUpForm';
import AuthPage from './pages/AuthPage';
import {Routes, Route} from 'react-router-dom'
import {getUser} from '../src/utilities/users-service'
import NavBar from './components/NavBar';
import MainPage from './pages/MainPage'

function App() {
  const [user,  setUser] = useState(getUser())
  return (
    <main className="App">
      { user? (
      <>
          <NavBar user={user} />
          <h1>Grade Your Days - Improve Your Life</h1>
          <MainPage />
        </>
      ) : (
        <>
        <NavBar setUser={setUser}/>  
        <AuthPage setUser={setUser} />
      </>
      )}
    </main>
  );
}

export default App;
