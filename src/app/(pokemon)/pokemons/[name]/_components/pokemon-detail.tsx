import Image from "next/image";
import { PokeAPI } from "pokeapi-types";

export async function PokemonDetail({ name }: { name: string }) {
  const pokemon: PokeAPI.Pokemon = (await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + name,
  ).then((response) => response.json())) as PokeAPI.Pokemon;
  return (
    <div>
      <p>{pokemon.id}</p>
      <h1>{pokemon.name}</h1>
      <figure>
        <div>front image</div>
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width={200}
          height={200}
          priority
        ></Image>
      </figure>
      <figure>
        <div>back image</div>
        <Image
          src={pokemon.sprites.back_default}
          alt={pokemon.name}
          width={200}
          height={200}
          priority
        ></Image>
      </figure>
      <div>
        <h2>stats</h2>
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              <p>{stat.stat.name}</p>
              <p>{stat.base_stat}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
