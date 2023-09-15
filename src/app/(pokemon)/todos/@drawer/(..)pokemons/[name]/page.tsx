import { PokemonDetail, PokemonDrawer } from "./_components";

export default function Page({ params }: { params: { name: string } }) {
  return (
    <PokemonDrawer>
      <PokemonDetail name={params.name}></PokemonDetail>
    </PokemonDrawer>
  );
}
