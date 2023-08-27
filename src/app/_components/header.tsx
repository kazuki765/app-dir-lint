// eslint-disable-next-line import-access/jsdoc
import Link from "next/link";

export function Header() {
  return (
    <div>
      Header
      <nav>
        <ul>
          <li>
            <Link href={"/pokemons"}>pokemons</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
