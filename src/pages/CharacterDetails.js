import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';

function CharacterDetails() {
const {characterId}= useParams() 
const [character, setCharacter]=useState('')


useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
    .then(res=>{
        console.log(res.data)
        setCharacter(res.data)
    })
    .catch(err=>console.log(err))
}, [])

  return (
    <div className='details-container'>
        <img src={character?.image}/>
        <div className='container-info'>
            <p>Name: <span>{character?.name}</span></p>
            <p>Gender: {character?.gender}</p>
            <p>Species: {character?.location?.name}</p>
            <p>Status: {character?.status}</p>
        </div>
    </div>
  )
}

export default CharacterDetails