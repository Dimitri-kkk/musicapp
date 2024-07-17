import '../../styles/styles.scss'

type Props = {
    title: string;
    type: 'Primary' | 'Secondary'
}
export const Button = (props: Props) => {
    return(
        <div className='Container'>
            <button className={`Button ${props.type}`}>{props.title}</button>
        </div>
    )
}