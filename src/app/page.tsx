import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "./Components/Button/Button";
import './Components/Button/Button.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Button title="Secondary" mode="Big"/> 
        <Button title="Primary" /> 
      </div>
    </main>
  );
}
