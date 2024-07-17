import '../../styles/styles.scss'

type Props = {
    title: string;
    mode: 'normal' | 'big'
}
export const Button = (props: Props) => {
    return(
        <div className='Container'>
            <button className={`Button ${props.mode}`}>{props.title}</button>
        </div>
    )
}