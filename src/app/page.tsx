import Image from "next/image";
import styles from "./page.module.css";
import { Artist } from "./Components/ArtistCard/ArtistCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}> 
        <Artist title="Coldplay" url="https://th.bing.com/th/id/OIP.avxhtQqr5FoubGjq4sIXugHaEo?rs=1&pid=ImgDetMain" year="2010"/>
      </div>
    </main>
  );
}
