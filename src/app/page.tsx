import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "./Components/Button/Button";
import './Button.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Button title="Secondary" type="Secondary"/> 
        <Button title="Primary" type="Primary"/> 
      </div>
    </main>
  );
}
