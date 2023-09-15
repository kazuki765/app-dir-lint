// eslint-disable-next-line import-access/jsdoc

import { PokemonsList } from "./pokemons-list";

export function PokemonsContainer({ offset }: { offset: number }) {
  return <PokemonsList offset={offset} />;
}
