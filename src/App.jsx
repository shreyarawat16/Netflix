
import { useEffect } from 'react'
import './App.css'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Player from './pages/Player/Player.jsx'
import {Routes, Route, useNavigate, BrowserRouter} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
 import { ToastContainer } from 'react-toastify';


function App() {
  const navigate = useNavigate();

  
  useEffect(() => {
     onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged in")
        navigate("/");      // user logged in
      } else {
        console.log("Logged out");
        navigate("/login"); // user logged out
      }
    });

    
  },);
      
  return (
    <div>
  
    <ToastContainer theme='dark' />
    <Routes>
     
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/player/:id" element={<Player/>} />
    </Routes>
    </div>
  )
}

export default App
