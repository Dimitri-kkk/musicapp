'use client';
import styles from "./AlbumCard.module.scss";
import Link from "next/link";


export interface Album {
    id: number;
    title: string;
    image: string;
    name: string;
    year: number;
}

const AlbumCard = (props: Album) => {
    return (
        <div className={styles.albumCardContainer}>
            <Link href={`album/${props.id}`}>
                <div className={styles.albumCard}>
                    <img className={styles.albumImg} src={props.image}  width={144} height={144}/>
                    <div className={styles.albumName}>
                        <div className={styles.albumNameWrapper}>
                        <span className={styles.albumTitle}>{props.title}</span>
                        <span className={styles.albumYear}>{props.year}</span>
                        </div>
                        
                        <span className={styles.artistName}>{props.name}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default AlbumCard;
