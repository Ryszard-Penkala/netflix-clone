import styles from "./Button.module.scss"

type Props = {
    children: string
}

const Button = ({ children }: Props) =>{
    return(
        <button>
            {children}
        </button>
    )
}

export default Button;