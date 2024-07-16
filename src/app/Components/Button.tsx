import '../styles/styles.scss'

type Props = {
    title: string;
}
export const Button = (props: Props) => {
    return(
        <button className="Button">{props.title}</button>
    )
}
