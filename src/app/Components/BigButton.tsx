import '../styles/styles.scss'

type Props = {
    title: string;
}
export const BigButton = (props: Props) => {
    return(
        <button className="Big-Button">{props.title}</button>
    )
}