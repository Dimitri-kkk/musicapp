'use client';
import styles from "./page.module.css";
import MusicCard from "./Components/MusicCard/MusicCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <MusicCard
        src="./beatles.png"
        title="Yellow"
        artist="The beatles"
      />
    </main>
  );
}








