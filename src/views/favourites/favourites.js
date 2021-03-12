import React from 'react'
import { Page } from '../../components/page'
import { Title } from '../../components/title'
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Button } from 'react-bootstrap';
import { pokeApiResponse } from "../../utils/sampleResponse";
import{useState,useEffect } from 'react';
import {  Link, Route } from "react-router-dom";

export const Favourites = () => {
  
  
  
  return (
    <Page>
      <Title>Favourites</Title>

    

      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <PokemonProfile
          name={ localStorage.getItem('pokemon0Name')}
          number={localStorage.getItem('pokemon0Id')}
          avatar={localStorage.getItem('pokemon0avatar')}
          types={localStorage.getItem('pokemon0Type')}
          index={0}
        />
        <PokemonProfile
         name={ localStorage.getItem('pokemon1Name')}
         number={localStorage.getItem('pokemon1Id')}
         avatar={localStorage.getItem('pokemon1avatar')}
         types={localStorage.getItem('pokemon1Type')}
         index={1}
        />
        <PokemonProfile
          name={ localStorage.getItem('pokemon2Name')}
          number={localStorage.getItem('pokemon2Id')}
          avatar={localStorage.getItem('pokemon2avatar')}
          types={localStorage.getItem('pokemon2Type')}
          index={2}
        />
        <PokemonProfile
           name={ localStorage.getItem('pokemon3Name')}
           number={localStorage.getItem('pokemon3Id')}
           avatar={localStorage.getItem('pokemon3avatar')}
           types={localStorage.getItem('pokemon3Type')}
           index={3}
        />
        <PokemonProfile
        name={ localStorage.getItem('pokemon4Name')}
        number={localStorage.getItem('pokemon4Id')}
        avatar={localStorage.getItem('pokemon4avatar')}
        types={localStorage.getItem('pokemon4Type')}
        index={4}
        />
        <PokemonProfile
           name={ localStorage.getItem('pokemon5Name')}
           number={localStorage.getItem('pokemon5Id')}
           avatar={localStorage.getItem('pokemon5avatar')}
           types={localStorage.getItem('pokemon5Type')}
           index={5}
        />
      </div>
    </Page>
  );
}

const PokemonProfile = ({number, name, types, avatar,index}) => {
  const [cart, setCart] = useState([]);
  function deletePoke(){
    localStorage.removeItem(`pokemon${index}Name`)
    localStorage.removeItem(`pokemon${index}Id`)
    localStorage.removeItem(`pokemon${index}Type`)
    localStorage.removeItem(`pokemon${index}avatar`)
    window.location.reload(true);

  }
return (
  
  <figure className="max-w-xs bg-gray-100 rounded-xl p-4" id={index}>
    <img
      className="w-32 h-32 rounded-full mx-auto"
      src={avatar}
      alt=""
      width="384"
      height="512"
    />
    <div className="pt-4 text-center">
      <figcaption className="font-medium">
        <div className="text-cyan-600">#{number} {name}</div>
        <div className="text-gray-500">#{types} </div>
        <Button onClick={deletePoke} style={{border:"2px solid", borderRadius:"20px",width:"150px",height:"50px"}} >Delete</Button> 
       
      </figcaption>
    </div>
  </figure>
);
}
