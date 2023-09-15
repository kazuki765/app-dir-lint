import Link from "next/link";

import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <h1>TODOだお</h1>
      <div>
        <div>
          <Link href={"/pokemons/pikachu"}>pikachuでも見て思考停止する</Link>
        </div>
      </div>
    </main>
  );
}
