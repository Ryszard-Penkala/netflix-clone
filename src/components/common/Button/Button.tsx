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
                {type === 'getStartedButton'
                    ? (<p className={styles.getStartedArrowContainer}>
                        <div className={styles.getStartedArrow}>

                        </div>
                    </p>)
                : ''}
            </a>
        </button>
    )
}

export default Button;
