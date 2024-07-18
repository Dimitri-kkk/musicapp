import styles from './ArtistCard.module.scss';


type Props = {
    title: string;
    url: string 
    year: string
}
export const Artist = (props: Props) => {
    return(
        <div className="parent-container">
        <div className={styles['Artist-Container']}>
          <img src={props.url} alt={`${props.title} Picture`} className={styles['Artist-Picture']} />
          <div className={styles['Artist-Info-Container']}>
            <h1 className={styles['Artist-Name']}>{props.title}</h1>
            <p className={styles['Artist-Year']}>{props.year}</p>
          </div>
        </div>
      </div>
    )
}   