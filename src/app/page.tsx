import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "./Components/Button/Button";
import './styles/styles.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Button title="Normal" mode="normal"/> 
        <Button title="big" mode="big"/> 
      </div>
    </main>
  );
}
