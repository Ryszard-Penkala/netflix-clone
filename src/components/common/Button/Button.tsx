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
                    ? (<div className={styles.getStartedArrowContainer}>
                        <div className={styles.getStartedArrow}>

                        </div>
                    </div>)
                : ''}
            </a>
        </button>
    )
}

export default Button;
