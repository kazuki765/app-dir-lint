// eslint-disable-next-line import-access/jsdoc
import Link from "next/link";

import styles from "./header.module.css";

export function Header() {
  return (
    <div>
      <nav className={styles.header}>
        <ul className={styles.navlist}>
          <li>
            <Link href={"/pokemons"}>pokemons</Link>
          </li>
          <li>
            <Link href={"/todos"}>TODO</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
