import { PokemonDetail } from "./_components";
export const dynamic = "force-dynamic";

type Props = {
  params: {
    name: string;
  };
};
export default function Page({ params }: Props) {
  return <PokemonDetail name={params.name}></PokemonDetail>;
}
