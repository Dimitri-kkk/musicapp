import styles from "./TrendsHit.module.scss";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  background: string;
  year: number;
  src: string;
  link: string;
};

export const SectionTitle = (props: Props) => {
  return (
    <Link
      href={props.link}
      className={styles.Container}
      style={{ background: props.background }}
    >
      <div className={styles.TitleContainer}>
        <h2 className={styles.Title}>{props.title}</h2>
        <h3 className={styles.Year}>{props.year}</h3>
        <button className={styles.Button}>View Playlist</button>
      </div>
      <div className={styles.ArtistImage}>
        <Image src={props.src} alt="Artist" width={418} height={299} />
      </div>
    </Link>
  );
};
