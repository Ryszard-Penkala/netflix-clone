import styles from "./Header.module.scss"
import Image from 'next/image'
import Button from "../common/Button/Button";
import LangPicker from "../common/LangPicker/LangPicker";

const Header = () => {
    return (
        <header className={styles.headerSection}>
            <div className={styles.logoContainer}>
                <Image
                    src="/logo.svg"
                    alt="Netflix logo"
                    layout="fill"
                    className={styles.logo}
                />
            </div>
            <div className={styles.buttonContainer}>
                <LangPicker/>
                <Button type="buttonRed">
                    Sign In
                </Button>
            </div>
        </header>
    )
}

export default Header;