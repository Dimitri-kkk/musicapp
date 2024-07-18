import Image from "next/image";
import styles from "./page.module.css";
import { Artist } from "./Components/ArtistCard/ArtistCard";
import MyImage from './Components/ArtistCard/Misha.png'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}> 
        <div className="styles.center">
          <Artist title="Misha" url='https://i.ibb.co/4ppWzh1/image.png' year="2010"/>
        </div>
      </div>
    </main>
  );
}
