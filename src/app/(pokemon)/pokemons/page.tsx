// eslint-disable-next-line import-access/jsdoc
import Link from "next/link";

import { PokemonsContainer } from "./_components";
export const dynamic = "force-dynamic";

type Props = {
  searchParams: Record<string, string | undefined>;
};
export default function Page({ searchParams }: Props) {
  const offset = isNaN(Number(searchParams.offset))
    ? 0
    : Number(searchParams.offset);
  return (
    <>
      <div>
        <Link href={`/pokemons/?offset=${offset - 10}`}>Prev</Link>
        <Link href={`/pokemons/?offset=${offset + 10}`}>Next</Link>
      </div>
      <PokemonsContainer offset={offset}></PokemonsContainer>
    </>
  );
}
