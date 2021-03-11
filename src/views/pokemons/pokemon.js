import { Page } from "../../components/page";
import { Title } from "../../components/title";
import { pokeApiResponse } from "../../utils/sampleResponse";
import{useState,useEffect } from 'react';
import {  Link, Route } from "react-router-dom";

import { Button } from 'react-bootstrap';

export const Pokemon = (props) => {
  const [array, setArray]=useState([])
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState('');
  const [state, setState] = useState("initial");
  const [index,setIndex]=useState(parseInt(props.location.index)+1)
  const [imageValue,setImage]=useState(false)

  
const addToFavourites = event => {
  
 
  if(localStorage.length/4<6){
    var a=''
    for (let i=0;i<pokemon.types.length;i++){
      
      a=a+" "+pokemon.types[i].type.name
    }
   
    localStorage.setItem(`pokemon${Math.floor(localStorage.length/4)}Name`, pokemon.name);
    localStorage.setItem(`pokemon${Math.floor(localStorage.length/4)}Id`, pokemon.id);
    localStorage.setItem(`pokemon${Math.floor(localStorage.length/4)}Type`, a);
    localStorage.setItem(`pokemon${Math.floor(localStorage.length/4)}avatar`,pokemon.sprites.front_default );
   

    // localStorage.clear()
  }
  else{
   
  for(var i=5;i>0;i--){
    localStorage.setItem(`pokemon${i}Name` ,localStorage.getItem(`pokemon${i-1}Name`));
    localStorage.setItem(`pokemon${i}Type` ,localStorage.getItem(`pokemon${i-1}Type`));
    localStorage.setItem(`pokemon${i}Id` ,localStorage.getItem(`pokemon${i-1}Id`));
    localStorage.setItem(`pokemon${i}avatar` ,localStorage.getItem(`pokemon${i-1}avatar`));
  }
  var a=''
  for (let i=0;i<pokemon.types.length;i++){
    
    a=a+" "+pokemon.types[i].type.name
  }
  localStorage.setItem('pokemon0Name', pokemon.name)
  localStorage.setItem('pokemon0Id', pokemon.id)
  // localStorage.setItem('pokemon0Type', a)
  localStorage.setItem('pokemon0avatar',pokemon.sprites.front_default)
}
       
  // else{
     
  //     for(let i=0;i<24;i++){
  //      var pokemonIndex= parseInt(Object.keys(localStorage)[i][7])
  //      if(pokemonIndex!=5){
  //       var pokemonValue= Object.values(localStorage)[i] //value 
  //        localStorage.setItem(Object.keys(localStorage)[i].replace(pokemonIndex.toString(),(pokemonIndex+1).toString()),pokemonValue)
        // console.log(Object.keys(localStorage)[i].replace(pokemonIndex.toString(),(pokemonIndex+1).toString()))
        // console.log(pokemonValue)

        }
      //  else{
      //    var a = '';
      //   for (let i=0;i<pokemon.types.length;i++){
      
      //     a=a+" "+pokemon.types[i].type.name
      //   }
       
        // localStorage.setItem(`pokemon0Name`, pokemon.name);
        // localStorage.setItem(`pokemon0Id`, pokemon.id);
        // localStorage.setItem(`pokemon0Type`, a);
        // localStorage.setItem(`pokemon0avatar`,pokemon.sprites.front_default );
      //  }
       
       
      // }
      

  


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
            <Button onClick={addToFavourites} className="poke-font text-white grid grid-cols-2 grid-flow-row-dense gap-1" >Add to favourites</Button> 
        </div> 
       
         </>)}
         {imageValue===true &&(<>   {<img style={{width:"200px", height:"200px"}}src={pokemon.sprites.front_default}></img> }</>)}
    </Page>
     
           
        
    
  );
};