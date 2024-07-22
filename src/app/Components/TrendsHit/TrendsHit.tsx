import styles from "./TrendsHit.module.scss";
import ArtistImage from "../../../../public/Artist.png";
import Image from "next/image";

type Props = {
  title: string;
  background: string;
  year: number;
  src: string;
};

export const SectionTitle = (props: Props) => {
  return (
    <div className={styles.Container}>
      <div className="TitleContainer">
        <h2 className={styles.Title}>{props.title}</h2>
        <h1 className={styles.Year}>{props.year}</h1>
        <button className={styles.Button}>View Playlist</button>
      </div>
      <div className="ArtistImage">
        <Image src={props.src} alt="Artist" width={418} height={299} />
      </div>
    </div>
  );
};
