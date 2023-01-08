import styles from "./Button.module.scss"

type Props = {
    children: string,
    type: 'buttonRed',
}

const Button = ({ children, type }: Props) =>{
    return(
        <button className={styles[type]}>
            {children}
        </button>
    )
}

export default Button;