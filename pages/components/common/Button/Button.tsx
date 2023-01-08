import styles from "./Button.module.scss"

type Props = {
    children: string
}

const Button = ({ children }: Props) =>{
    return(
        <button className={styles.buttonRed}>
            {children}
        </button>
    )
}

export default Button;