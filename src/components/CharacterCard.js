import React from 'react'
import "../styles/character-card.css"

function CharacterCard({character}) {
  return (
    <div className='character-card'>
        <img src={character.image}/>
        <p>{character.name}</p>
        <button>See Details</button>
    </div>
  )
}

export default CharacterCard