import Image from "next/image";
import styles from "./page.module.css";
import { Artist } from "./Components/ArtistCard/ArtistCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className="styles.center">
          <Artist url="#" title="Title" year="2022" />
        </div>
      </div>
    </main>
  );
}
