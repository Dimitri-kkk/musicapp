import '../../styles/styles.scss'

export const Header = () => {
    return(
        <div className='Container'>
            <h1 className='Logo'>LOGO</h1>
            <input className='Search' type="text" placeholder='Search..' name='search' />
            <img className='Img' src="$" alt="$" />
        </div>
    )
}