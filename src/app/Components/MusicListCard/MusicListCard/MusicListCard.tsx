import style from './MusicListCard.module.scss';
import React from 'react';
import Image from 'next/image';



type MusicListCardProps={
    src : string;
    title: string;
    artist: string;
    time: number;
};




const MusicListCard = (props:MusicListCardProps) => {
    return(
        <div className={style.MainDiv}>
            <img
            className={style.Imager}
            src={props.src}
            width={54}
            height={56}
            alt="MusicCard"
            style={{ borderRadius: '4px 0px 0px 4px' }}
            />
            <div className ={style.TextPart}>
                <div className={style.TitleArtist}>
                    <div className={style.Title}>{props.title}</div>
                    <div className={style.Artist}>{props.artist}</div>
                </div>
                <div className={style.Timer}>{props.time}</div>
            </div>
        </div>
        
    )
}

export default MusicListCard;