import { PokemonsContainer } from "./_components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <PokemonsContainer></PokemonsContainer>
    </main>
  );
}
