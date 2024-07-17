import '../../styles/styles.scss'

type Props = {
    title: string;
    url: string
    year: string
}
export const Artist = (props: Props) => {
    return(
        <div className="Artist-Container">
            <img src={props.url} alt={`${props.title} Picture`} className="Artist-Picture"/>
            <div className='Artist-Info-Container'>
                <h1 className="Artist-Name">{props.title}</h1>
                <p className="Artist-Year">{props.year}</p>
            </div>
        </div>
    )
}