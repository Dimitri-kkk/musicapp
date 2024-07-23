import Image from "next/image";
import { useState } from "react";
import style from './MuisicCard.module.scss';


type SongCardProps = {
  src : string;
  title: string;
  artist: string;
};

const MusicCard =(props:SongCardProps) =>{
  return(
    <div className={style.MainDiv}>
      <div className={style.FirstPart}>
        <Image
        src={props.src}
        width={43}
        height={43}
        alt="MusicCard"
        />
        <div className={style.TextPart}>
          <span>{props.title}</span>
          <span>{props.artist}</span>
        </div>
      </div>
      
    </div>
  )
}


export default MusicCard;