import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "./Components/Button";
import { BigButton } from "./Components/BigButton";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}> 
      <Button title="Normal Button" />
      <BigButton title="Big" />
      </div>
    </main>
  );
}
