import React, { useEffect, useState } from 'react'
import { getCharacters } from '../services/getCharacters';
import { Card } from './Card';

export const RickAndMorty = () => {

  const [personajes, setPersonajes] = useState([])

  const url = `https://rickandmortyapi.com/api/character`;

  useEffect(() => {
    
    getCharacters( url )
    .then( data => {
      
      const promesas = data.results.map(personaje => {
        if(personaje.origin.url){
          return getCharacters(personaje.origin.url);
        } else {
          return Promise.resolve(null);
        }
        
      })

      Promise.all( promesas )
        .then(arregloPromesasResultas => {
          const resultadoFinal = data.results.map((personaje, indice) => {
            return {
              ...personaje,
              infoOrigen: arregloPromesasResultas[indice]
            }
          })
          setPersonajes(resultadoFinal);
        })

    })
    
  }, [ url ])
   
  console.log(personajes);
    
  return (
    <div className='text-center'>
      <h1 className='mt-5 mb-5'>Listado de Personajes</h1>
      <div className='row'>
        <div className='col-2'></div>
        <div className='col-8 d-flex flex-wrap justify-content-between'>
        {
          personajes.map(personaje => {
            return <Card 
              key={personaje.id}
              {...personaje} 
            />
          })
        }
        </div>
        <div className='col-2'></div>
      </div>
    </div>
  )
}

