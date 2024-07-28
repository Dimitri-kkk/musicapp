import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "./Components/Button/Button";
import { BigButton } from "./Components/Button/BigButton";
import { Header } from "./Components/Header/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Header />
      </div>
    </main>
  );
}
