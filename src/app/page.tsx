// eslint-disable-next-line import-access/jsdoc
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>とっぷだお</h1>
      <Link href={"/pokemons"}>Pokemons</Link>
    </main>
  );
}
