import React from 'react'
import Search from './Search'
import CharacterCard from '../components/CharacterCard'
import "../styles/home.css"

function HompePage({characters, setCharacters}) {
  return (
    <div>
        <Search setCharacters={setCharacters}/>
        <h1>Main Characters</h1>
        <div className='characters-container'>
            {
                characters.map((item)=>{
                    return <CharacterCard key={item.id} character={item}/>
                    
                })
            }
        </div>
    </div>
  )
}

export default HompePage