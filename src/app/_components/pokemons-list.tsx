import { PokeAPI } from "pokeapi-types";

import { PokemonsListItem } from "./pokemons-list-item";

export async function PokemonsList() {
  const pokemonList = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10",
  ).then(
    (response) => response.json() as Promise<PokeAPI.NamedAPIResourceList>,
  );

  return (
    <ul>
      {pokemonList.results.map((pokemon) => {
        return (
          <PokemonsListItem
            key={pokemon.name}
            pokemon={pokemon}
          ></PokemonsListItem>
        );
      })}
    </ul>
  );
}
