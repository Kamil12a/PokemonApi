import { Page } from "../../components/page";
import { Title } from "../../components/title";
import { pokeApiResponse } from "../../utils/sampleResponse";
import{useState,useEffect } from 'react';
import {  Link, Route } from "react-router-dom";

import { Button } from 'react-bootstrap';

export const Pokemon = (props) => {


    
    
  
    const [pokemon, setPokemon] = useState([]);
    const [state, setState] = useState("initial");
   const [index ,setIndex]=useState(props.location.index)
    const [url,setUrl]=useState(props.location.url)

     useEffect(()=>{
        setState("loading")
        fetch(url.toString())
        .then((r) => r.json())
          .then((data) => {
            setPokemon(data);
            setState("loaded");
          }).catch(() => setState("error"))
       
         
          
     },[])
     
  return (
    <Page>
          {state === "loading" && (
        <Title >
          Loading 
        </Title>
      )}
      {state === "error" && (
        <Title >
          Error
        </Title>
      )}
      { state==="loaded" &&(<>
        <ol >
            <li className="poke-font text-white grid grid-cols-2 grid-flow-row-dense gap-1">
                name:{pokemon.name}
            </li>
            <li className="poke-font text-white grid grid-cols-2 grid-flow-row-dense gap-1">
                weight:{pokemon.weight}
            </li>
            <li className="poke-font text-white grid grid-cols-2 grid-flow-row-dense gap-1">
                height:{pokemon.height}
            </li>
            <li className="poke-font text-white grid grid-cols-2 grid-flow-row-dense gap-1">
                id:{pokemon.id}
            </li>
            
            <img style={{width:"200px", height:"200px"}}src={pokemon.sprites.front_default}></img>
        </ol>  </>)}
    </Page>
     
           
        
    
  );
};