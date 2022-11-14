import './App.css';
import {useEffect, useState} from "react"
import Header from './components/Header';
import About from './pages/About';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HompePage from './pages/HompePage';
import axios from 'axios';
import CharacterDetails from './pages/CharacterDetails';
import UserContextProvider from './contexts/UserContext';



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
      <UserContextProvider>
      <Header />
      <Routes>
        <Route path="/home" element={<HompePage characters={characters} setCharacters={setCharacters}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/details/:characterId" element={<CharacterDetails/>}/>
        
      </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
