import Link from 'next/link';
import styles from './ArtistCard.module.scss';


type Props = {
    title: string;
    url: string 
    year: string
}
export const Artist = (props: Props) => {
    return(
        <Link href='#' className="parent-container">
        <div className={styles['Artist-Link']}>
          <img src={props.url} alt={`${props.title} Picture`} className={styles['Artist-Picture']} />
          <div className={styles['Artist-Info-Container']}>
            <h1 className={styles['Artist-Name']}>{props.title}</h1>
            <p className={styles['Artist-Year']}>{props.year}</p>
          </div>
        </div>
      </Link>
    )
}   