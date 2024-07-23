
import Albums from "./Components/Albums/Albums";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
      <Albums/>
    </main>
  );
}
