import Image from "next/image";
import { useState } from "react";
import styles from './SongCard.module.scss';
import heartFilled from '../../public/heart-filled.svg';
import heartOutlined from '../../public/heart-outlined.svg';

type SongCardProps = {
  imageUrl: string;
  title: string;
  artist: string;
};

const SongCard = ({ imageUrl, title, artist }: SongCardProps) => {
    const handler = ({req, res}) => {
        res.status(200).json([
          {
            imageUrl: "/album-cover.jpg",
            title: "Yellow",
            artist: "The Beatles"
          },
          {
            imageUrl: "/another-album-cover.jpg",
            title: "Another Song",
            artist: "Another Artist"
          }
        ]);
      }


  return (
    <div className={styles.songCard}>
      <div className={styles.songDetails}>
        <img src={imageUrl} alt="Album Cover" className={styles.albumCover} />
        <div className={styles.songInfo}>
          <div className={styles.songTitle}>{title}</div>
          <div className={styles.artistName}>{artist}</div>
        </div>
      </div>
    {/*aq chasvi heartButtoni roca daimerjeba */}
    </div>
  );
};

export default SongCard;
