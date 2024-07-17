import styles from './Button.module.scss'

type Props = {
    title: string;
    mode?: 'Normal' | 'Big'
}
export const Button = (props: Props) => {

    const classes = [styles.Button]

    if(props.mode == 'Big') classes.push(styles.Big)
    else if(props.mode == 'Normal') classes.push(styles.Button)
    else classes.push(styles.Normal)

    return(
        <div className={classes.join(' ')}>
            {props.title}
        </div>
    )
}