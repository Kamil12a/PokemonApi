import { Page } from "../../components/page";
import { Title } from "../../components/title";
import { pokeApiResponse } from "../../utils/sampleResponse";
import{useState,useEffect } from 'react';
import {  Link, Route } from "react-router-dom";

import { Button } from 'react-bootstrap';

export const Pokemon = (props) => {
  const [array, setArray]=useState([])
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [state, setState] = useState("initial");
 const [index,setIndex]=useState(props.location.index)
const [imageValue,setImage]=useState(false)
    function previousPokemon(){
      if(index>1){
        setIndex(index-1)
      }
      
      
      setArray(index)
    }
    
    function nextPokemon(){
      if(index<20){
        setIndex(index+1)
      }
      setArray(index)
    }
    function showImage(){
      if(!imageValue){
        setImage(true)
      }
      else{
        setImage(false)
      }
     
    }
    
    if(!index){
      setIndex(1)
    }
    
    useEffect(()=>{
      
        setState("loading");
          fetch("https://pokeapi.co/api/v2/pokemon/")
            .then((response) => response.json())
            .then((data) => {
              setPokemons(data.results);
              setState("loaded");
              
            }).catch(() => setState("error"));
         
    }, [])
     
    useEffect(()=>{
      
      
        fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
          .then((response) => response.json())
          .then((data) => {
           setPokemon(data)
            
          
          }).catch(() => setState("error"));
       
  }, [array])
  
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
                name: {pokemon.name}
            </li>
            <li className="poke-font text-white grid grid-cols-2 grid-flow-row-dense gap-1">
                weight: {pokemon.weight} 
                  
                
            </li>
            <li className="poke-font text-white grid grid-cols-2 grid-flow-row-dense gap-1">
                height: {pokemon.height}
            </li>
            <li className="poke-font text-white grid grid-cols-2 grid-flow-row-dense gap-1">
                id: {pokemon.id}
            </li>
            
              
                {/* <img style={{width:"200px", height:"200px"}}src={pokemon.sprites.front_default}></img> */}
              
            <Button onClick={showImage} className="poke-font text-white grid grid-cols-2 grid-flow-row-dense gap-1" >Show Image</Button> 
             
            
            
        </ol> 
        <div style={{display:"flex"}}>
            <Button  onClick={previousPokemon} className="poke-font text-white grid grid-cols-2 grid-flow-row-dense gap-1" >Previous</Button> 
            <Button onClick={nextPokemon} className="poke-font text-white grid grid-cols-2 grid-flow-row-dense gap-1" >Next</Button> 
            
        </div>
       
         </>)}
         {imageValue===true &&(<>   {<img style={{width:"200px", height:"200px"}}src={pokemon.sprites.front_default}></img> }</>)}
    </Page>
     
           
        
    
  );
};