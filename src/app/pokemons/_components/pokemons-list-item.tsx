"use client";

// eslint-disable-next-line import-access/jsdoc
import { useRouter } from "next/navigation";
import { PokeAPI } from "pokeapi-types";

import { Button } from "@/components";

export function PokemonsListItem({
  pokemon,
}: {
  pokemon: PokeAPI.NamedAPIResource;
}) {
  const router = useRouter();
  return (
    <Button onPress={() => router.push(`/pokemons/${pokemon.name}`)}>
      {pokemon.name}
    </Button>
  );
}
