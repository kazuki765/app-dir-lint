import { PokeAPI } from "pokeapi-types";

import { PokemonsListItem } from "./pokemons-list-item";

type Props = {
  offset: number;
};

export async function PokemonsList({ offset = 0 }: Props) {
  const pokemonList = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`,
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
