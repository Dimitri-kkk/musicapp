import styles from './MusicCard.module.css';
import HeartButton from '../HeartButton/HeartButton';

interface MusicCardProps {
    src: string;
    title: string;
    artist: string;
  }
  
  const MusicCard = ({ src, title, artist }: MusicCardProps) => {
    return (
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={src} alt={`${title} cover`} className={styles.image} />
          <div className={styles.overlay}>
            <img src="./play.svg" alt="Play" className={styles.playButton} />
          </div>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.info}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.artist}>{artist}</p>
            </div>
            <div className={styles.heart}>
                <HeartButton/>
            </div>
        </div>
      </div>
    );
  };
  
  export default MusicCard;