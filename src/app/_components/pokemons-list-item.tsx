"use client";
import { PokeAPI } from "pokeapi-types";

import { Button } from "@/components";

export function PokemonsListItem({
  pokemon,
}: {
  pokemon: PokeAPI.NamedAPIResource;
}) {
  return <Button onPress={() => pokemon.url}>{pokemon.name}</Button>;
}
