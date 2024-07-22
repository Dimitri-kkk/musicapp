import styles from "./TrendsHit.module.scss";
import ArtistImage from "./Images/sex.png";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";

type Props = {
  title: string;
  background: string;
  year: number;
  backgroundImage?: StaticImageData;
};

export const SectionTitle = (props: Props) => {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>{props.title}</h1>
      <p className={styles.Year}>{props.year}</p>
      <button className={styles.Button}>View Playlist</button>
      <img src={ArtistImage} alt="Alt" />
    </div>
  );
};
