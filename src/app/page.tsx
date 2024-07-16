'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { Heart } from "./Components/heart-button/heart-button";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Heart/>
      </div>
      
    </main>
  );
}
