import React, {useContext} from 'react'
import '../styles/header.css';
import {UserContext} from '../contexts/UserContext';
import {ThemeContext} from '../context/ThemeContext';

function header() {

const {userName, setUserName}=useContext(UserContext)



  return (
    <div className={darkMode ? 'header-container header-dark' : 'header-container'>
        <div>
          <a href="/home">Home</a>
          <a href="/about">About</a>
        </div>
        
        <div style={{display:"flex"}}>
          <p style={{marginRight:"10px"}}>Welcome {userName}</p>
          <button>{darkMode===true ? <p>dark</p> : <p>light</p>}</button>
        </div>
    </div>
  )
}

export default header