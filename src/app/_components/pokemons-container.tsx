import { Suspense } from "react";

import { PokemonsList } from "./pokemons-list";

export function PokemonsContainer() {
  return (
    <div>
      <h1>Pokemons</h1>
      <Suspense>
        <PokemonsList />
      </Suspense>
    </div>
  );
}
