import './App.css';
import {useEffect, useState} from "react"
import Header from './components/Header';
import About from './pages/About';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HompePage from './pages/HompePage';
import axios from 'axios';



function App() {

  const [characters, setCharacters]=useState([])

useEffect(()=>{
  axios.get('https://rickandmortyapi.com/api/character')
  .then(res=>{
      console.log(res.data.results)
      setCharacters(res.data.results)  

    }
  )
  .catch(err=>console.log(err))


},[])


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<HompePage characters={characters}/>}/>
        <Route path="/about" element={<About/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
