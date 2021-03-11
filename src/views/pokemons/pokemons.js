import { Page } from "../../components/page";
import { Title } from "../../components/title";
import { pokeApiResponse } from "../../utils/sampleResponse";
import{useState,useEffect } from 'react';
import {  Link, Route } from "react-router-dom";
import {Pokemon } from "./pokemon"
import { Button } from 'react-bootstrap';
export function Pokemons() {

  
  const [pokemons, setPokemons] = useState([]);
  const [state, setState] = useState("Innitial");
  
  useEffect(()=>{
    
      setState("loading");
        fetch("https://pokeapi.co/api/v2/pokemon/")
          .then((response) => response.json())
          .then((data) => {
            
            setPokemons(data.results);
            setState("loaded");
          
          }).catch(() => setState("error"));
       
  }, [])
   
       
  return (
    <Page>
      <Title>Pokemons list</Title>
     
      
      <ol className="poke-font text-white grid grid-cols-2 grid-flow-row-dense gap-1">
        

        
        {pokemons.map((pokemon, index) => (
          <Link to={{pathname:"/pokemon",index:index.toString()}} 
         
            
            className={`hover:bg-red-700 cursor-pointer ${
              index < 10 ? "col-start-1" : "col-start-2"
            }`}
          >
            {index + 1} - {pokemon.name}
            
          </Link>
          
        ))}
      
      </ol>
     
    </Page>
    
  );
}
