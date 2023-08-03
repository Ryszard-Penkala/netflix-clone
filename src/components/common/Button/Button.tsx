import styles from "./Button.module.scss"

type Props = {
    children: string,
    type: 'buttonRed' | 'getStartedButton',
}

const Button = ({children, type}: Props) => {
    return (
        <button className={styles[type]}>
            <a href="/signin">
                {children}
            </a>
        </button>
    )
}

export default Button;