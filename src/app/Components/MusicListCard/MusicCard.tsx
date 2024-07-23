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
        <div className={style.thumbNail}>
          <Image
          className={style.ImageHover}
          src={props.src}
          width={40}
          height={40}
          alt="MusicCard"
          />
          {/* <div className={style.PlayButton}><img src="/PlayButton.svg"></img></div> */}
        </div>
        <div className  ={style.TextPart}>
          <span className={style.title}>{props.title}</span>
          <span className={ style.artistName}>{props.artist}</span>
        </div>
      </div>
      <span className={style.heart}>heart</span>
    </div>
  )
}


export default MusicCard;
