import MusicListCard from  './MusicListCard/MusicListCard'
import style from './MusicList.module.scss'



const MusicList = () =>{
    return(
        <div className={style.MusicListMainDiv}>
            <div className={style.Text}> Next Play </div>
            <div className={style.Music}>
                <div className={style.MusicItem}><MusicListCard src='/Rectangle 8.svg' title='flower' artist='anzora'  time = {400}/></div>
                <div className={style.MusicItem}><MusicListCard src='/Rectangle 8.svg' title='flower' artist='anzora'  time = {400}/></div>
                <div className={style.MusicItem}><MusicListCard src='/Rectangle 8.svg' title='flower' artist='anzora'  time = {400}/></div>
                <div className={style.MusicItem}><MusicListCard src='/Rectangle 8.svg' title='flower' artist='anzora'  time = {400}/></div>
                <div className={style.MusicItem}><MusicListCard src='/Rectangle 8.svg' title='flower' artist='anzora'  time = {400}/></div>
                <div className={style.MusicItem}><MusicListCard src='/Rectangle 8.svg' title='flower' artist='anzora'  time = {400}/></div>
                <div className={style.MusicItem}><MusicListCard src='/Rectangle 8.svg' title='flower' artist='anzora'  time = {400}/></div>

            </div>
        </div>
    )
}



export default MusicList;