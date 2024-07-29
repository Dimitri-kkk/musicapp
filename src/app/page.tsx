"use client";
import styles from "./page.module.css";
import ChartCard from "./Components/chartCard/chartCard";
import styles from "./page.module.css";
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
