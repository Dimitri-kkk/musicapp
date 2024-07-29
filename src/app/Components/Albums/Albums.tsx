'use client'
import AlbumCard from "../AlbumCard/AlbumCard";
import styles from "./Albums.module.scss"

const Albums = () => {

    const albums = [
        {
            id: 1,
            title: 'dnckkkk',
            image: '/images/caver.svg',
            name: 'eminem',
            year: 1999
        },
        {
            id: 2,
            title: 'dnckkkk',
            image: '/images/caver.svg',
            name: 'eminem',
            year: 2005
        }
    ]
    return (
        <main className={styles.main}>
            {albums.map(album => (
                <AlbumCard key={album.id} id={album.id} title={album.title} image={album.image} name={album.name} year={album.year} />
            ))}


        </main>
    );
}

export default Albums;

