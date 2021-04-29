import React from "react";
import { Page } from "../../components/page";
import { Title } from "../../components/title";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";

export const Favourites = () => {
  const [pokemons, setPokemons] = useState([]);
  const [array, setarray] = useState([]);
  const [state, setState] = useState("Innitial");
  useEffect(() => {
    let name = [];
    let id = [];
    let type = [];
    let avatar = [];
    let pokemons = [];
    for (let i = 0; i < 6; i++) {
      name.push(localStorage.getItem("pokemon" + i.toString() + "Name"));
      id.push(localStorage.getItem("pokemon" + i.toString() + "Id"));
      avatar.push(localStorage.getItem("pokemon" + i.toString() + "avatar"));
      type.push(localStorage.getItem("pokemon" + i.toString() + "Type"));
    }
    for (let i = 0; i < 6; i++) {
      pokemons.push([name[i], id[i], avatar[i], type[i]]);
    }
    setPokemons(pokemons);
    setState("loaded");
  }, array);
  const PokemonProfile = ({ number, name, types, avatar, index }) => {
    function deletePoke() {
      localStorage.removeItem(`pokemon${index}Name`);
      localStorage.removeItem(`pokemon${index}Id`);
      localStorage.removeItem(`pokemon${index}Type`);
      localStorage.removeItem(`pokemon${index}avatar`);
      pokemons[index]=[]
      setarray([pokemons]);
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
            <div className="text-cyan-600">
              #{number} {name}
            </div>
            <div className="text-gray-500">#{types} </div>
            <Button
              onClick={deletePoke}
              style={{
                border: "2px solid",
                borderRadius: "20px",
                width: "150px",
                height: "50px",
              }}
            >
              Delete
            </Button>
          </figcaption>
        </div>
      </figure>
    );
  };
  return (
    <Page>
      <Title>Favourites</Title>
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        {state === "loaded" && (
          <>
            <PokemonProfile
              name={pokemons[0][0]}
              number={pokemons[0][1]}
              avatar={pokemons[0][2]}
              types={pokemons[0][3]}
              index={0}
            />
            <PokemonProfile
              name={pokemons[1][0]}
              number={pokemons[1][1]}
              avatar={pokemons[1][2]}
              types={pokemons[1][3]}
              index={1}
            />
            <PokemonProfile
              name={pokemons[2][0]}
              number={pokemons[2][1]}
              avatar={pokemons[2][2]}
              types={pokemons[2][3]}
              index={2}
            />
            <PokemonProfile
              name={pokemons[3][0]}
              number={pokemons[3][1]}
              avatar={pokemons[3][2]}
              types={pokemons[3][3]}
              index={3}
            />
            <PokemonProfile
              name={pokemons[4][0]}
              number={pokemons[4][1]}
              avatar={pokemons[4][2]}
              types={pokemons[4][3]}
              index={4}
            />
            <PokemonProfile
              name={pokemons[5][0]}
              number={pokemons[5][1]}
              avatar={pokemons[5][2]}
              types={pokemons[5][3]}
              index={5}
            />
          </>
        )}
      </div>
    </Page>
  );
};

