import Link from "next/link";
import styles from "./ArtistCard.module.scss";

type Props = {
  title: string;
  url: string;
  year: string;
};
export const Artist = (props: Props) => {
  return (
    <Link href="#" className={styles.ParentContainer}>
      <div className={styles.ArtistContainer}>
        <img src={props.url} alt="Album" className={styles.ArtistPicture} />
        <div className={styles.ArtistInfoContainer}>
          <h2 className={styles.ArtistName}>{props.title}</h2>
          <p className={styles.ArtistYear}>{props.year}</p>
        </div>
      </div>
    </Link>
  );
};
