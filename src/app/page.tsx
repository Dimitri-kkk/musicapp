'use client'

import Image from "next/image";
import styles from "./page.module.css";
import PlaylistButton from "./Components/Playlist-button/PlaylistBtn";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}> 
      <PlaylistButton initialText="View playlist" mode="filled" />
      <PlaylistButton initialText="View playlist" mode="textOnly" />
      </div>
    </main>
  );
}
