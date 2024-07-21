'use client'

import Image from "next/image";
import styles from "./page.module.css";
import FillOrTextBtn from "./Components/FillOrTextButton/FillOrTextBtn";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}> 
      <FillOrTextBtn initialText="View playlist" mode="filled" />
      <FillOrTextBtn initialText="View playlist" mode="textOnly" />
      </div>
    </main>
  );
}
