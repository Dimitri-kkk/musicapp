import Image from "next/image";
import styles from "./page.module.css";
import MusicListCard from "./Components/MusicListCard/MusicListCard/MusicListCard";
import MusicList from "./Components/MusicListCard/MusicList";


export default function Home() {
  return (
    <main className={styles.main}>
      <MusicList/>
    </main>
  );
}
