import Image from "next/image";
import styles from "./page.module.css";
import MusicCard from "./Components/MusicListCard/MusicCard";


export default function Home() {
  return (
    <main className={styles.main}>
      <MusicCard src='/next.svg' title="adasd" artist="anzora"/>
    </main>
  );
}
