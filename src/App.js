import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import SignUpForm from './components/SignUpForm';
import AuthPage from './pages/AuthPage';
import {Routes, Route} from 'react-router-dom'
import {getUser} from '../src/utilities/users-service'
import NavBar from './components/NavBar';
import MainPage from './pages/MainPage'
import Rubrik from './components/Rubrik';
import PageHeader from './components/PageHeader';

function App() {
  const [user,  setUser] = useState(getUser())
  const [gpa, setGPA] = useState('')
  const [currentMonth, setCurrentMonth] = useState('')


  return (
    <main className="App">

          <NavBar user={user} />
          <PageHeader />
          <MainPage setGPA={setGPA} setCurrentMonth={setCurrentMonth}/>
          <Rubrik gpa={gpa} currentMonth={currentMonth}/>
    </main>
  );
}

export default App;
