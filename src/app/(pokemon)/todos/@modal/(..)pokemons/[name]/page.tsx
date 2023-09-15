import { PokemonDetail, PokemonModal } from "./_components";

export default function Page({ params }: { params: { name: string } }) {
  return (
    <PokemonModal>
      <PokemonDetail name={params.name}></PokemonDetail>
    </PokemonModal>
  );
}
